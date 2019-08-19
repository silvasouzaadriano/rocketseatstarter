"use strict";

//Templates literals é uma forma de incluir variáveis dentro de strings
//funcionando como interpolação
var nome = 'Adriano';
var idade = 43; //forma convencional

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.'); //forma com templates literals

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));
