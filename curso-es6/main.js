class Matematica {
  constructor() {
    this.todos = [];
  }

  static soma(a, b) { //static são métodos que não alteram o conteúdo mas realizam ações com eles
                      // retornando resultados
    return a + b;
  }
}

console.log(Matematica.soma(1,2));