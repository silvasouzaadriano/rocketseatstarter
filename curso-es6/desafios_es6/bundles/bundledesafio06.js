"use strict";

/*

Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

*/
var usuario = "Diego";
var idade = 23;
console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
