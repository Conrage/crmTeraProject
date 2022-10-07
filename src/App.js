import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Dashboard from './views/Dashboard';
import Tickets from './views/Tickets';
import CreateTicket from './views/CreateTicket';
import DetailsTicket from './views/DetailsTicket';

import Sidebar from './components/Sidebar';

import './styles/main.css';
import './styles/inscricao.css';
import './styles/mainindex.css';
import './styles/responsive.css';
import './styles/DetailsTicket.css'


function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/create/ticket' element={<CreateTicket />} />
        <Route path='/DetailsTicket' element={<DetailsTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
