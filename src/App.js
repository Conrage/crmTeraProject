import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Dashboard from './views/Dashboard';
import Tickets from './views/Tickets';

import Sidebar from './components/Sidebar';

import './styles/main.css';
import './styles/inscricao.css';
import './styles/mainindex.css';
import './styles/responsive.css';

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/tickets' element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
