import React from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';
import useLanguage from '@/locale/useLanguage';

export default function EmployeeForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        name="name"
        label={translate('first name')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="name" label={translate('last name')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="birthday"
        label={translate('birthday')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker placeholder={translate('select_date')} format={'DD/MM/YYYY'} />
      </Form.Item>

      <Form.Item
        name="birthplace"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label={translate('gender')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="men">{translate('men')}</Select.Option>
          <Select.Option value="women">{translate('women')}</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="email"
        label={translate('email')}
        rules={[{ type: 'email' }, { required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label={translate('phone')}
        rules={[{ required: true }, { pattern: validatePhoneNumber }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="department"
        label={translate('Department')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="position" label={translate('Position')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="address" label={translate('Address')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="state" label={translate('State')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </>
  );
}
