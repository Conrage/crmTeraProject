import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import SlackLogo from '../images/slack-logo.png';

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  const translateStatus = {
    inprogress: 'In progress',
    created: 'created',
  };

  useEffect(() => {
    axios.get('http://localhost:4000/crm-tera/ticket/all').then((response) => {
      const data = response.data;

      setTickets(data);
    });
  }, []);

  return (
    <div className='dashboard-container'>
      <main>
        <div className='search-bar'>
          <span className='material-icons menu-show'>menu</span>
          <div className='search-input-box'>
            <span className='material-icons'>search</span>
            <input placeholder='Search everything' />
          </div>
        </div>
        <div className='content'>
          <div className='header'>
            <div className='titles'>
              <h1>Tickets</h1>
              <h4>Welcome to CRM dashboard</h4>
            </div>
            <NavLink to='/create/ticket' className='button-add-ticket'>
              + New ticket
            </NavLink>
          </div>
          <div className='charts-container'>
            <div className='chart-box circle-chart'>
              <div className='header'>
                <h3>Tickets status</h3>
                <div className='dropdown'>
                  This month{' '}
                  <span className='material-icons'>keyboard_arrow_down</span>
                </div>
              </div>
              <div className='circle-img'></div>
            </div>
            <div className='chart-box line-chart'>
              <div className='header'>
                <h3>Tickets by priority</h3>
                <div className='dropdown'>
                  This month{' '}
                  <span className='material-icons'>keyboard_arrow_down</span>
                </div>
              </div>
              <div className='line-img'></div>
            </div>
          </div>
          <h4>New tickets</h4>
          <div className='tickets-list'>
            {tickets.map((ticket) => {
              return (
                <div className='ticket'>
                  <div className='company-info'>
                    <img
                      className='logo'
                      alt='Slack Logo'
                      src={SlackLogo}
                    ></img>
                    <span>{ticket.client}</span>
                  </div>
                  <strong>{ticket.assigned}</strong>
                  <span className='issue'>{ticket.issue}</span>
                  <div data-status={ticket.status} className='status'>
                    <div>{translateStatus[ticket.status]}</div>
                    <span className='material-icons'>keyboard_arrow_down</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
