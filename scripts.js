let todoList = [];
let todoListEl = document.querySelector('.todoList');

document.querySelector('input').addEventListener('keyup', (event)=>{
  if (event.key === 'Enter') {
    todoList.push(event.target.value);
    event.target.value = '';
    renderTodo();
  }
  
});

document.querySelector('.add_button').addEventListener('click', event => {
  let inputEl = document.querySelector('input');
  todoList.push(inputEl.value);
  inputEl.value = '';
  renderTodo();
});

function renderTodo () {
  todoListEl.innerHTML = '';
  
  todoList.forEach((todo)=> {
    var li = document.createElement('li');
    
    li.innerHTML = `<li>${todo}</li>`;

    todoListEl.append(li);
  });
}