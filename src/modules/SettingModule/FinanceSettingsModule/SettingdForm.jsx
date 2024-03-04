import { Form, Input, InputNumber, Select, Switch } from 'antd'
import useLanguage from '@/locale/useLanguage'

export default function MoneyFormSettingForm() {
    const translate = useLanguage();

    return (
        <>
            <Form.Item
                label={translate('Currency Number')}
                name='currency'
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input autoComplete='off' />
            </Form.Item>

            <Form.Item
                label={translate('Currency Symbol')}
                name="currecy_symbol"
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input autoComplete='off' />
            </Form.Item>

            <Form.Item
                label={translate('Currency Position')}
                name='currency position'
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Select>
                    <Select.Option value='before'>{translate('before')}</Select.Option>
                    <Select.Option value='after'>{translate('after')}</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                label={translate('Decimal Separator')}
                name='decimal_sep'
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input autoComplete='off' />
            </Form.Item>

            <Form.Item
                label={translate('Thousand Separator')}
                name='thousand_sep'
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input autoComplete='off' />
            </Form.Item>

            <Form.Item
                label={translate('Cent precision')}
                name='cent_precision'
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <InputNumber min={0} />
            </Form.Item>

            <Form.Item
                label={translate('Zero Format')}
                name='Zero_format'
                rules={[
                    {
                        required: true
                    }
                ]}
                valuePropName='checked'
            >
                <Switch />
            </Form.Item>
        </>
    )
}