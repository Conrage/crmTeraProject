import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function OneTicket(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
            <h4>{`ID ${props.index + 1}`}</h4>
            <h2>{props.ticket.client}</h2>
            <h4>{`Created By: ${props.ticket.assigned}`}</h4>
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
              <p className="issua-area">{props.ticket.issue}</p>
              <div className="chart-box circle-chart"></div>
            </div>
            <div className="modal-body-right">
              <button className="button-ticket">Status</button>
              <button className="button-ticket">Priority</button>
              <button className="button-ticket">Responsable</button>
              <button className="button-ticket">Update Ticket</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
