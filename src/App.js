import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, {useEffect, useState} from 'react';
import Dashboard from './views/Dashboard';
import Tickets from './views/Tickets';
import CreateTicket from './views/CreateTicket';
import Login from './views/Login';


import Sidebar from './components/Sidebar';

import './styles/main.css';
import './styles/inscricao.css';
import './styles/mainindex.css';
import './styles/responsive.css';
import './styles/DetailsTicket.css'


function App() {
// eslint-disable-next-line
  const [backendData, setBackendData] = useState([{}])
  console.log(window.location.pathname)
  useEffect(() => {
    fetch("crm-tera/ticket/all").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <BrowserRouter>
      {window.location.pathname === "/login" ? '' : <Sidebar></Sidebar>}
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/create/ticket' element={<CreateTicket />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
