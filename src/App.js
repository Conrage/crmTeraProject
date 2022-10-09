import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, {useEffect, useState} from 'react';
import Dashboard from './views/Dashboard';
import Tickets from './views/Tickets';
import CreateTicket from './views/CreateTicket';


import Sidebar from './components/Sidebar';

import './styles/main.css';
import './styles/inscricao.css';
import './styles/mainindex.css';
import './styles/responsive.css';
import './styles/DetailsTicket.css'


function App() {
// eslint-disable-next-line
  const [backendData, setBackendData] = useState([{}])

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
      <Sidebar></Sidebar>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/create/ticket' element={<CreateTicket />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
