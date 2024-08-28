class EditTask {
    constructor(personas, prioridades, estados) {
        this.personas = personas;
        this.prioridades = prioridades;
        this.estados = estados;
    }

    generateOptions(options) {
        return options.map(option => `<option>${option}</option>`).join('');
    }

    toHTML() {
        return `
            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Editar tarea</p>
                    </header>
                    <section class="modal-card-body">
                        <form>
                            <div class="field">
                                <label class="label">Título</label>
                                <div class="control">
                                    <input class="input"  type="text" placeholder="Título de la tarea" id="taskTitleEdit">
                                    <p class="help is-danger is-hidden">El título no puede estar vacío</p>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Descripción</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Descripción de la tarea" id="taskDescEdit"></textarea>
                                    <p class="help is-danger is-hidden">Debe insertar una descripción</p>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Asignado</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="taskAssignedEdit">
                                            ${this.generateOptions(this.personas)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Prioridad</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="taskPriorityEdit">
                                            ${this.generateOptions(this.prioridades)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Estado</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="taskStatusEdit">
                                            ${this.generateOptions(this.estados)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Fecha límite</label>
                                <div class="control">
                                    <input class="input" type="date" id="taskDueDateEdit">
                                </div>
                            </div>
                        </form>
                    </section>
                    <footer class="modal-card-foot">
                        <div class="field is-grouped">
                            <div class="control" id="saveButton">
                                <button class="button is-link">Guardar</button>
                            </div>
                            <div class="control">
                                <button class="button is-link is-light" id="cancel-button">Cancelar</button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        `;
    }

    loadTask(task) {
        const currentTask = JSON.parse(localStorage.getItem('tasks')).find(t => t.id === task.id);
        document.querySelector('#taskTitleEdit').value = currentTask.title;
        document.querySelector('#taskDescEdit').value = currentTask.description;
        document.querySelector('#taskAssignedEdit').value = currentTask.assignedTo;
        document.querySelector('#taskPriorityEdit').value = currentTask.priority;
        document.querySelector('#taskStatusEdit').value = currentTask.status;
        document.querySelector('#taskDueDateEdit').value = currentTask.dueDate;

        document.querySelector('#modal-container-edit').getElementsByClassName('modal')[0].classList.add('is-active');
    }

    saveTask() {
        const title = document.querySelector('#taskTitleEdit').value;
        const description = document.querySelector('#taskDescEdit').value;
        const assigned = document.querySelector('#taskAssignedEdit').value;
        const priority = document.querySelector('#taskPriorityEdit').value;
        const status = document.querySelector('#taskStatusEdit').value;
        let dueDate = document.querySelector('#taskDueDateEdit').value;
        const uniqueId = `task-${Math.random().toString(36).substr(2, 9)}`
        if (!dueDate) {
            const today = new Date();
            today.setDate(today.getDate() + 7);
            dueDate = today.toISOString().slice(0, 10);
        }
        const task = new Task(title, description, assigned, priority, status, new Date().toISOString().slice(0, 10), dueDate, uniqueId);
        let backLog = document.getElementById('backlog');
        let toDo = document.getElementById('toDo');
        let inProgress = document.getElementById('inProgress');
        let blocked = document.getElementById('blocked');
        let done = document.getElementById('done');
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
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}