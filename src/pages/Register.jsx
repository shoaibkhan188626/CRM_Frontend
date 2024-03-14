import React from 'react';
import { Form, Button, Layout, Col, Divider, Typography } from 'antd';
import RegisterForm from '@/forms/RegisterForm';
import AuthLayout from '@/layout/AUthLayout';
import SideContent from '@/components/SideContent';
import useLanguage from '@/locale/useLanguage';
import logo from '@/style/images/logo.png';

const { Content } = Layout;
const { Title } = Typography;
const RegisterPage = () => {
  const translate = useLanguage();
  const onFinish = () => {};

  return (
    <>
      <AuthLayout sideContent={<SideContent />}>
        <Content
        style={{
          padding:'200px 30px 30px',
          maxWidth:'440px',
          margin:'0 auto'
        }}
        >

        </Content>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
