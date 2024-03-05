import useLanguage from '@/locale/useLanguage';
import UpdateSettingModule from '../components/UpdateSettingModule';
import MoneyFormSettingForm from './SettingsForm';
import SetingsSection from '../components/SetingsSections';

export default function MoneyFormatSettingsModule({ config }) {
  const translate = useLanguage();
  return (
    <UpdateSettingModule config={config}>
      <SetingsSection
        title={translate('Currency Format')}
        description={translate('update Currency format')}
      >
        <MoneyFormSettingForm />
      </SetingsSection>
    </UpdateSettingModule>
  );
}
