"use strict";

// Afim de evitar erros operacionais com a execuçào de funções, pode-se definir
// valores padrão para cada argumento de uma função
function soma1() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma1(1));
console.log(soma1());

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma2(1));
console.log(soma2());
