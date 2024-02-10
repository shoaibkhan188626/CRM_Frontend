import React from 'react';
import dayjs from 'dayjs';
import { Form, Input, InputNumber } from 'antd';
import { DatePicker } from 'antd';
import SelectAsync from '@/components/SelectAsync';
import { useMoney } from '@/settings';
import useLanguage from '@/locale/useLanguage';

export default function PaymentForm({ maxAmount = null, isUpdateForm = false }) {
  const translate = useLanguage();
  const { TextArea } = Input;
  const money = useMoney();
  return (
    <>
      <Form.Item
        label={translate('number')}
        initialValue={1}
        rules={[
          {
            required: true,
          },
        ]}
        style={{ width: '50%', float: 'left', paddingRight: '20px' }}
      >
        <InputNumber min={1} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="date"
        label={translate('date')}
        rules={[{ required: true, type: 'object' }]}
        initialValue={dayjs().add(30, 'add')}
        style={{ width: '100%' }}
      >
        <DatePicker format={'DD/MM/YYYY'} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label={translate('amount')} name="amount" rules={[{ required: true }]}>
        <InputNumber
          className="moneyInput"
          min={0}
          controls={false}
          max={maxAmount}
          addonAfter={money.currency_position === 'after' ? money.currency_symbol : undefined}
          addonBefore={money.currency_position === 'before' ? money.currency_symbol : null}
        />
      </Form.Item>

      <Form.Item
        label={translate('payment Mode')}
        name="paymentMode"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <SelectAsync
          entity={'paymentMode'}
          displayLabels={['name']}
          loadDefault={true}
          withRedirect={true}
          urlToRidirect="/payment/mode"
          redirectLabel="Add payment Mode"
        ></SelectAsync>
      </Form.Item>

      <Form.Item label={translate('Refrence')} name="ref">
        <Input />
      </Form.Item>

      <Form.Item label={translate('Description')} name="description">
        <TextArea />
      </Form.Item>
    </>
  );
}
