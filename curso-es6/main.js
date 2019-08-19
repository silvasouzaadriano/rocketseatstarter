//Templates literals é uma forma de incluir variáveis dentro de strings

const nome = 'Adriano';
const idade = 43;

//forma convencional
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');

//forma com templates literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);