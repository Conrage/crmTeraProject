function removeRow() {
    if (window.matchMedia('(max-width: 576px)').matches) {
        document.querySelector('.modal-body').classList.remove('row');
        document.querySelector('.ticket-status').classList.remove('col-3');
        document.querySelector('.ticket-status').classList.add('d-flex');
        document.querySelector('.ticket-status').classList.add('flex-column');
        document.querySelector('.ticket-status').classList.add('align-items-center');
        document.querySelector('.ticket-main').classList.remove('col-6');
        document.querySelector('.ticket-buttons').classList.remove('col-3');
    } 
}

window.onload = removeRow;