import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class CreateTicket extends Component {
  render() {
    return (
      <div className='create-ticket-container'>
        <main className='ticket-page'>
          <div className='search-bar'>
            <span className='material-icons menu-show'>menu</span>
            <div className='search-input-box'>
              <input style={{backgroundColor: '#fff'}} disabled />
            </div>
          </div>
          <div className='content'>
            <div className='header'>
              <div className='titles'>
                <h1>New ticket</h1>
                <h4>Fill the informations below and create a new ticket</h4>
              </div>
            </div>
            <div className='input-box'>
              <label>Issue</label>
              <textarea
                id='issue-input'
                rows='5'
                cols='10'
                placeholder='The client has an example problem...'
              ></textarea>
            </div>
            <div className='input-box'>
              <label>Client</label>
              <input id='client-input' type='text'></input>
            </div>
            <div className='input-box'>
              <label>Assigned To</label>
              <input id='assigned-input' type='text'></input>
            </div>
            <div className='input-box'>
              <label>Progress</label>
              <div id='status-input' data-status='created' className='status'>
                <div>Created</div>
                <span className='material-icons'>keyboard_arrow_down</span>
              </div>
            </div>
            <div className='footer'>
              <NavLink to='/' className='button-cancel'>
                Cancel
              </NavLink>
              <button className='button-add-ticket'>
                Create ticket
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default CreateTicket;
