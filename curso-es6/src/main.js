const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000)
});

// Sintaxe sem async/await - antes ES8
/*minhaPromise()
  .then(response => {
    console.log('sem async/await', response);
  })
  .catch(err => {
    console.log(érr);
  });*/

// Sintaxe com async/await - a partir do ES8
/*async function executaPromise() {
  const response = await minhaPromise();
  console.log('Com async/await', response);
}
executaPromise();*/

// Sintaxe com async/await - a partir do ES8 - Execução em cascata
// Com await a próxima linha só executa depois que a anterior terminar
// Quando uma async function é criada ela automaticamente vira uma promise
// conseguindo também esperar pelo resultado da execução, utilizando o .then ou
// também utilizando o await. Porém o await somente pode se utilizado na frente 
// de uma promise dentro de uma função com async.
// Async/Await também ser utilizados com Arrow Functions

/*async function executaPromise() {
  console.log('Com async/await', await minhaPromise());
  console.log('Com async/await', await minhaPromise());
  console.log('Com async/await', await minhaPromise());
}
executaPromise();*/

//Exemplo com Arrow Function
const executaPromise = async () => {
  console.log('Com async/await', await minhaPromise());
  console.log('Com async/await', await minhaPromise());
  console.log('Com async/await', await minhaPromise());
};
executaPromise();

