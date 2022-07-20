import React, { Component } from 'react';
import CircleChart from '../images/circle_chart_img.svg';
import LineChart from '../images/line_chart_img.svg';

class Tickets extends Component {
  render() {
    return (
      <div className='tickets-container'>
        <div
          className='modal fade'
          id='ModalXl'
          tabindex='-1'
          aria-labelledby='ModalXlLabel'
          style={{ display: 'none' }}
          aria-modal='true'
          role='dialog'
        >
          <div className='modal-dialog modal-xl'>
            <div className='modal-content'>
              <div className='modal-header'>
                <div className='row col-12 align-items-end'>
                  <h3 className='col text-center fs-5'>ID</h3>
                  <h2 className='col text-center'>Client</h2>
                  <h3 className='col text-center fs-5'>Created By</h3>
                </div>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body row'>
                <div className='col-3 ticket-status'>
                  <h5>Last Changes</h5>
                  <p className='changes-item'>
                    <span className='name-changes'>John</span> Created the
                    Ticket on 08 Feb at 14pm
                  </p>
                  <p className='changes-item'>
                    <span className='name-changes'>Filipe</span> Assigned to
                    Eduardo on 10 Feb at 11am
                  </p>
                  <p className='changes-item'>
                    <span className='name-changes'>John</span> Change de
                    Priority on 09 Feb at 16:30pm
                  </p>
                  <p className='changes-item'>
                    <span className='name-changes'>Eduardo</span> Edit the Issue
                    on 10 Feb at 11am
                  </p>
                </div>
                <div className='col-6 ticket-main flex-column'>
                  <textarea
                    id='issue-input-ticket'
                    placeholder='The client has an example problem...'
                    className='input-box issue-ticket'
                  ></textarea>
                  <div className='area-grafico row'>
                    <div className='grafico col-6'>
                      <div className='row header'>
                        <h6 className='col'>Time Trackig</h6>
                      </div>
                      <img
                        className='circle-img'
                        alt='Circle Chart'
                        src={CircleChart}
                      ></img>
                    </div>
                    <div className='grafico col-6'>
                      <div className='row header'>
                        <h6 className='col'>Ticket Changes</h6>
                      </div>
                      <img
                        className='line-img'
                        alt='Line Chart'
                        src={LineChart}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className='col-3 ticket-buttons flex-column justify-content-end'>
                  <div className='dropdown d-flex justify-content-center'>
                    <button
                      className='dropdown-toggle button-modal'
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Status
                    </button>
                    <ul
                      className='dropdown-menu button-modal'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <span className='dropdown-item'>
                          Completed
                        </span>
                      </li>
                      <li>
                        <span className='dropdown-item'>
                          In Progress
                        </span>
                      </li>
                      <li>
                        <span className='dropdown-item'>
                          Waiting
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='dropdown  d-flex justify-content-center'>
                    <button
                      className='dropdown-toggle button-modal'
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Priority
                    </button>
                    <ul
                      className='dropdown-menu button-modal'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <span className='dropdown-item'>
                          Urgent
                        </span>
                      </li>
                      <li>
                        <span className='dropdown-item'>
                          Normal
                        </span>
                      </li>
                      <li>
                        <span className='dropdown-item'>
                          Secondary
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className='dropdown  d-flex justify-content-center'>
                    <button
                      className='dropdown-toggle button-modal'
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Responsable
                    </button>
                    <ul
                      className='dropdown-menu button-modal'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <span className='dropdown-item'>
                          John
                        </span>
                      </li>
                      <li>
                        <span className='dropdown-item'>
                          Eduardo
                        </span>
                      </li>
                      <li>
                        <span className='dropdown-item'>
                          Filipe
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <a href='./new-ticket.html' className='button-add-ticket'>
                + New ticket
              </a>
            </div>
            <div className='table-responsive-xxl'>
              <table className='table table-hover mt-5 table-bg'>
                <thead>
                  <tr className='table-color'>
                    <th role='button' scope='col'>
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody>
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
            {/* <nav aria-label='Page navigation'>
                <ul className='pagination pagination-sm justify-content-end'>
                  <li className='page-item'>
                    <a
                      className='page-link pag-color'
                      href='#'
                      aria-label='Previous'
                    >
                      <span aria-hidden='true'>&laquo;</span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link pag-color' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link pag-color' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link pag-color' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a
                      className='page-link pag-color'
                      href='#'
                      aria-label='Next'
                    >
                      <span aria-hidden='true'>&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav> */}
          </div>
        </main>
      </div>
    );
  }
}

export default Tickets;
