// var = Constantes não podem ter seu valor reatribuido, mas podem ser mutados
//const a = 1; 
//a = 3; // Isso daria erro pois o valor está sendo reatribuido

//Mutação
const usuario = { nome: 'Adriano'};
usuario.nome = 'Diego';
console.log(usuario);


// let = Variáveis let só podem ser usadas dentro do escopo, exemplo dentro de funções.
function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4
    console.log(x, y);
  }

}

teste(10);


