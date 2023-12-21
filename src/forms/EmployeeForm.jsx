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
    </>
  );
}
