"use strict";

//Object short syntax
//Utilizado para repassar variáveis em objetos
//Quando o nome das variáveis forem iguais ao nomes dos
//atributos do objeto é necessário apenas passar o nome da variável
var nome = 'Adriano';
var idade = 43; //Forma convencional

var usuario1 = {
  nome: nome,
  idade: idade,
  empresa: 'Freelancer'
};
console.log(usuario1); //Forma com object short syntax

var usuario2 = {
  nome: nome,
  idade: idade,
  empresa: 'Freelancer'
};
console.log(usuario2);
