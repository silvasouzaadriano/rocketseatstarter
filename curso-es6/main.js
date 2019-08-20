//import soma, sub from './funcoes'; // Forma sem arquivo default
//import { soma as somaFunction, sub } from './funcoes'; // Forma sem arquivo default atribuindo alias
//import somaFunction, {sub} from './funcoes'; // Arquivo default dentro de outro arquivo
import * as funcoes from './funcoes';
import somaDefault from './soma'; // Arquivo default único

//console.log(soma(1, 2));
console.log(somaDefault(1, 2));
//console.log(sub(4, 2));
console.log(funcoes.default(1,2));
console.log(funcoes.sub(4,2));
console.log(funcoes.mult(5,5));
console.log(funcoes.div(10,2));
