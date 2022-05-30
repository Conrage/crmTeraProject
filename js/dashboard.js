let themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', changeTheme);

let theme = window.sessionStorage.getItem('theme') ?
    window.sessionStorage.getItem('theme') :
    'light';

function changeTheme(e) {
    if (
        document.body.getAttribute('theme') === 'light' ||
        !document.body.getAttribute('theme')
    ) {
        theme = 'dark';
    } else {
        theme = 'light';
    }
    document.body.setAttribute('theme', theme);
}