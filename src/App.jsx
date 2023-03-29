import React from "react";
import HomePage from "./components/HomePage";
import LoginWithImage from "./components/login";
import NavBar from "./components/navbar/Navbar";
import TestForm from "./components/TestForm";
import VerifyAuthForm from "./components/Validation";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import DamageProduct from "./components/Damage";
import VerifyAuthFormTwo from "./components/ValidationTwo";
import LoginWithImageTwo from "./components/loginTwo";

function App() {
  return (
    <Routes>
      <Route path="/v1" element={<LoginWithImage />} />
      <Route path="/v2" element={<LoginWithImageTwo />} />
      <Route path="verify1" element={<VerifyAuthForm />} />
      <Route path="verify2" element={<VerifyAuthFormTwo />} />
      <Route path="damage" element={<DamageProduct />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="addp" element={<TestForm />} />
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
