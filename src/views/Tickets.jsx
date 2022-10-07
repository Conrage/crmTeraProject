import React from 'react';
// import CircleChart from '../images/circle_chart_img.svg';
// import LineChart from '../images/line_chart_img.svg';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal'
// import DetailsTicket from './DetailsTicket';


Modal.setAppElement('#root');

function Tickets() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    
    <div className='tickets-container'>
      <div className='modal-container'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
        >

        <div className='modal-header'>
          <h4>ID</h4>
          <h2>Client</h2>
          <h4>Created By:</h4>
        </div>
        <div className='modal-body'>
          <div className='modal-body-left'>
            <h4>Last Changes</h4>
            <p className='changes-item'>Created the Ticket on 08 Feb at 14pm</p>
            <p className='changes-item'>Assigned to Eduardo on 10 Feb at 11am</p>
            <p className='changes-item'>Change de Priority on 09 Feb at 16:30pm</p>
            <p className='changes-item'>Edit the Issue on 10 Feb at 11am</p>
          </div>
          <div className='modal-body-center'>
            <textarea name="" id="" cols="30" rows="10" className='issue-area'></textarea>
            <div className="char">
              <img src="../images/circle_chart_img.svg" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className='modal-body-right'>
            <button className='button-ticket'>Status</button>
            <button className='button-ticket'>Priority</button>
            <button className='button-ticket'>Responsable</button>
            <button className='button-ticket'>Update Ticket</button>
          </div>
        </div>
      </Modal>
      </div>

      
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
          <div className='table-responsive-xxl' >
            <table className='table table-hover mt-5 table-bg'>
              <thead>
                <tr className='table-color'>
                  <th role='button' scope='col'>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody onClick={openModal}>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>1</th>
                  <td>Tera</td>
                  <td>John</td>
                  <td className='urgent'>Urgent</td>
                  <td className='inprogress'>In Progress</td>
                </tr>

                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>2</th>
                  <td>Tera</td>
                  <td>Eduardo</td>
                  <td className='normal'>Normal</td>
                  <td className='completed'>Completed</td>
                </tr>

                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>3</th>
                  <td>Tera</td>
                  <td>Filipe</td>
                  <td className='secondary'>Secondary</td>
                  <td className='inprogress'>In Progress</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>4</th>
                  <td>Tera</td>
                  <td>John</td>
                  <td className='urgent'>Urgent</td>
                  <td className='inprogress'>In Progress</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>5</th>
                  <td>Tera</td>
                  <td>Eduardo</td>
                  <td className='normal'>Normal</td>
                  <td className='completed'>Completed</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>6</th>
                  <td>Tera</td>
                  <td>Filipe</td>
                  <td className='secondary'>Secondary</td>
                  <td className='inprogress'>In Progress</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>7</th>
                  <td>Tera</td>
                  <td>John</td>
                  <td className='urgent'>Urgent</td>
                  <td className='inprogress'>In Progress</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>8</th>
                  <td>Tera</td>
                  <td>Eduardo</td>
                  <td className='normal'>Normal</td>
                  <td className='completed'>Completed</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>9</th>
                  <td>Tera</td>
                  <td>Filipe</td>
                  <td className='secondary'>Secondary</td>
                  <td className='inprogress'>In Progress</td>
                </tr>
                <tr
                  className='table-color'
                  data-bs-toggle='modal'
                  data-bs-target='#ModalXl'
                >
                  <th scope='row'>10</th>
                  <td>Tera</td>
                  <td>John</td>
                  <td className='urgent'>Urgent</td>
                  <td className='inprogress'>In Progress</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tickets;
