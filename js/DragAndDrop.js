function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    tasks.forEach(task => {
        if (task.id === id) {
            task.status = dropzone.id;
        }
    });

    // Actualiza el array de tareas en localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    event
    .dataTransfer
    .clearData();
}