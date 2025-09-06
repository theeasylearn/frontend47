import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminForgotPassword from './AdminForgotPassword';
import AdminChangePassword from './AdminChangePassword';
import AdminLogin from './AdminLogin';
import AdminAddCategory from './AdminAddCategory';
import AdminAddProduct from './AdminAddProduct';
import AdminCategory from './AdminCategory';
import AdminDashboard from './AdminDashboard';
import AdminEditCategory from './AdminEditCategory';
import AdminEditProduct from './AdminEditProduct';
import AdminOrder from './AdminOrder';
import AdminPrintOrder from './AdminPrintOrder';
import AdminProduct from './AdminProduct';
import AdminUser from './AdminUser';
import AdminViewProduct from './AdminViewProduct';
import AdminViewOrder from './AdminViewOrder';
import AdminPageNotFound from './AdminPageNotFound.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/change-password" element={<AdminChangePassword />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/category" element={<AdminCategory />} />
        <Route path="/add-category" element={<AdminAddCategory />} />
        <Route path="/edit-category/:id" element={<AdminEditCategory />} />
        <Route path="/product" element={<AdminProduct />} />
        <Route path="/add-product" element={<AdminAddProduct />} />
        <Route path="/edit-product/:id" element={<AdminEditProduct />} />
        <Route path="/view-product/:id" element={<AdminViewProduct />} />
        <Route path="/order" element={<AdminOrder />} />
        <Route path="/view-order/:id" element={<AdminViewOrder />} />
        <Route path="/d:id" element={<AdminPrintOrder />} />
        <Route path="/users" element={<AdminUser />} />
        {/* define 404 route which handle request for non existing routes */}
        <Route path='*' element={<AdminPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
