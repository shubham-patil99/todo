const submitForm = document.querySelector('.add');  
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 

let listLenght = list.lenght;

const generateTempalate = (todo) => {
  
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="fas fa-edit"></i>
                  <i class="fas fa-trash"></i>
                </li>`                                  
  todoList.innerHTML += html;
};

function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
}

submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.remove();
  }
}


todoList.addEventListener('click', deleteTodos);

function changeTodos(e){
  if(e.target.classList.contains('fa-edit')){
     e.target.parentElement.addTodos(e);
  }
}+

todoList.addEventListener('click', changeTodos);
