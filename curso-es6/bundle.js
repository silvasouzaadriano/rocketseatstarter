"use strict";

var usuario = {
  nome: 'Adriano',
  idade: 43,
  endereco: {
    cidade: 'Florianópolis',
    estado: 'SC'
  }
};
console.log(usuario); // Forma sem desestruturação

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;*/
// Forma com desentruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // Funções sem destruturação

function mostraNome(usuario) {
  console.log(usuario.nome);
}

mostraNome(usuario); // Funções com destruturação

function mostraNome2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome2(usuario);
