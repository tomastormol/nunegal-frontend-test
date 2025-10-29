import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
}
