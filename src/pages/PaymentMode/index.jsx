import React from 'react';
import useLanguage from '@/locale/useLanguage';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import CrudModule from '@/modules/CrudModule/CrudModule';
import PaymentModeForm from '@/forms/PaymenyModelForm';

export default function PaymentMode() {
  const translate = useLanguage();
  const entity = 'paymentMode';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name'];

  const readColumns = [
    {
      title: translate('Payment Mode'),
      dataIndex: 'name',
    },
    {
      title: translate('Default'),
      dataIndex: 'isDeafult',
    },
    {
      title: translate('Description'),
      dataIndex: 'description',
    },
    {
      title: translate('enabled'),
      dataIndex: 'enabled',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Payment Mode'),
      dataIndex: 'name',
    },
    {
      title: translate('Description'),
      dataIndex: 'desciption',
    },
    {
      title: translate('Default'),
      dataIndex: 'isDefault',
      key: 'isDefault',
      onCell: (record, rowIndex) => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
        };
      },
      render: (_, record) => {
        return (
          <Switch
            checked={record.isDefault}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        );
      },
    },
    {
      title: translate('enabled'),
      dataIndex: 'enabled',
      key: 'enabled',
      onCell: (record, rowIndex) => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
        };
      },
      render: (_, record) => {
        return (
          <Switch
            checked={record.enabled}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        );
      },
    },
  ];

  const Lables = {
    PANEL_TITLE: translate('payment_mode'),
    DATATABLE_TITLE: translate('payment_mode_list'),
    ADD_NEW_ENTITY: translate('add_new_payment_mode'),
    ENTITY_NAME: translate('payment_mode'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Lables,
  };

  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return (
    <CrudModule
      createForm={<PaymentModeForm />}
      updateForm={<PaymentModeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
