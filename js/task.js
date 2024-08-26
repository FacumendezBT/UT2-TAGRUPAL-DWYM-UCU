/**
 * Clase que representa una tarea.
 * @param {string} title - Título de la tarea.
 * @param {string} description - Descripción de la tarea.
 * @param {string} assignedTo - Nombre de la persona asignada a la tarea.
 * @param {string} priority - Prioridad de la tarea.
 * @param {string} status - Estado de la tarea.
 * @param {string} createdAt - Fecha de creación de la tarea.
 * @param {string} dueDate - Fecha límite de la tarea.
 */
class Task {
    constructor(title, description, assignedTo, priority, status, createdAt, dueDate) {
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.priority = priority;
        this.status = status;
        this.createdAt = createdAt;
        this.dueDate = dueDate;
    }
    toHTML() {
        return `
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <div class="mb-5 is-flex is-align-items-center">
                        <span class="has-text-light is-inline-flex has-background-warning is-justify-content-center is-align-items-center is-flex-shrink-0" style="border-radius: 50% !important; width: 40px; height: 40px;" data-path="0.0.0.1.0.0.0.0.0">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-1" data-path="0.0.0.1.0.0.0.0.0.0">
                            <path d="M14.8335 2.58333H9.60014L9.33348 1.75C9.1606 1.26102 8.83993 0.837918 8.41589 0.539299C7.99185 0.24068 7.48544 0.0813322 6.96681 0.0833316H3.16681C2.50377 0.0833316 1.86788 0.346724 1.39904 0.815565C0.930201 1.28441 0.666809 1.92029 0.666809 2.58333V13.4167C0.666809 14.0797 0.930201 14.7156 1.39904 15.1844C1.86788 15.6533 2.50377 15.9167 3.16681 15.9167H14.8335C15.4965 15.9167 16.1324 15.6533 16.6012 15.1844C17.0701 14.7156 17.3335 14.0797 17.3335 13.4167V5.08333C17.3335 4.42029 17.0701 3.78441 16.6012 3.31557C16.1324 2.84672 15.4965 2.58333 14.8335 2.58333ZM15.6668 13.4167C15.6668 13.6377 15.579 13.8496 15.4227 14.0059C15.2665 14.1622 15.0545 14.25 14.8335 14.25H3.16681C2.9458 14.25 2.73383 14.1622 2.57755 14.0059C2.42127 13.8496 2.33348 13.6377 2.33348 13.4167V2.58333C2.33348 2.36232 2.42127 2.15036 2.57755 1.99408C2.73383 1.8378 2.9458 1.75 3.16681 1.75H6.96681C7.14151 1.74955 7.31194 1.80401 7.454 1.9057C7.59606 2.00739 7.70257 2.15115 7.75848 2.31667L8.20848 3.68333C8.26438 3.84885 8.37089 3.99261 8.51295 4.0943C8.65501 4.19598 8.82544 4.25045 9.00014 4.25H14.8335C15.0545 4.25 15.2665 4.3378 15.4227 4.49408C15.579 4.65036 15.6668 4.86232 15.6668 5.08333V13.4167Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        <div class="ml-3">
                            <h3 class="title mb-0" style="font-size: 100;">${this.title}</h3>
                        </div>
                        </div>
                        <div>
                        <div class="content mb-2 is-flex is-justify-content-space-between is-align-items-center">
                            <h4 class="mb-0" style="font-size: 13px;">Fecha de inicio</h4>
                            <span class="tag is-light">${this.createdAt}</span>
                        </div>
                        <div class="content mb-2 is-flex is-justify-content-space-between is-align-items-center">
                            <h4 class="mb-0" style="font-size: 13px;">Prioridad</h4>
                            <span class="tag ${this.calculateColorbyPriority(this.priority)} is-light">${this.priority.toUpperCase()}</span>
                        </div>
                        <div class="content mb-2 is-flex is-justify-content-space-between is-align-items-center">
                            <h4 class="mb-0" style="font-size: 13px;">Fecha de fin</h4>
                            <span class="tag ${this.calculateColorbyDueDate(this.createdAt, this.dueDate)} is-light">${this.dueDate}</span>
                        </div>
                        <div class="content mb-3 is-flex is-justify-content-space-between is-align-items-center">
                            <h4 class="mb-0" style="font-size: 13px;">Asignado</h4>
                            <div class="is-flex is-align-items-center">
                                <img class="image is-32x32 is-cover" style="border-radius: 50% !important;" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;h=128&amp;w=128" alt="alt" data-config-id="image2-1" data-path="0.0.0.1.0.0.0.1.2.0.0">
                            </div>
                        </div>
                        <div class="mb-3 pt-1 is-relative has-background-primary-light">
                            <div class="has-background-warning" style="position: absolute; top: 0; left: 0; width: ${this.calculateProgress(this.createdAt, this.dueDate)}%; height: 100%" data-path="0.0.0.1.0.0.0.1.3.0"></div>
                        </div>
                        <div class="is-flex is-align-items-center">
                            <span class="tag is-link is-light mr-2" style="font-size: 12px;" data-config-id="label2">${this.status}</span>
                            <span class="has-text-weight-semibold has-text-grey-light" style="font-size: 12px;" data-config-id="desc2">${this.textState(this.status)}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Calculo el color de la etiqueta de prioridad.
     * @param {*} priority - Prioridad de la tarea.
     */
    calculateColorbyPriority(priority) {
        switch (priority) {
            case 'Alta':
                return 'is-danger';
            case 'Media':
                return 'is-warning';
            case 'Baja':
                return 'is-success';
            default:
                return 'is-light';
        }
    }

    /**
     * Calculo el texto que se mostrará a la derecha de la etiqueta de estado.
     * @param {*} status - Estado de la tarea.
     * @returns 
     */
    textState(status) {
        switch (status) {
            case 'Backlog':
                return 'La tarea está en el backlog';
            case 'To Do':
                return 'La tarea está en proceso';
            case 'In Progress':
                return 'La tarea está en progreso';
            case 'Blocked':
                return 'La tarea está bloqueada';
            case 'Done':
                return 'La tarea está completada';
            default:
                return 'No se ha definido el estado de la tarea';
        }
    }

    /**
     * Calculo el color de la etiqueta de acuerdo a la fecha de vencimiento.
     * Si falta mas de 1 semana para la fecha límite, el color será verde.
     * Si falta menos de 1 semana para la fecha límite, el color será amarillo.
     * Si falta menos de 2 días para la fecha límite, el color será rojo.
     * @param {*} created - Fecha de creación de la tarea.
     * @param {*} due - Fecha límite de la tarea.
     * @returns 
     */
    calculateColorbyDueDate(created, due) {
        const createdDate = new Date(created);
        const dueDate = new Date(due);
        const currentDate = new Date();

        if (currentDate > dueDate) {
            return 'is-danger';
        }

        const diffTime = dueDate - currentDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 7) {
            return 'is-success';
        } else if (diffDays > 2) {
            return 'is-warning';
        } else {
            return 'is-danger';
        }
    }

    /**
     * Calculo el width sobre 100% para la barra de progreso
     * @param {*} created - Fecha de creación de la tarea.
     * @param {*} due - Fecha límite de la tarea.
     */
    calculateProgress(created, due) {
        const createdDate = new Date(created);
        const dueDate = new Date(due);
        const currentDate = new Date();

        if (currentDate > dueDate) {
            return 100;
        }

        const total = dueDate - createdDate;
        const progress = currentDate - createdDate;

        return Math.min((progress / total) * 100, 100);
    }

}