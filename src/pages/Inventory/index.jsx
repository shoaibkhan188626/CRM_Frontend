import React from 'react';
import CurdModule from '@/modules/CrudModule/CrudModule';
import InventoryForm from '@/forms/InventoryForm';
import useLanguage from '@/locale/useLanguage';

export default function Inventory() {
  const translate = useLanguage();
  const entity = 'inventory';
  const searchConfig = {
    displayLabels: ['product'],
    seachFields: 'product',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['product', 'quantity', 'unitPrice'];

  const readColumns = [
    {
      title: translate('Product'),
      dataIndex: 'product',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Unit Price'),
      dataIndex: 'unitPrice',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Product'),
      dataIndex: ['product'],
    },
    {
      title: translate('Quantity'),
      dataIndex: ['quantity'],
    },
    {
      title: translate('Unit Price'),
      dataIndex: ['unitPrice'],
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('product'),
    DATATABLE_TITLE: translate('product_list'),
    ADD_NEW_ENTITY: translate('add_new_product'),
    ENTITY_NAME: translate('product'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CurdModule
      createForm={<InventoryForm />}
      updateForm={<InventoryForm isUpdateForm={true} />}
      config={config}
    />
  );
}
