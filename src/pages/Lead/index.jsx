import dayjs from 'dayjs';
import { Tag } from 'antd';
import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';
import useLanguage from '@/locale/useLanguage';

export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';

  const searchConfig = {
    displayLables: ['firstname', 'company'],
    searchFields: 'fisrtname,company',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['number', 'company'];

  const readColumns = [
    {
      title: translate('First Name'),
      dataIndex: 'first name',
    },
    {
      title: translate('Last Name'),
      dataIndex: 'lastName',
    },
    {
      title: translate('Company'),
      dataIndex: 'company',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('First Name'),
      dataIndex: ['firstName'],
    },
    {
      title: translate('Last Name'),
      dataIndex: ['lastName'],
    },
    {
      title: translate('Company'),
      dataIndex: ['compayn'],
    },
    {
      title: translate('Email'),
      dataIndex: ['email'],
    },
    {
      title: translate('Phone'),
      dataIndex: ['phone'],
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        let color =
          status === 'new'
            ? 'cyan'
            : status === 'reached'
            ? 'blue'
            : status === 'intrested'
            ? 'green'
            : status === 'nott intrested'
            ? 'orange'
            : 'red';
        return <Tag color={color}>{status && translate(status)}</Tag>;
      },
    },
    {
      title: translate('Created'),
      dataIndex: 'created',
      render: (date) => dayjs(date).format('DD/MM/YYYY'),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('lead'),
    DATATABLE_TITLE: translate('lead_list'),
    ADD_NEW_ENTITY: translate('add_new_lead'),
    ENTITY_NAME: translate('lead'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('updated'),
  };

  const configPage = {
    entity,
    ...Labels,
  };

  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return (
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}
