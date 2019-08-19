"use strict";

// var = Constantes não podem ter seu valor reatribuido, mas podem ser mutados
//const a = 1; 
//a = 3; // Isso daria erro pois o valor está sendo reatribuido
//Mutação
var usuario = {
  nome: 'Adriano'
};
usuario.nome = 'Diego';
console.log(usuario); // let = Variáveis let só podem ser usadas dentro do escopo, exemplo dentro de funções.

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
