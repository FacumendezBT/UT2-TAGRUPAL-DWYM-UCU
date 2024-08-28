class CreateTask {
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
                        <p class="modal-card-title">Crear tarea</p>
                        <button class="delete" aria-label="close" id="cancelButton"></button>
                       
                    </header>
                    <section class="modal-card-body">
                        <form>
                            <div class="field">
                                <label class="label">Título</label>
                                <div class="control">
                                    <input class="input"  type="text" placeholder="Título de la tarea" id="taskTitle">
                                    <p class="help is-danger is-hidden">El título no puede estar vacío</p>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Descripción</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Descripción de la tarea" id="taskDesc"></textarea>
                                    <p class="help is-danger is-hidden">Debe insertar una descripción</p>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Asignado</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="taskAssigned">
                                            ${this.generateOptions(this.personas)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Prioridad</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="taskPriority">
                                            ${this.generateOptions(this.prioridades)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Estado</label>
                                <div class="control">
                                    <div class="select">
                                        <select id="taskStatus">
                                            ${this.generateOptions(this.estados)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Fecha límite</label>
                                <div class="control">
                                    <input class="input" type="date" id="taskDueDate">
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

    saveTask() {
        const title = document.querySelector('#taskTitle').value;
        const description = document.querySelector('#taskDesc').value;
        const assigned = document.querySelector('#taskAssigned').value;
        const priority = document.querySelector('#taskPriority').value;
        const status = document.querySelector('#taskStatus').value;
        let dueDate = document.querySelector('#taskDueDate').value;
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
