//Operadores rest/spread são conhecidos por utilizarm os três pontos (...)

//REST serve para pegar o resto das propriedades

const usuario = {
  nome: 'Adriano',
  idade: 43,
  empresa: 'Freelancer'
}

//Desestruturando nome e os outros campos colocano como resto na
//variável resto
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

//Aplicando em arrays com desestruturação, Nesse caso a variável c 
//conterá o restante do array
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

//Aplicando em parâmetros de funções

//forma convencional
function soma(a, b) {
  return a + b;
}
console.log(soma(1,4));

//forma com resto total
function soma2(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma2(1, 3, 4));

//forma com resto
function soma3(a, b, ...params) {
  console.log(params);
  var retorno = a + b;
  retorno = retorno + params.reduce((total, next) => total + next);
  return retorno;
  
}
console.log(soma3(1, 3, 4));


//SPREAD - Propaga as informações de um array para outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2 ];
console.log(arr1);
console.log(arr2);
console.log(arr3);


//SPREAD - Criando um novo array aproveitando o primeiro, porém mudando apenas
//uma propriedade
const usuario1 = {
  nome: 'Diego',
  idade: 43,
  empresa: 'Rocketseat'
};

const usuario2 = {...usuario1, nome: 'Adriano', empresa: 'Freelancer'};
console.log(usuario1);
console.log(usuario2);





