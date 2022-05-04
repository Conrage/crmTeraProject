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
  const status = document.getElementById('status-input').dataset.status;

  let ticket = {
    issue: issue,
    client: client,
    assigned: assigned,
    status: status
  };
  console.log(state.tickets)
  state.tickets.push(ticket);
  window.sessionStorage.setItem('tickets', JSON.stringify(state.tickets));
  location.href = './dashboard.html';
  renderTickets();
}

function renderTickets() {
  const list = document.querySelector('.tickets-list');

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
