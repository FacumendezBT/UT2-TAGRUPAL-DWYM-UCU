let taskModal;
let tasks = [];
const serverUrl = 'http://127.0.0.1:3000/api/tasks';

document.addEventListener('DOMContentLoaded', () => {

    initilizeTasks();

    const personas = ["Rodrigo Lujambio", "Michel Sampil", "Jose Abadie", "Facundo Méndez"];
    const prioridades = ["High", "Medium", "Low"];
    const estados = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];

    taskModal = new CreateTask(personas, prioridades, estados);

    document.getElementById('modal-container').innerHTML = taskModal.toHTML();

    document.getElementById("newTask").addEventListener('click', () => {
        taskModal.openModal();
    });
    document.getElementById("newTaskMini").addEventListener('click', () => {
        taskModal.openModal();
    });

    document.getElementById("saveButton").addEventListener('click', () => {
        taskModal.saveTask();
        document.querySelector('#modal-container .modal').classList.remove('is-active');
    });
    document.getElementById("cancelButton").addEventListener('click', () => {
        taskModal.cancelTask();
        document.querySelector('#modal-container .modal').classList.remove('is-active');
    });
    document.getElementById("deleteButton").addEventListener('click', () => {
        taskModal.deleteTask();
        document.querySelector('#modal-container .modal').classList.remove('is-active');
    });
    document.querySelector('#taskTitle').addEventListener('input', () => taskModal.validateTask());
    document.querySelector('#taskDesc').addEventListener('input', () => taskModal.validateTask());
});


async function initilizeTasks() {
    tasks = await fetchTasksFromServer();

    let backLog = document.getElementById('backlog');
    let toDo = document.getElementById('toDo');
    let inProgress = document.getElementById('inProgress');
    let blocked = document.getElementById('blocked');
    let done = document.getElementById('done');

    tasks.forEach(task => {
        const taskObj = new Task(task.title, task.description, task.assignedTo, task.priority, task.status, task.startDate, task.endDate, task.id);
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

/**
 * Fetches tasks from the server.
 * 
 * @async
 * @returns {Promise<Object[]>} A promise that resolves to an array of tasks.
 */
async function fetchTasksFromServer() {
    try {
        const response = await fetch(serverUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            addNotification(`Error cargando las tareas`, 'danger', 5000);
            console.error('Error cargando las tareas');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        addNotification(`Error cargando las tareas`, 'danger', 5000);
        console.error(error);
        return [];
    }
}