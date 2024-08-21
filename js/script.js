document.addEventListener('DOMContentLoaded', () => {
    let tasks = [];

    for (let i = 0; i < 10; i++) {
        let task = new Task(`Tarea ${i}`, `Descripción de la tarea ${i}`, 'John Doe', 'Alta', 'Backlog', '2021-09-30', '2021-10-30');
        tasks.push(task);
    }

    let tasksContainer = document.getElementById('backlog');

    tasks.forEach(task => {
        tasksContainer.innerHTML += task.toHTML();
    }
    );

    const personas = ["Persona 1", "Persona 2", "Persona 3", "Persona 4", "Persona 5"];
    const prioridades = ["Alta", "Media", "Baja"];
    const estados = ["Pendiente", "En Progreso", "Completada"];

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
});