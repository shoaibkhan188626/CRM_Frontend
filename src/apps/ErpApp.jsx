import { useLayoutEffect } from 'react';
import { Layout } from 'antd';
import { useAppContext } from '@/context/appContext';
import Navigation from '@/apps/components/Navigation';
import HeaderContent from '@/apps/components/HeaderContent';
import { useDispatch } from 'react-redux';
import { settingsAction } from '@/redux/settings/action';
import AppRouter from '@/router/AppRouter'
