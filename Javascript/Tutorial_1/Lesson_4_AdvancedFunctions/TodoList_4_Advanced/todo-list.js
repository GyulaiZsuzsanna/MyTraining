const todoList = [{
  name: 'make dinner',
dueDate: '2022-12-22'}, 
{  
  name:'wash dishes',
dueDate: '2022-10-12'}
];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){

    const {name, dueDate}  = todoObject; //const name = todoObject.name;

    const html = `
    <div>${name}</div>
    <div>${dueDate} </div>
    <button onclick="
    todoList.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;


    //AddEventListener for each delete buttons:
    /* document.querySelectorAll('.js-delete-todo-button').forEach( (deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    }); */

    // This index = closure, because it is deleted after function. "live inside".

  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,  // todolist has 2 objects. Each has name , dueDate
    //dueDate: dueDate,
    name,
    dueDate // Shorthand:   variable and property name are the same!
  });

  inputElement.value = '';

  renderTodoList();
}

