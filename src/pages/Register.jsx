import React from 'react';
import { Form, Button, Layout, Col, Divider, Typography } from 'antd';
import RegisterForm from '@/forms/RegisterForm';
import AuthLayout from '@/layout/AUthLayout';
import SideContent from '@/components/SideContent';
import useLanguage from '@/locale/useLanguage';
import logo from '@/style/images/logo.png';

const { Conent } = Layout;
const { Title } = Typography;
const RegisterPage = () => {
  const translate = useLanguage();
  const onFinish = () => {};
  
  return <div>Register</div>;
};

export default RegisterPage;
