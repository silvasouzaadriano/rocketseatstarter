var arr = [1, 3, 4, 5, 8, 9];

//Map serve para percorrer o vetor e retorna seu conteúdo
var newArr = arr.map(function(item, index) {
  return item + index;
})
console.log(arr, newArr);

//Reduce serve para consomir todo o vetor transformando-o em uma única informação a cada interação
const sum = arr.reduce(function(total, next) {
  return total + next;
})
console.log(sum);

//Filter serve para filtrar os elementos dentro de um array
const filter = arr.filter(function(item) {
  return item % 2 === 0; // Filtrando somente números pares
})
console.log(filter);

//Find serve para verificar uma informação dentro do array ou se queremos encontra-la no array
const find = arr.find(function(item) {
  return item === 4;
})
console.log(find);

