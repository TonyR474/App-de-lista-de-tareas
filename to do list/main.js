const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Funcion de crear tareas
function createTaskItem(taskText) {
  const li = document.createElement('li');
  li.innerText = taskText;

  const eliminar = document.createElement('button');
  eliminar.innerText = 'Borrar';
  eliminar.classList.add('eliminar');

  eliminar.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(eliminar);
  return li;
}

// Event listener agregar tarea
addBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

// Event listener for pressing Enter key
taskInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    addBtn.click();
  }
});