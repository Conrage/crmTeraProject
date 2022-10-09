
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import OneTicket from '../components/OneTicket';


function Tickets() {
  

  const [tickets, setTickets] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/crm-tera/ticket/all').then((response) => {
      const data = response.data;

      setTickets(data);
    });
  }, []);

  return (
    
    <div className='tickets-container'>
        
      <main>
        <div className='search-bar'>
          <span className='material-icons menu-show'>menu</span>
          <div className='search-input-box'>
            <span className='material-icons'>search</span>
            <input placeholder='Search your ticket' />
          </div>
        </div>
        <div className='content'>
          <div className='header'>
            <div className='titles'>
              <h1>Tickets</h1>
              <h4>Know about your tickets</h4>
            </div>
            <NavLink to='/create/ticket' className='button-add-ticket'>
              + New ticket
            </NavLink>
          </div>
          <div className='table-responsive-xxl'>
            <table className='table table-hover mt-5 table-bg'>
              <thead>
                <tr className='table-color'>
                  <th role='button' scope='col'>
                    ID
                  </th>
                  <th role='button' scope='col'>
                    Client
                  </th>
                  <th role='button' scope='col'>
                    Responsable
                  </th>
                  <th role='button' scope='col'>
                    Priority
                  </th>
                  <th role='button' scope='col'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, index) => {
                  
                  return (
                    <OneTicket ticket={ticket} index={index}/>   
                  );
                })}
                
              </tbody>
              
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tickets;
