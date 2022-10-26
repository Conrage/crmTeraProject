import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TeraLogo from '../images/tera-logo.png';
import UserImage from '../images/user-img.jpg';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='header'>
          <img className='logo' alt='Tera logo' src={TeraLogo}></img>
        </div>
        <div className='main'>
          <div className='user-info'>
            <div className='user-img'>
              <img src={UserImage} alt='User'></img>
            </div>
            <div className='info'>
              <p>John Doe</p>
              <span>johndoe@gmail.com</span>
            </div>
          </div>
          <nav-menu>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected nav-item' : 'nav-item')}
              to='/'
            >
              <div className='icon material-icons'>dashboard</div>
              <span>Overview</span>
            </NavLink>
            <NavLink
              to='tickets'
              className={({ isActive }) => (isActive ? 'selected nav-item' : 'nav-item')}
            >
              <div className='icon material-icons'>description</div>
              <span>Tickets</span>
            </NavLink>
          </nav-menu>
        </div>
      </div>
    );
  }
}

export default Sidebar;
