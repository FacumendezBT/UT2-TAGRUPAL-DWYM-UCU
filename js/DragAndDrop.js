function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');

  const draggableElement = document.getElementById(id);

  const dropzone = event.target;

  if (dropzone.classList.contains('taskColumn')) {
    dropzone.appendChild(draggableElement);

    let newStatus;

    switch (dropzone.id) {
      case 'backlog':
        newStatus = 'Backlog';
        break;
      case 'toDo':
        newStatus = 'To Do';
        break;
      case 'inProgress':
        newStatus = 'In Progress';
        break;
      case 'blocked':
        newStatus = 'Blocked';
        break;
      case 'done':
        newStatus = 'Done';
        break;
      default:
        break;
    }

    tasks.forEach(task => {
      if (task.id === id) {
        task.status = newStatus;
        taskModal.loadTask(task, false);
        document.getElementById(task.id).innerHTML = new Task(task.title, task.description, task.assignedTo, task.priority, task.status, task.startDate, task.endDate, task.id).toHTML();
        taskModal.saveTask();
      }
    });


    event
      .dataTransfer
      .clearData();
  }
}