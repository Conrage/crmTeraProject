import React, { Component } from 'react';
class Dashboard extends Component {
  render() {
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
              <a href='./new-ticket.html' className='button-add-ticket'>
                + New ticket
              </a>
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
            <div className='tickets-list'></div>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
