import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';
import Register from '@/pages/Register';

export default function AuthRouter() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Login />} path="/logout" />
      <Route element={<Register />} path="/register" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
