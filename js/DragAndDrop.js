function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id); /* Controlador de eventos que se activa cuando el usuario comienza a arrastrar un elemento. almacena los datos del elemento que está siendo arrastrado. 
    En este caso, se guarda el id del elemento en el formato de texto plano (text/plain).
    Esto permite identificar qué elemento se está arrastrando.*/
}

function onDragOver(event) {
  event.preventDefault(); /* método es crucial para permitir que el elemento sea soltado en la zona de destino*/
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text'); /*se recupera el id del elemento arrastrado, que se había almacenado previamente en onDragStart.*/

    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    if (dropzone.classList.contains('taskColumn')) {

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
}