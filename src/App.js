import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import React, { useEffect, useState } from "react";
import Dashboard from "./views/Dashboard";
import Tickets from "./views/Tickets";
import CreateTicket from "./views/CreateTicket";
import Login from "./views/Login";
import Cookies from "js-cookie";
import Sidebar from "./components/Sidebar";

import "./styles/main.css";
import "./styles/inscricao.css";
import "./styles/mainindex.css";
import "./styles/responsive.css";
import "./styles/DetailsTicket.css";
import { themeChange } from "theme-change";

function App() {
  let location = useLocation();
  useEffect(() => {
    themeChange(false);
  }, [location]);

  function SidebarAuth() {
    if (window.location.pathname === "/" || window.location.pathname === "/login") return "";

    return <Sidebar></Sidebar>;
  }

  return (
    <>
      <SidebarAuth></SidebarAuth>
      <Routes>
        <Route exact index element={<Navigate to="/login" replace />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/tickets" element={<Tickets />} />
        <Route exact path="/create/ticket" element={<CreateTicket />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
