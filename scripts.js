let todoList = [];

let todoWeekData = [
  {
    dayName: "monday",
    todos: []
  },
  {
    dayName: "tuesday",
    todos: []
  },
  {
    dayName: "wednesday",
    todos: []
  },
  {
    dayName: "thursday",
    todos: []
  },
  {
    dayName: "friday",
    todos: []
  },
  {
    dayName: "saturday",
    todos: []
  },
  {
    dayName: "sunday",
    todos: []
  }
]

let inputSelected = document.querySelectorAll('input');
for (var i = 0; i < inputSelected.length; i++) {
  inputSelected[i].addEventListener('keyup', enterKey);
} 

function enterKey (event) {
  if (event.key === 'Enter') {
    
    for (var todoDay of todoWeekData) {
      if (todoDay.dayName == event.target.parentNode.id) {
        todoDay.todos.push(event.target.value);
      }
    }
    event.target.value = '';
    renderTodo();
  }
}

let buttonSelected = document.querySelectorAll('.add_button');
for (var i = 0; i < buttonSelected.length; i++) {
  buttonSelected[i].addEventListener('click', mouseClick);
} 

function mouseClick (event) {
  
  let nameId = event.target.offsetParent.offsetParent.id;
  let inputEl = document.querySelector(`#${nameId}>input`);
    for (var todoDay of todoWeekData) {
      
      if (todoDay.dayName == nameId) {
        todoDay.todos.push(inputEl.value);
      }
    }
  
  inputEl.value = '';
  renderTodo();
}

function renderTodo () {
  
  for (var todoDay of todoWeekData) {
    
    let nameDiv = document.querySelector(`#${todoDay.dayName}>ul`);
    nameDiv.innerHTML = '';

    for (var i = 0; i < todoDay.todos.length; i++) {
      
      if (todoDay.dayName == nameDiv.parentElement.id) {
        var li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox" id="task-${i+1}">
          <label for="task-${i+1}">${todoDay.todos[i]}</label>
          <button class="button-x" type="button">x</button>
        `;

        nameDiv.append(li);
      }

    }
    
  }
}