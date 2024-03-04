import { Form, Input, Select } from "antd";
import useLanguage from "@/locale/useLanguage";
import languages from "@/locale/languages";

export default function GeneralSettingForm() {
    const translate = useLanguage();
    return (
        <>
            <Form.Item
                label={translate('Company Name')}
                name="company_name"
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input autoComplete="off" />
            </Form.Item>

            <Form.Item
                label={translate("language")}
                name='language'
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Select
                    showSearch
                    placeholder={translate('select language')}
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLocaleLowerCase().startsWith((optionB?.label ?? '').toLocaleLowerCase())
                    }
                >
                    {languages.map((language)=>(
                        <Select.Option></Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </>
    )
}