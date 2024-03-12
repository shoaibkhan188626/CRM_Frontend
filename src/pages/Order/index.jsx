import React from 'react';
import CrudModule from '@/modules/CrudModule/CrudModule';
import OrderForm from '@/forms/OrderForm';
import useLanguage from '@/locale/useLanguage';

export default function Order() {
  const translate = useLanguage();
  const entity = 'order';
  const searchConfig = {
    displayLabels: ['orderId', 'status'],
    searchFields: 'orderId,status',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['orderId'];

  const readColumns = [
    {
      title: translate('Order ID'),
      dataIndex: 'orderId',
    },
    {
      title: translate('Product'),
      dataIndex: 'product',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
    {
      title: translate('Note'),
      dataIndex: 'notes',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Order ID'),
      dataIndex: 'orderId',
    },
    {
      title: translate('Product'),
      dataIndex: 'products',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Price'),
      dataIndex: 'price',
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
    {
      title: translate('Note'),
      dataIndex: 'notes',
    },
  ];

  const Lables = {
    PANEL_TITLE: translate('order'),
    DATATABLE_TITLE: translate('order_list'),
    ADD_NEW_ENTITY: translate('add_new_order'),
    ENTITY_NAME: translate('order'),
    CREATE_NAME: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Lables,
  };

  const config = {
    ...config,
    dataTableColumns,
    readColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<OrderForm />}
      updateForm={<OrderForm isUpdateForm={true} />}
      config={config}
    />
  );
}
