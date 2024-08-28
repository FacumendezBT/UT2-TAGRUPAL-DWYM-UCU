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
                                </div>
                                <p id="titleError" class="help is-danger" style="display: none;">Debe ingresar un título.</p>
                            </div>
                            <div class="field">
                                <label class="label">Descripción</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Descripción de la tarea" id="taskDesc"></textarea>
                                </div>
                                <p id="descriptionError" class="help is-danger" style="display: none;">Debe ingresar una descripción. </p>
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
                    </footer>
                </div>
            </div>
        `;
    }

    validateTask() {
        const title = document.querySelector('#taskTitle').value.trim();
        const description = document.querySelector('#taskDesc').value.trim();
        
        let isValid = true;
        
        if (title === '') {
            document.getElementById('titleError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('titleError').style.display = 'none';
        }
        
        if (description === '') {
            document.getElementById('descriptionError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('descriptionError').style.display = 'none';
        }
        
        document.querySelector('#saveButton button').disabled = !isValid;
        return isValid;
    }
    

    saveTask() {
        if (!this.validateTask()) return;

        const title = document.querySelector('#taskTitle').value;
        const description = document.querySelector('#taskDesc').value;
        const assigned = document.querySelector('#taskAssigned').value;
        const priority = document.querySelector('#taskPriority').value;
        const status = document.querySelector('#taskStatus').value;
        let dueDate = document.querySelector('#taskDueDate').value;
        if (!dueDate) {
            const today = new Date();
            today.setDate(today.getDate() + 7);
            dueDate = today.toISOString().slice(0, 10);
        }
        const task = new Task(title, description, assigned, priority, status, new Date().toISOString().slice(0, 10), dueDate);
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
    cancelTask() {
        document.querySelector('#taskTitle').value = '';
        document.querySelector('#taskDesc').value = '';
        document.querySelector('#taskAssigned').selectedIndex = 0;
        document.querySelector('#taskPriority').selectedIndex = 0;
        document.querySelector('#taskStatus').selectedIndex = 0;
        document.querySelector('#taskDueDate').value = '';
        document.getElementById('titleError').style.display = 'none';
        document.getElementById('descriptionError').style.display = 'none';
    }
}
