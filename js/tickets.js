const state = {
  tickets: [],
};
const translateStatus = {
    'inprogress': 'In progress',
    'created': 'created'
}

state.tickets = JSON.parse(window.sessionStorage.getItem('tickets')) ? JSON.parse(window.sessionStorage.getItem('tickets')) : [];
renderTickets();

function createTicket() {
  const issue = document.getElementById('issue-input').value;
  const client = document.getElementById('client-input').value;
  const assigned = document.getElementById('assigned-input').value;
  const status = document.getElementById('status-input').value;

  let newTicket = {issue, client, assigned, status};
  // console.log(state.tickets)
  // state.tickets.push(ticket);
  // window.sessionStorage.setItem('tickets', JSON.stringify(state.tickets));
  // location.href = './dashboard.html';
  // renderTickets();

  const options = {
    method: 'POST',
    body: JSON.stringify(newTicket),
    headers: {
      'Content-Type': 'application/json'
    }
  }
    fetch('http://localhost:3000/crm-tera/ticket/new-ticket', options)
      .then(res => res.json())
      .then(retorno => console.log(retorno))
    
}

function renderTickets() {
  const list = document.querySelector('.tickets-list');
  if(!list) return;
  state.tickets.forEach((ticket) => {
    const div = document.createElement('div');
    div.className = 'ticket';
    div.innerHTML = `<div class="company-info">
        <img class="logo" src="img/slack-logo.png">
        <span>${ticket.client}</span>
      </div>
      <strong>${ticket.assigned}</strong>
      <span class="issue">${ticket.issue}</span>
      <div data-status="${ticket.status}" class="status">
        <div>${translateStatus[ticket.status]}</div><span class="material-icons">keyboard_arrow_down</span>
      </div>`;
    list.appendChild(div);
  });
}

function getTickets(){

  const options = {

  }
  fetch('http://localhost:3000/crm-tera/ticket/find')
  .then(response => response.json())
  .then(json => {
      console.log(json.data)
  })
}


function updateTicket(){

  let issue = '12345' //document.getElementById('issue-input-ticket').value;
  let status = '12345' //document.getElementById('');
  let priority = '12345' //document.getElementById('');
  let assigned = '12345' //document.getElementById('');

  let ticketInfo = {issue, status, priority, assigned}

  const ticketID = '62b673822e2a6ba9c26de00d' //document.getElementById('ticketID').value;

  const options = {
    method: 'PUT',
    body: JSON.stringify(ticketInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`http://localhost:3000/crm-tera/ticket/update/${ticketID}`, options)
  .then(res => res.json())
  .then(retorno => console.log(retorno))

}
