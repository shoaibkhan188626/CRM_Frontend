import {
  SettingOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  DollarOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import TabsContent from '@/components/TabsContent/TabsContent';
import CompanyLogoSettings from './CompanyLogoSettings';
import GeneralSettings from './GeneralSettings';
import PaymentSettings from './PaymentSettings';
import MoneyFormatSettings from './MoneyFormatSettings';
import InvoiceSettings from './MoneyFormatSettings';
import useLanguage from '@/locale/useLanguage';

export default function Settings() {
  const translate = useLanguage();
  const content = [
    {
      label: translate('General Settings'),
      icon: <SettingOutlined />,
      children: <GeneralSettings />,
    },
    {
      label: translate('Company Logo'),
      icon: <FileImageOutlined />,
      children: <CompanyLogoSettings />,
    },
    {
      label: translate('Currency Settings'),
      icon: <DollarOutlined />,
      children: <MoneyFormatSettings />,
    },
    {
      label: translate('Finance Settings'),
      icon: <CreditCardOutlined />,
      children: <PaymentSettings />,
    },
    {
      label: translate('Crm Settings'),
      icon: <FileTextOutlined />,
      children: <InvoiceSettings />,
    },
  ];

  const pageTitle = translate('settings');
  return <TabsContent content={content} pageTitle={pageTitle} />;
}
