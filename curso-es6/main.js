//Object short syntax
//Utilizado para repassar variáveis em objetos
//Quando o nome das variáveis forem iguais ao nomes dos
//atributos do objeto é necessário apenas passar o nome da variável

const nome = 'Adriano';
const idade = 43;

//Forma convencional
const usuario1 = {
  nome: nome,
  idade: idade,
  empresa: 'Freelancer'
};
console.log(usuario1);

//Forma com object short syntax
const usuario2 = {
  nome,
  idade,
  empresa: 'Freelancer'
};
console.log(usuario2);