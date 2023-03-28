import React from "react";
import HomePage from "./components/HomePage";
import LoginWithImage from "./components/login";
import NavBar from "./components/navbar/Navbar";
import TestForm from "./components/TestForm";
import VerifyAuthForm from "./components/Validation";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import DamageProduct from "./components/Damage";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginWithImage />} />
      <Route path="verify" element={<VerifyAuthForm />} />
      <Route path="damage" element={<DamageProduct />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="test" element={<TestForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <NavBar>
        <Outlet />
      </NavBar>
    </div>
  );
}

export default App;
