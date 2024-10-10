// Seleccionar elementos
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskTableBody = document.getElementById('taskTableBody');

// Arreglo para almacenar las tareas
let tasks = [];

// Función para añadir una nueva tarea
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = taskInput.value.trim();
    if (newTask) {
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
});

// Función para renderizar las tareas en la tabla
function renderTasks() {
    taskTableBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');

        // Columna de la tarea
        const taskCell = document.createElement('td');
        taskCell.textContent = task;
        row.appendChild(taskCell);

        // Columna de acciones (Editar y Eliminar)
        const actionsCell = document.createElement('td');
        actionsCell.classList.add('actions');
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit');
        editButton.onclick = () => editTask(index);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteTask(index);
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        row.appendChild(actionsCell);

        taskTableBody.appendChild(row);
    });
}

// Función para editar una tarea
function editTask(index) {
    const newTask = prompt('Editar tarea:', tasks[index]);
    if (newTask && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);  // Eliminar tarea del arreglo
    renderTasks();
}
