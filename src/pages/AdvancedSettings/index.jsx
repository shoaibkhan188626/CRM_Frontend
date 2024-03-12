import React from 'react';
import useLanguage from '@/locale/useLanguage';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import CrudModal from '@/modules/CrudModule/CrudModule';
import AdvancedSettingsForm from '@/forms/AdvancedSettingsForm';

export default function AdvancedSettings() {
  const translate = useLanguage();
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name'];

  const readColumns = [
    {
      title: translate('Setting'),
      dataIndex: 'settingKey',
    },
    {
      title: translate('Value'),
      dataIndex: 'settingValue',
    },
    {
      title: translate('Value'),
      dataIndex: 'settingValue',
    },
  ];
}
