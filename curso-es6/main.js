class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }

}

class TodoList extends List {
  /*constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }*/

  constructor() {
    super();

    this.usuario = 'Adriano';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }


}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  //MinhaLista.addTodo();
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();