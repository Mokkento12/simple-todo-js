const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = [];

// Функция для обновления списка задач
function updateTaskList() {
  taskList.innerHTML = ""; // Очищаем список

  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // Создаем новый элемент списка
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить"; // Добавляем текст кнопки

    // Обработчик события для удаления задачи
    deleteButton.addEventListener("click", () => {
      removeTask(index); // Удаляем задачу по индексу
    });

    li.appendChild(deleteButton); // Добавляем кнопку к элементу списка
    taskList.appendChild(li); // Добавляем элемент списка на страницу
  });
}

// Функция для добавления задачи
function addTask() {
  const task = taskInput.value.trim(); // Получаем введенное значение

  if (task) {
    tasks.push(task); // Добавляем задачу в массив
    updateTaskList(); // Обновляем список
    taskInput.value = ""; // Очищаем поле ввода
  }
}

// Функция для удаления задачи
function removeTask(index) {
  tasks.splice(index, 1); // Удаляем задачу из массива
  updateTaskList(); // Обновляем список
}

// Обработчик для кнопки добавления задачи
addTaskButton.addEventListener("click", addTask);
