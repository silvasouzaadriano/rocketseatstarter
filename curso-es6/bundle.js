"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//Operadores rest/spread são conhecidos por utilizarm os três pontos (...)
//REST serve para pegar o resto das propriedades
var usuario = {
  nome: 'Adriano',
  idade: 43,
  empresa: 'Freelancer' //Desestruturando nome e os outros campos colocano como resto na
  //variável resto

};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto); //Aplicando em arrays com desestruturação, Nesse caso a variável c 
//conterá o restante do array

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); //Aplicando em parâmetros de funções
//forma convencional

function soma(a, b) {
  return a + b;
}

console.log(soma(1, 4)); //forma com resto total

function soma2() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma2(1, 3, 4)); //forma com resto

function soma3(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  console.log(params);
  var retorno = a + b;
  retorno = retorno + params.reduce(function (total, next) {
    return total + next;
  });
  return retorno;
}

console.log(soma3(1, 3, 4)); //SPREAD - Propaga as informações de um array para outra estrutura de dados

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); //SPREAD - Criando um novo array aproveitando o primeiro, porém mudando apenas
//uma propriedade

var usuario1 = {
  nome: 'Diego',
  idade: 43,
  empresa: 'Rocketseat'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Adriano',
  empresa: 'Freelancer'
});

console.log(usuario1);
console.log(usuario2);
