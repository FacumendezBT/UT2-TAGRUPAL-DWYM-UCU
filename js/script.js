document.addEventListener('DOMContentLoaded', () => {
    let tasks = [];

    initilizeTasks();

    const personas = ["Persona 1", "Persona 2", "Persona 3", "Persona 4", "Persona 5"];
    const prioridades = ["Alta", "Media", "Baja"];
    const estados = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];

    // Crear una instancia de TaskModal
    const taskModal = new CreateTask(personas, prioridades, estados);

    // Generar el HTML del modal
    const modalHTML = taskModal.toHTML();

    // Insertar el HTML del modal en el documento
    document.getElementById('modal-container').innerHTML = modalHTML;

    document.getElementById("newTask").addEventListener('click', () => {
        document.querySelector('.modal').classList.add('is-active');
    });

    document.getElementById("cancelButton").addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active');
    });

    document.getElementById("saveButton").addEventListener('click', () => {
        taskModal.saveTask();
        document.querySelector('.modal').classList.remove('is-active');
    });
});


function initilizeTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    // Borrar esto, son solo datos de prueba
    for (let i = 0; i < 3; i++) {
        let task = new Task(`Crear tarea ${i}`, `Descripción de la tarea ${i}`, 'John Doe', 'Alta', 'Backlog', '2021-09-30', '2021-10-12');
        tasks.push(task);
    }
    for (let i = 0; i < 5; i++) {
        let task = new Task(`Crear tarea 2 ${i}`, `Descripción de la tarea ${i}`, 'John Doe', 'Alta', 'To Do', '2021-09-30', '2021-10-12');
        tasks.push(task);
    }
    
    let backLog = document.getElementById('backlog');
    let toDo = document.getElementById('toDo');
    let inProgress = document.getElementById('inProgress');
    let blocked = document.getElementById('blocked');
    let done = document.getElementById('done');

    tasks.forEach(task => {
        switch (task.status) {
            case 'Backlog':
                backLog.innerHTML += task.toHTML();
                break;
            case 'To Do':
                toDo.innerHTML += task.toHTML();
                break;
            case 'In Progress':
                inProgress.innerHTML += task.toHTML();
                break;
            case 'Blocked':
                blocked.innerHTML += task.toHTML();
                break;
            case 'Done':
                done.innerHTML += task.toHTML();
                break;
            default:
                break;
        }
    }
    );
}

