import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/admin";
import AddProductPage from "../pages/admin/add";
import ProductEditPage from "../pages/admin/edit";
import DeleteProduct from "../pages/admin/delete";
import Cart from "../pages/cart";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/login";
import ProductPage from "../pages/product";
import SignupPage from "../pages/signup";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/register" element={<SignupPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/products/list" element={<AdminPage />} />
        <Route path="/admin/products/add" element={<AddProductPage />} />
        <Route path="/admin/products/edit" element={<ProductEditPage />} />
        <Route path="/admin/products/delete" element={<DeleteProduct />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
