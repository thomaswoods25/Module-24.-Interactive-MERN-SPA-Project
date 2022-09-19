import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;