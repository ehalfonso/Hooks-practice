import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </UserProvider>
  );
};
