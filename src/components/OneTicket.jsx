import React from "react";
import Modal from "react-modal";
import Dropdown from "react-dropdown";
import axios from "axios";
import { useState } from "react";

Modal.setAppElement("#root");

export default function OneTicket(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const optionsStatus = ["In Progress", "Waiting", "Finished"];
  const optionsPriority = ["Urgent", "Normal", "Secondary"];
  const optionsResponsable = ["Filipe Campos", "John Doe"];

  const [status, setStatus] = useState(`${props.ticket.status}`);
  const [issue, setIssue] = useState(`${props.ticket.issue}`);
  const [priority, setPriority] = useState(`${props.ticket.priority}`);
  const [assigned, setAssigned] = useState(`${props.ticket.assigned}`);

  const updateTicket = () => {
    const currentTicker = { issue, status, priority, assigned };
    axios.put(
      `https://teracrm.herokuapp.com/crm-tera/ticket/update/${props.ticket._id}`,
      currentTicker
    );
    console.log(currentTicker);
  };

  const deleteTicket = () => {
    axios.delete(
      `https://teracrm.herokuapp.com/crm-tera/ticket/delete/${props.ticket._id}`
    );
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <tr
        onClick={openModal}
        className="table-color"
        data-bs-toggle="modal"
        data-bs-target="#ModalXl"
      >
        <th scope="row">{props.index + 1}</th>
        <td>{props.ticket.client}</td>
        <td>{props.ticket.assigned}</td>
        <td className="urgent">{props.ticket.priority}</td>
        <td className="inprogress">{props.ticket.status}</td>
      </tr>

      <div className="modal-container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="modal-header">
            <h3>
              ID: <span>{props.index + 1}</span>
            </h3>
            <h2>{props.ticket.client}</h2>
            <h3>
              Created By:<br></br>
              <span>{props.ticket.assigned}</span>
            </h3>
          </div>
          <div className="modal-body">
            <div className="modal-body-left">
              <h4>Last Changes</h4>
              <p className="changes-item">
                Created the Ticket on 08 Feb at 14pm
              </p>
              <p className="changes-item">
                Assigned to Eduardo on 10 Feb at 11am
              </p>
              <p className="changes-item">
                Change de Priority on 09 Feb at 16:30pm
              </p>
              <p className="changes-item">Edit the Issue on 10 Feb at 11am</p>
            </div>
            <div className="modal-body-center">
              <p className="issua-area" onChange={(e) => setIssue(e.value)}>
                {props.ticket.issue}
              </p>
              <div className="chart-box circle-chart"></div>
            </div>
            <div className="modal-body-right">
              <Dropdown
                className="button-ticket"
                options={optionsStatus}
                value={props.ticket.status}
                placeholder="Select an option"
                onChange={(e) => setStatus(e.value)}
              />
              <Dropdown
                className="button-ticket"
                options={optionsPriority}
                value={props.ticket.priority}
                placeholder="Select an option"
                onChange={(e) => setPriority(e.value)}
              />
              <Dropdown
                className="button-ticket"
                options={optionsResponsable}
                value={props.ticket.assigned}
                placeholder="Select an option"
                onChange={(e) => setAssigned(e.value)}
              />
              <button className="button-ticket-update" onClick={updateTicket}>
                Update Ticket
              </button>
              <button className="button-ticket-delete" onClick={deleteTicket}>
                DELETE Ticket
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
