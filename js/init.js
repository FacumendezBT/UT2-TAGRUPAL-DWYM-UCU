let editTaskModal;
let tasks = [];

document.addEventListener('DOMContentLoaded', () => {

    initilizeTasks();

    const personas = ["Persona 1", "Persona 2", "Persona 3", "Persona 4", "Persona 5"];
    const prioridades = ["Alta", "Media", "Baja"];
    const estados = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];

    // Crear una instancia de TaskModal
    const taskModal = new CreateTask(personas, prioridades, estados);

    // Crear una instancia de EditTask
    editTaskModal = new EditTask(personas, prioridades, estados);

    const modalHTML = taskModal.toHTML();
    const editModalHTML = editTaskModal.toHTML();


    // Insertar el HTML del modal en el documento
    document.getElementById('modal-container').innerHTML = modalHTML;
    document.getElementById('modal-container-edit').innerHTML = editModalHTML;

    document.getElementById("newTask").addEventListener('click', () => {
        document.querySelector('.modal').classList.add('is-active');
    });
    document.getElementById("newTaskMini").addEventListener('click', () => {
        document.querySelector('.modal').classList.add('is-active');
    });

    document.getElementById("saveButton").addEventListener('click', () => {
        taskModal.saveTask();
        document.querySelector('.modal').classList.remove('is-active');
    });
    document.getElementById("cancelButton").addEventListener('click', () => {
        taskModal.cancelTask();
        document.querySelector('.modal').classList.remove('is-active');
    });
    document.querySelector('#taskTitle').addEventListener('input', () => taskModal.validateTask());
    document.querySelector('#taskDesc').addEventListener('input', () => taskModal.validateTask());
});


function initilizeTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    let backLog = document.getElementById('backlog');
    let toDo = document.getElementById('toDo');
    let inProgress = document.getElementById('inProgress');
    let blocked = document.getElementById('blocked');
    let done = document.getElementById('done');

    tasks.forEach(task => {
        const taskObj = new Task(task.title, task.description, task.assignedTo, task.priority, task.status, task.createdAt, task.dueDate, task.id);
        switch (taskObj.status) {
            case 'Backlog':
                backLog.innerHTML += taskObj.toHTML();
                break;
            case 'To Do':
                toDo.innerHTML += taskObj.toHTML();
                break;
            case 'In Progress':
                inProgress.innerHTML += taskObj.toHTML();
                break;
            case 'Blocked':
                blocked.innerHTML += taskObj.toHTML();
                break;
            case 'Done':
                done.innerHTML += taskObj.toHTML();
                break;
            default:
                break;
        }
    }
    );
}

