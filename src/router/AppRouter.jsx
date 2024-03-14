import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.JSX'));
const Dashboard = lazy(() => import('@/pages/Dashboard.jsx'));
const Customer = lazy(() => import('@/pages/Customer'));
const Inventory = lazy(() => import('@/pages/Inventory'));
const Order = lazy(() => import('@/pages/Order'));
const Invoice = lazy(() => import('@/pages/Invoice'));
const InvoiceCreate=lazy(()=>import('@/pages/Invo'))
