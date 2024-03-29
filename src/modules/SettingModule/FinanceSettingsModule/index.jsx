import SetingsSection from "../components/SetingsSections";
import UpdateSettingModule from "../components/UpdateSettingModule";
import MoneyFormSettingForm from "./SettingdForm";
import useLanguage from "@/locale/useLanguage";

export default function MoneyFormatSettingsModule({ config }) {
    const translate = useLanguage();

    return (
        <UpdateSettingModule config={config}>
            <SetingsSection
                title={translate('Currency Format')}
                description={translate('Update Currency format')}
            >
                <MoneyFormSettingForm />
            </SetingsSection>
        </UpdateSettingModule>
    )
}