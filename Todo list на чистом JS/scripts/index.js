
// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ ->
const addBtn = document.querySelector("#add");
const newTodo = document.querySelector("#newTodo");
const container = document.querySelector("#container");
// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ <-

// ОБЪЯВЛЕНИЕ ФУНКЦИЙ ->
let createNewTodo = (text) => {
    // создаем новое дело
    let newTodo = document.createElement("div");
    // добавлям ему стилизованный класс для правильного отображения
    newTodo.classList.add("todo");
    // вставляем в него сроку с текстом из строки ввода и кнопки подтверждения и удаления
    newTodo.innerHTML = 
    `<p class="todo--text">${text}</p>
     <button class="acceptBtn"">Accept</button>
     <button class="deleteBtn">Delete</button>`;
    // ищем в элементе нового дела кнопки
    let acceptBtn = newTodo.querySelector(".acceptBtn");
    let deleteBtn = newTodo.querySelector(".deleteBtn");
    // вешаем на них обработчики событий
    acceptBtn.addEventListener("click", acceptTodo);
    deleteBtn.addEventListener("click", deleteTodo);

    // возвращаем элемент
    return newTodo;
}

let addNewTodo = () => {
    // получаем текст из строки ввода
    let newTodoText = newTodo.value;

    // если строка пустая, то ничего не делаем
    if (!newTodoText) return;

    // добавляем в коней контейнера дел новое дела
    // в качестве аргумента передаем новый элемент с текстом из строки ввода
    container.appendChild(createNewTodo(newTodoText));
    // чистим строку
    newTodo.value = "";
}

let acceptTodo = (event) => {
    // получаем нажатую кнопку
    let button = event.target;
    // получаем родительский элемент кнопки - дело
    let todo = button.parentElement;
    // находим в родительском элементе текст
    let todoText = todo.querySelector(".todo--text");
    // добавляем/убираем класс нажатой кнопки
    button.classList.toggle("acceptBtn--active");
    // добавляем/убираем класс отображения текста
    todoText.classList.toggle("line-through");
}

let deleteTodo = (event) => {
    // получаем родительский элемен нажатой кнопки удаления - дело
    let todo = event.target.parentElement;
    // удаляем его из документа
    todo.remove();
}
// ОБЪЯВЛЕНИЕ ФУНКЦИЙ <-

//////////////////////

addBtn.addEventListener("click", addNewTodo);