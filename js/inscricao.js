
function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
}

  
 
function cadastrarNovoUsuario(){

  const name =  document.getElementById('name').value
  const birth =  document.getElementById('birth').value
  const cpf = document.getElementById('cpf').value
  const tel = document.getElementById('tel').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const newUser = {name, birth, cpf, tel, email, password}
  const options = {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch('http://localhost:3000/crm-tera/registrer/', options)
  .then(res => res.json())
  .then(retorno => console.log(retorno))
}