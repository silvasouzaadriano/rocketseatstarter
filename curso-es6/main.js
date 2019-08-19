var arr = [1, 3, 4, 5, 8, 9];

// Arrow function substituem as funçõe anônimas, bastando excluir a palavra function
// e depois do parêntese acrescentar =>
// Quando a função recebe apenas um parâmetro, os parênteses em volta dele podem ser
// removidos
// Quando a função trabalha somente com uma única linha, podê-se colocar essa linha
// logo após => sem a palavra return e sem o uso das chaves
// As Arrow Functions são muito utilizadas no Javascript, quando se tem callback, ou seja, passagem
// de função para dentro de outra função diminuindo a verbosidade

// O que antes era:

/*
var newArr = arr.map(function(item) {
  return item + index;
})
*/

//ficou
var newArr = arr.map(item => item * 2);
console.log(arr, newArr);

// Embora não seja recomendado, em se tratando de funções anônimas, 
// as Arrow Funcion são muito utilizadas nas atribuições de variáveis
// Exemplo:

// Retorno com corpo and return
const teste = () => {
  return 'testando';
}
console.log(teste());

// Retornando um array sem o return
const teste2 = () => [1, 2, 3];
console.log(teste2());

// Retornando um texto diretamente sem o return
const teste3 = () => 'Adriano';
console.log(teste3());

// Retornando um número diretamente sem o return
const teste4 = () => 10;
console.log(teste4());

// Retornando um objeto sem o return. Nesse caso precia de um parênteses por volta do objeto
const teste5 = () => ({nome: 'Adriano'});
console.log(teste5());




