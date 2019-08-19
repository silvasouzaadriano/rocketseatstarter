// Afim de evitar erros operacionais com a execuçào de funções, pode-se definir
// valores padrão para cada argumento de uma função

function soma1(a = 3,b = 6) {
  return a + b;
}
console.log(soma1(1));
console.log(soma1());

const soma2 = (a= 3, b = 6) =>  a + b;
console.log(soma2(1));
console.log(soma2())