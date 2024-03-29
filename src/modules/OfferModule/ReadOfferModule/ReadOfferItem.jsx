import { useState, useEffect } from 'react';
import { Button, Row, Col, Descriptions, Statistic, Tag, Divider } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import {
  EditOutlined,
  FilePdfOutlined,
  CloseCircleOutlined,
  RetweetOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import useLanguage from '@/locale/useLanguage';
import { erp } from '@/redux/erp/actions';
import { generate as uniqueId } from 'shortid';
import { selectCurrentItem } from '@/redux/crud/selector';
import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';
import { useMoney } from '@/settings';
import useMail from '@/hooks/useMail';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { moneyFormatter } = useMoney();
  return (
    <Row gutter={[12, 0]} key={item._id}>
      <Col className="gutter-row" span={11}>
        <p style={{ marginBottom: 5 }}>
          <strong>{item.itemName}</strong>
        </p>
        <p>{item.description}</p>
      </Col>

      <Col className="gutter-row" span={4}>
        <p style={{ textAlign: 'right' }}>{moneyFormatter({ amount: item.price })}</p>
      </Col>

      <Col className="gutter-row" span={4}>
        <p style={{ textAlign: 'right' }}>{item.quantity}</p>
      </Col>
      <Col className="gutter-row" span={5}>
        <p style={{ textAlign: 'right', fontWeight: '700' }}>
          {moneyFormatter({ amount: item.total })}
        </p>
      </Col>
      <Divider dashed style={{ marginTop: 0, marginBottom: 15 }} />
    </Row>
  );
};

export default function ReadOfferItem({ config, selectedItem }) {
  const translate = useLanguage();
  const { entity, ENTITY_NAME } = config;
  const dispatch = useDispatch();
  const { moneyFormatter } = useMoney();
  const { send } = useMail({ entity });
  const navigate = useNavigate();
  const { result: currentResult } = useSelector(selectCurrentItem);

  const resetErp = {
    status: '',
    label: {
      company: '',
      email: '',
      phone: '',
      address: '',
    },
    subTotal: 0,
    taxTotal: 0,
    taxRtae: 0,
    total: 0,
    credit: 0,
    number: 0,
    year: 0,
  };

  const [itemslist, setItemsList] = useState([]);
  const [currentErp, setCurrentErp] = useState(selectedItem ?? resetErp);

  useEffect(() => {
    const controller = new AbortController();
    if (currentResult) {
      const { items, invoice, ...others } = currentResult;
      if (items) {
        setItemsList(items);
        setCurrentErp(currentResult);
      } else if (invoice.items) {
        setItemsList(invoice.items);
        setCurrentErp({ ...invoice.items, ...others, ...invoice });
      }
    }
    return () => controller.abort();
  }, [currentResult]);

  return (
    <>
      <PageHeader
        onBack={() => {
          navigate(`${entity.toLowerCase()}`);
        }}
        title={`${ENTITY_NAME}#${currentErp.number}/${currentErp.year || ''}`}
        ghost={false}
        tags={<Tag color="volcano">{currentErp.paymentStatus || currentErp.status}</Tag>}
        extra={[
          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              navigate(`/${entity.toLowerCase()}`);
            }}
            icon={<CloseCircleOutlined />}
          >
            {translate('Close')}
          </Button>,

          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${currentErp._id}.pdf`);
            }}
            icon={<FilePdfOutlined />}
          >
            {translate('Download PDF')}
          </Button>,

          <Button
            key={`${uniqueId()}`}
            onClick={() => send(currentErp._id)}
            icon={<MailOutlined />}
          >
            {translate('Send by email')}
          </Button>,

          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              dispatch(erp.convert({ entity, id: currentErp._id }));
            }}
            icon={<RetweetOutlined />}
            style={{ display: entity === 'quote' ? 'inline-block' : 'none' }}
          >
            {translate('Convert to invoice')}
          </Button>,
          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              dispatch(erp.currentAction({ actionType: 'update', data: currentErp }));
              navigate(`${entity.toLowerCase()}/update/${currentErp._id}`);
            }}
            type="primary"
            icon={<EditOutlined />}
          >
            {translate('Edit')}
          </Button>,
        ]}
        style={{
          padding: '20px 0px',
        }}
      >
        <Row>
          <Statistic title="status" value={currentErp.status} />
          <Statistic
            title={translate('subTotal')}
            value={moneyFormatter({ amount: currentErp.subTotal })}
            style={{ margin: '0 32px' }}
          />
          <Statistic
            title={translate('Total')}
            value={moneyFormatter({ amount: currentErp.total })}
            style={{ margin: '0 32px' }}
          />
          <Statistic
            title={translate('Balance')}
            value={moneyFormatter({ amount: currentErp.credit })}
            style={{ margin: '0 32px' }}
          />
        </Row>
      </PageHeader>
      <Divider dashed />
      <Descriptions title={`lead:${currentErp.lead.company}`}>
        <Descriptions.Item label={translate('Address')}>
          {currentErp.lead.address}
        </Descriptions.Item>

        <Descriptions.Item label={translate('email')}>{currentErp.lead.email}</Descriptions.Item>

        <Descriptions.Item label={translate('Phone')}>{currentErp.lead.phone}</Descriptions.Item>
      </Descriptions>
      <Divider />

      <Row gutter={[12, 0]}>
        <Col className="gutter-row" span={11}>
          <p>
            <strong>{translate('product')}</strong>
          </p>
        </Col>
        <Col className="gutter-row" span={4}>
          <p style={{ textAlign: 'right' }}>
            <strong>{translate('PRICE')}</strong>
          </p>
        </Col>
        <Col className="gutter-row" span={4}>
          <p style={{ textAlign: 'right' }}>
            <strong>{translate('QUANTITY')}</strong>
          </p>
        </Col>
        <Col className="gutter-row" span={5}>
          <p style={{ textAlign: 'right' }}>
            <strong>{translate('TOTAL')}</strong>
          </p>
        </Col>
        <Divider />
      </Row>

      {itemslist.map((item) => (
        <Item key={item._id} item={item}></Item>
      ))}

      <div
        style={{
          width: '300px',
          float: 'right',
          textAlign: 'right',
          fontWeight: '700',
        }}
      >
        <Row gutter={[12, -5]}>
          <Col className="gutter-row" span={12}>
            <p>{translate('Sub Total')}:</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>{moneyFormatter({ amount: currentErp.subTotal })}</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>Tax Total({currentErp.taxRate * 100}%)</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>{moneyFormatter({ amount: currentErp.taxTotal })}</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>{translate("Total")}:</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>{moneyFormatter({amount:currentErp.total})}</p>
          </Col>
        </Row>
      </div>
    </>
  );
}
