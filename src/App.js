import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Dashboard from "./views/Dashboard";
import Tickets from "./views/Tickets";
import CreateTicket from "./views/CreateTicket";
import Login from "./views/Login";

import Sidebar from "./components/Sidebar";

import "./styles/main.css";
import "./styles/inscricao.css";
import "./styles/mainindex.css";
import "./styles/responsive.css";
import "./styles/DetailsTicket.css";
import { themeChange } from "theme-change";

function App() {
  useEffect(()=> {
    themeChange(false);
  }, [])
  return (
    <BrowserRouter>
      {window.location.pathname === "/login" || window.location.pathname === "/" ? "" : <Sidebar></Sidebar>}
      <Routes>
        <Route exact index element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/tickets" element={<Tickets />} />
        <Route exact path="/create/ticket" element={<CreateTicket />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
