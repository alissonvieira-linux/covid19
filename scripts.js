const form = document.querySelector('.form-box form');
form.addEventListener('submit', event => {
  event.preventDefault();

  // Descobrir qual Estado o usuário deseja ver
  let uf = document.querySelector('input[type=text]').value;
  // Fazer busca na API e inserir dados na DOM
  fetch(
    `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`, 
    { method: 'GET' }
  )
    .then(response => {
      response.json().then(data => {
        // Inserir dados
        document.querySelector('#uf').innerHTML = data.state;
        document.querySelector('#cases').innerHTML = data.cases;
        document.querySelector('#suspects').innerHTML = data.suspects;
        document.querySelector('#deaths').innerHTML = data.deaths;
      })
    })
    .catch(err => console.log(err));
 
  // Exibir o card com as informações
  document.querySelector('.card').style.display = 'block';
});