import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { Signup } from "./pages/Signup";
import { CreditCard } from "./pages/CreditCard";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
