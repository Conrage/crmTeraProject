import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateTicket() {
  const [issue, setIssue] = useState("");
  const [client, setClient] = useState("");
  const [assigned, setAssigned] = useState("");
  const navigate = useNavigate();

  const createTicket = () => {
    const ticket = { issue, client, assigned };
    axios.post("https://teracrm.herokuapp.com/crm-tera/ticket/create", ticket);
    navigate("/", { replace: true });
  };

  return (
    <div className="create-ticket-container">
      <main className="ticket-page">
        <div className="search-bar">
          <div className="search-input-box">
            <input style={{ backgroundColor: "#fff" }} disabled />
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="titles">
              <h1>New ticket</h1>
              <h4>Fill the informations below and create a new ticket</h4>
            </div>
          </div>
          <div className="input-box">
            <label>Issue</label>
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              rows="5"
              cols="10"
              placeholder="The client has an example problem..."
            ></textarea>
          </div>
          <div className="input-box">
            <label>Client</label>
            <input
              value={client}
              onChange={(e) => setClient(e.target.value)}
              id="client-input"
              type="text"
            ></input>
          </div>
          <div className="input-box">
            <label>Assigned To</label>
            <input
              value={assigned}
              onChange={(e) => setAssigned(e.target.value)}
              id="assigned-input"
              type="text"
            ></input>
          </div>
          <div className="input-box">
            <label>Progress</label>
            <div id="status-input" data-status="created" className="status">
              <div>Created</div>
              <span className="material-icons">keyboard_arrow_down</span>
            </div>
          </div>
          <div className="footer">
            <NavLink to="/" className="button-cancel">
              Cancel
            </NavLink>
            <button onClick={createTicket} className="button-add-ticket">
              Create ticket
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateTicket;
