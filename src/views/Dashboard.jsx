import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import SlackLogo from "../images/slack-logo.png";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  const translateStatus = {
    inprogress: "In progress",
    created: "created",
  };

  useEffect(() => {
    axios
      .get("https://teracrm.herokuapp.com/crm-tera/ticket/all")
      .then((response) => {
        const data = response.data;

        setTickets(data);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <main>
        <div className="search-bar">
          <div className="search-input-box">
            <span className="material-icons">search</span>
            <input placeholder="Search everything" />
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="titles">
              <h1>Tickets</h1>
              <h4>Welcome to CRM dashboard</h4>
            </div>
            <NavLink to="/create/ticket" className="button-add-ticket">
              + New ticket
            </NavLink>
          </div>
          <div className="charts-container">
            <div className="chart-box circle-chart">
              <div className="header">
                <h3>Tickets status</h3>
                <div className="dropdown">
                  This month{" "}
                  <span className="material-icons">keyboard_arrow_down</span>
                </div>
              </div>
              <div className="circle-img"></div>
            </div>
            <div className="chart-box line-chart">
              <div className="header">
                <h3>Tickets by priority</h3>
                <div className="dropdown">
                  This month{" "}
                  <span className="material-icons">keyboard_arrow_down</span>
                </div>
              </div>
              <div className="line-img"></div>
            </div>
          </div>
          <h4>New tickets</h4>
          <table className="tickets-list w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                return (
                  <tr key={ticket._id} className="bg-white border border-gray-200">
                    <td className="pr-3">
                      <div className="company-info flex gap-2 p-3 items-center">
                        <img
                          className="logo h-8"
                          alt="Slack Logo"
                          src={`https://source.boringavatars.com/marble/${ticket._id}`}
                        ></img>
                        <span className="truncate text-sm">{ticket.client}</span>
                      </div>
                    </td>
                    <td className="pr-3">
                      <strong className="text-sm font-semibold">{ticket.assigned}</strong>
                    </td>
                    <td className="pr-3">
                      <span className="issue text-sm">{ticket.issue}</span>
                    </td>
                    <td className="pr-3">
                      <div data-status={ticket.status} className="status w-fit ml-auto">
                        <div>{ticket.status}</div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
