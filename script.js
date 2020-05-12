const addTodo = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `
      <li
        class="list-group-item d-flex justify-content-between align-itms-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
      </li>
   `;

  list.innerHTML += html;
};

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addTodo.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addTodo.reset();
  }
});

//delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
