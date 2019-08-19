var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Initializing the array with list_todos stored or with empty values case does not exist the file
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/*var todos = [
  'Fazer café',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat'
]*/

function renderTodos() {
  listElement.innerHTML = ''; // Clear the elements before recreate it

  for (todo of todos) {
    // Variables for element li creation
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo); // Create the text for element li base on array items

    // Create the link element
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var LinkText = document.createTextNode(' Excluir');
    linkElement.appendChild(LinkText); // Add an attribute to element
    var pos = todos.indexOf(todo) // Searching for the position on array about todo item
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); // Set the item position to be deleted

       
    // Create the element li including the ahref for deletion
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1) // method splice remove items fom array
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  // The storage does not store arrays, for that reason is necessary convert
  // the array in a structure which allow this storing(on this case the JSON
  // by stringfy). The stringfy will convert the array in a string
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

// when button clicked a todo is added on array and then rendered the todos
buttonElement.onclick = addTodo;

// Initialize the todos
renderTodos()
