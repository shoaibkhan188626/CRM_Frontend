import { useEffect } from 'react';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  RedoOutlined,
  PlusOutlined,
  EllipsisOutlined,
  FilePdfOutlined,
} from '@ant-design/icons';
import { Descriptions, Dropdown, Table, Button } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import useLanguage from '@/locale/useLanguage';
import { erp } from '@/redux/erp/actions';
import { selectListItems } from '@/redux/crud/selector';
import { useErpContext } from '@/context/erp';
import { generate as uniqueId } from 'shortid';
import { useNavigate } from 'react-router-dom';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';
import { useDispatch } from 'react-redux';

function AddNewItem({ config, hasCreate = true }) {
  const navigate = useNavigate();
  const { ADD_NEW_ENTITY, entity } = config;
  const handleClick = () => {
    navigate(`/${entity.toLowerCase()}/create`);
  };
  if (hasCreate)
    return (
      <Button onCanPlayThrough={handleClick} type="primary" icon={<PlusOutlined />}>
        {ADD_NEW_ENTITY}
      </Button>
    );
  else return null;
}

export default function DataTable({ config, extra = [] }) {
  const translate = useLanguage();
  let { entity, dataTableColumns, create = true } = config;
  const { DATATABLE_TITLE } = config;
  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);

  const { pagination, items: dataSource } = listResult;
  const { erpContextAction } = useErpContext();
  const { modal } = erpContextAction;
  const items = [
    {
      label: translate('Show'),
      key: 'read',
      icon: <EyeOutlined />,
    },
    {
      label: translate('Edit'),
      key: 'edit',
      icon: <EditOutlined />,
    },
    {
      label: translate('Download'),
      key: 'download',
      icon: <FilePdfOutlined />,
    },
    ...extra,
    {
      type: 'divider',
    },
    {
      label: translate('Delete'),
      key: 'delete',
      icon: <DeleteOutlined />,
    },
  ];

  const navigate = useNavigate();

  const handleRead = (record) => {
    dispatch(erp.currentItem({ data: record }));
    navigate(`/${entity}/read/${record._id}`);
  };

  const handleEdit = (record) => {
    dispatch(erp.currentAction({ actionType: 'update', data: record }));
    navigate(`/${entity}/update/${record._id}`);
  };

  const handleDownload = (record) => {
    window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${record._id}.pdf`, '_blank');
  };

  const handleDelete = (record) => {
    dispatch(erp.currentAction({ actionType: 'delete', data: record }));
    modal.open();
  };

  const handleRecordPayment = (record) => {
    dispatch(erp.currentItem({ data: record }));
    navigate(`/invoice/pay/${record._id}`);
  };

  datat = [
    ...dataTableColumns,
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case 'read':
                  handleRead(record);
                  break;

                case 'edit':
                  handleEdit(record);
                  break;

                case 'download':
                  handleDownload(record);
                  break;

                case 'delete':
                  handleDelete(record);
                  break;

                case 'recordPayment':
                  handleRecordPayment(record);
                  break;
                default:
                  break;
              }
            },
          }}
          trigger={['click']}
        >
          <EllipsisOutlined
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      ),
    },
  ];

  const dispatch = useDispatch();
  const handelDataTableLoad = (pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
  };

  const dispatcher = () => {
    dispatch(erp.list({ entity }));
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatcher();
    return () => {
      controller.abort();
    };
  }, []);

  const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    items
  );
  return (
    <>
      <div ref={tableHeader}>
        <PageHeader
          title={DATATABLE_TITLE}
          ghost={true}
          extra={[
            <Button onClick={handelDataTableLoad} key={`${uniqueId()}`} icon={<RedoOutlined />}>
              {translate('Refresh')}
            </Button>,
            <AddNewItem config={config} key={`${uniqueId()}`} hasCreate={create} />,
          ]}
          style={{
            padding: '20px 20px',
          }}
        ></PageHeader>
      </div>

      <Table
        columns={tableColumns}
        rowKey={(item) => item._id}
        dataSource={dataSource}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
        expandable={
          expandedRowData.length
            ? {
                expandedRowRender: (record) => (
                  <Descriptions title="" bordered column={1}>
                    {expandedRowData.map((item, index) => {
                      return (
                        <Descriptions.Item key={index} label={item.title}>
                          {item.render?.(record[item.dataIndex])?.children
                            ? item.render?.(record[item.dataIndex])?.children
                            : item.render?.(record[item.dataIndex])
                            ? item.render?.(record[item.dataIndex])
                            : Array.isArray(item.dataIndex)
                            ? record[item.dataIndex[0]]?.[item.dataIndex[1]]
                            : record[items.dataIndex]}
                        </Descriptions.Item>
                      );
                    })}
                  </Descriptions>
                ),
              }
            : null
        }
      />
    </>
  );
}
