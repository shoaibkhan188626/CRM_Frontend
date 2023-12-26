import React from 'react';
import { Form, Input, InputNumber } from 'antd';

export default function InventoryForm() {
  return (
    <>
      <Form.Item
        label="Product"
        name="product"
        rules={[
          {
            required: true,
            message: 'Please input Product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          {
            required: true,
            message: 'Please input Quantity',
            type: 'number',
            min: 0,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Unit Price"
        name="unit price"
        rules={[
          {
            required: true,
            message: 'Please input Unit Price!',
            type: 'number',
            min: 0,
          },
        ]}
      >
        <InputNumber
          formatter={(value) => `$ ${value}`}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        />
      </Form.Item>
    </>
  );
}
