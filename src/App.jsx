import React from "react";

// importing react router essentials
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing screens
import LandingPage from "./screens/LandingPage";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import ReservationScreen from "./screens/ReservationScreen";
import MenuScreen from "./screens/MenuScreen";
import ErrorScreen from "./screens/ErrorScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/reservation" element={<ReservationScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
