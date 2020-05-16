let todoList = ['Allyson'];
let todoListEl = document.querySelector('.todoList');
let inputContent = document.querySelector('.todo-text-monday');

document.querySelector('input').addEventListener('keyup', (event)=>{
  if (event.key === 'Enter') {
    todoList.push(event.target.value);
    event.target.value = '';
    renderTodo();
  }
  
});

function renderTodo () {
  todoListEl.innerHTML = '';
  
  todoList.forEach((todo)=> {
    var li = document.createElement('li');
    
    li.innerHTML = `<li>${todo}</li>`;

    todoListEl.append(li);
  });
}