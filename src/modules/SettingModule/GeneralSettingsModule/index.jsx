import useLanguage from '@/locale/useLanguage';
import SetingsSection from '../components/SetingsSections';
import GeneralSettingForm from './forms/GeneralSettingForm';
import useLanguage from '@/locale/useLanguage';
import UpdateSettingModule from '../components/UpdateSettingModule';

export default function GeneralSettingsModule({ config }) {
  const translate = useLanguage();
  return (
    <UpdateSettingModule config={config}>
      <SetingsSection
        title={translate('Company')}
        description={translate('Update your company information')}
      >
        <GeneralSettingForm />
      </SetingsSection>
    </UpdateSettingModule>
  );
}
