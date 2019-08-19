// Ajax é uma requisição assincrona realizada com backend
// No Javascript usando o Ajax é possivel atualizar a página sem reload
/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/silvasouzaadriano');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // For response back the value is 4
    console.log(JSON.parse(xhr.responseText));
  }
}*/

//Promises são códigos que não vai influenciar na linha do tempo do Javascript
// Função resolve é para quando o resultado foi de sucesso
// Função reject é para quando o resultado foi de fracasso

var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/silvasouzaadriano');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // For response back the value is 4
        if (xhr.status === 200) { // Request successfuly
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  })
}

/*var resultado = minhaPromise();
console.log(resultado);*/

minhaPromise()
  .then(function(response) {// Vai ser executado quando o resolve for chamado
    console.log(response)
  }) 
  .catch(function(error) { // Vai ser executado quando o reject for chamado
    console.warn(error)
  }); 