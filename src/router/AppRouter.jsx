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
const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));
const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
const InvoiceRecordPayment = lazy(() => import('@/pages/Invoice/InvoiceRecordPayment'));
const Quote = lazy(() => import('@/pages/Quote/index'));
const QuoteCreate = lazy(() => import('@/pages/Quote/QuoteCreate'));
const QuoteRead = lazy(() => import('@/pages/Quote/QuoteRead'));
const QuoteUpdate = lazy(() => import('@/pages/Quote/QuoteUpdate'));
const Payment = lazy(() => import('@/pages/Payment/index'));
const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
const 
