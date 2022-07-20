<<<<<<< Updated upstream
document.getElementById("meubotao").onclick = function () {
  window.open ("./dashboard.html") 
};
=======
// document.getElementById("meubotao").onclick = function () {
//   window.open ("file:///D:/EDUARDO/Cursos/TERA/crmTeraProject-main/dashboard.html") 
// };
// document.getElementById("botaoinscreve").onclick = function () {
//   window.open ("file:///D:/EDUARDO/Cursos/TERA/crmTeraProject-main/inscricao.html") 
// };


function login(){

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userLogin = {email, password}
  console.log(userLogin)
  
  const options = {
    method: 'POST',
    body: JSON.stringify(userLogin),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch('http://localhost:3000/crm-tera/login', options)
  .then(res => res.json())
  .then(retorno => console.log(retorno))
  .then(alert('Bem Vindo!'))
}
>>>>>>> Stashed changes
