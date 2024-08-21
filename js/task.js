/**
 * Clase que representa una tarea.
 * @param {string} title - Título de la tarea.
 * @param {string} description - Descripción de la tarea.
 * @param {string} assignedTo - Nombre de la persona asignada a la tarea.
 * @param {string} priority - Prioridad de la tarea.
 * @param {string} status - Estado de la tarea.
 * @param {string} dueDate - Fecha límite de la tarea.
 * @param {string} createdAt - Fecha de creación de la tarea.
 */
class Task {
    constructor(title, description, assignedTo, priority, status, createdAt, dueDate, image) {
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
            <div class="card" data-path="0.0.0.1.0">
                <div class="card-content" data-path="0.0.0.1.0.0">
                    <div class="content" data-path="0.0.0.1.0.0.0">
                        <div class="mb-5 is-flex is-align-items-center" data-path="0.0.0.1.0.0.0.0">
                        <span class="has-text-light is-inline-flex has-background-warning is-justify-content-center is-align-items-center is-flex-shrink-0" style="border-radius: 50% !important; width: 40px; height: 40px;" data-path="0.0.0.1.0.0.0.0.0">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-1" data-path="0.0.0.1.0.0.0.0.0.0">
                            <path d="M14.8335 2.58333H9.60014L9.33348 1.75C9.1606 1.26102 8.83993 0.837918 8.41589 0.539299C7.99185 0.24068 7.48544 0.0813322 6.96681 0.0833316H3.16681C2.50377 0.0833316 1.86788 0.346724 1.39904 0.815565C0.930201 1.28441 0.666809 1.92029 0.666809 2.58333V13.4167C0.666809 14.0797 0.930201 14.7156 1.39904 15.1844C1.86788 15.6533 2.50377 15.9167 3.16681 15.9167H14.8335C15.4965 15.9167 16.1324 15.6533 16.6012 15.1844C17.0701 14.7156 17.3335 14.0797 17.3335 13.4167V5.08333C17.3335 4.42029 17.0701 3.78441 16.6012 3.31557C16.1324 2.84672 15.4965 2.58333 14.8335 2.58333ZM15.6668 13.4167C15.6668 13.6377 15.579 13.8496 15.4227 14.0059C15.2665 14.1622 15.0545 14.25 14.8335 14.25H3.16681C2.9458 14.25 2.73383 14.1622 2.57755 14.0059C2.42127 13.8496 2.33348 13.6377 2.33348 13.4167V2.58333C2.33348 2.36232 2.42127 2.15036 2.57755 1.99408C2.73383 1.8378 2.9458 1.75 3.16681 1.75H6.96681C7.14151 1.74955 7.31194 1.80401 7.454 1.9057C7.59606 2.00739 7.70257 2.15115 7.75848 2.31667L8.20848 3.68333C8.26438 3.84885 8.37089 3.99261 8.51295 4.0943C8.65501 4.19598 8.82544 4.25045 9.00014 4.25H14.8335C15.0545 4.25 15.2665 4.3378 15.4227 4.49408C15.579 4.65036 15.6668 4.86232 15.6668 5.08333V13.4167Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        <div class="ml-3" data-path="0.0.0.1.0.0.0.0.1">
                            <h3 class="title mb-0" style="font-size: 15;" data-config-id="title2" data-path="0.0.0.1.0.0.0.0.1.0">${this.title}</h3>
                        </div>
                        </div>
                        <div data-path="0.0.0.1.0.0.0.1">
                        <div class="is-flex is-align-items-center has-text-grey-light" data-path="0.0.0.1.0.0.0.1.0">
                            <span class="mr-2" data-path="0.0.0.1.0.0.0.1.0.0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M13.4406 15.6044L14.8406 14.2044L11.1406 10.5044V5.90442H9.14062V11.3044L13.4406 15.6044ZM10.1406 20.9044C8.75729 20.9044 7.45729 20.6419 6.24062 20.1169C5.02396 19.5919 3.96562 18.8794 3.06562 17.9794C2.16562 17.0794 1.45313 16.0211 0.928125 14.8044C0.403125 13.5878 0.140625 12.2878 0.140625 10.9044C0.140625 9.52109 0.403125 8.22109 0.928125 7.00442C1.45313 5.78775 2.16562 4.72942 3.06562 3.82942C3.96562 2.92942 5.02396 2.21692 6.24062 1.69192C7.45729 1.16692 8.75729 0.904419 10.1406 0.904419C11.524 0.904419 12.824 1.16692 14.0406 1.69192C15.2573 2.21692 16.3156 2.92942 17.2156 3.82942C18.1156 4.72942 18.8281 5.78775 19.3531 7.00442C19.8781 8.22109 20.1406 9.52109 20.1406 10.9044C20.1406 12.2878 19.8781 13.5878 19.3531 14.8044C18.8281 16.0211 18.1156 17.0794 17.2156 17.9794C16.3156 18.8794 15.2573 19.5919 14.0406 20.1169C12.824 20.6419 11.524 20.9044 10.1406 20.9044ZM10.1406 18.9044C12.3573 18.9044 14.2448 18.1253 15.8031 16.5669C17.3615 15.0086 18.1406 13.1211 18.1406 10.9044C18.1406 8.68775 17.3615 6.80025 15.8031 5.24192C14.2448 3.68359 12.3573 2.90442 10.1406 2.90442C7.92396 2.90442 6.03646 3.68359 4.47813 5.24192C2.91979 6.80025 2.14062 8.68775 2.14062 10.9044C2.14062 13.1211 2.91979 15.0086 4.47813 16.5669C6.03646 18.1253 7.92396 18.9044 10.1406 18.9044Z" fill="#DDDDDD"/>
                            </svg>
                            </span>
                            <span style="font-size: 12px;" data-config-id="loc2" data-path="0.0.0.1.0.0.0.1.0.1">${this.createdAt}</span>
                        </div>
                        <div class="mb-3 is-flex is-align-items-center has-text-grey-light" data-path="0.0.0.1.0.0.0.1.1">
                            <span class="mr-2" data-path="0.0.0.1.0.0.0.1.1.0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M13.4406 15.6044L14.8406 14.2044L11.1406 10.5044V5.90442H9.14062V11.3044L13.4406 15.6044ZM10.1406 20.9044C8.75729 20.9044 7.45729 20.6419 6.24062 20.1169C5.02396 19.5919 3.96562 18.8794 3.06562 17.9794C2.16562 17.0794 1.45313 16.0211 0.928125 14.8044C0.403125 13.5878 0.140625 12.2878 0.140625 10.9044C0.140625 9.52109 0.403125 8.22109 0.928125 7.00442C1.45313 5.78775 2.16562 4.72942 3.06562 3.82942C3.96562 2.92942 5.02396 2.21692 6.24062 1.69192C7.45729 1.16692 8.75729 0.904419 10.1406 0.904419C11.524 0.904419 12.824 1.16692 14.0406 1.69192C15.2573 2.21692 16.3156 2.92942 17.2156 3.82942C18.1156 4.72942 18.8281 5.78775 19.3531 7.00442C19.8781 8.22109 20.1406 9.52109 20.1406 10.9044C20.1406 12.2878 19.8781 13.5878 19.3531 14.8044C18.8281 16.0211 18.1156 17.0794 17.2156 17.9794C16.3156 18.8794 15.2573 19.5919 14.0406 20.1169C12.824 20.6419 11.524 20.9044 10.1406 20.9044ZM10.1406 18.9044C12.3573 18.9044 14.2448 18.1253 15.8031 16.5669C17.3615 15.0086 18.1406 13.1211 18.1406 10.9044C18.1406 8.68775 17.3615 6.80025 15.8031 5.24192C14.2448 3.68359 12.3573 2.90442 10.1406 2.90442C7.92396 2.90442 6.03646 3.68359 4.47813 5.24192C2.91979 6.80025 2.14062 8.68775 2.14062 10.9044C2.14062 13.1211 2.91979 15.0086 4.47813 16.5669C6.03646 18.1253 7.92396 18.9044 10.1406 18.9044Z" fill="#DDDDDD"/>
                            </svg>
                            </span>
                            <span style="font-size: 12px;" data-config-id="url2" data-path="0.0.0.1.0.0.0.1.1.1">Shuffle.dev</span>
                        </div>
                        <div class="mb-5 is-flex is-justify-content-space-between is-align-items-center" data-path="0.0.0.1.0.0.0.1.2">
                            <div class="is-flex is-align-items-center" data-path="0.0.0.1.0.0.0.1.2.0">
                                <img class="image is-32x32 is-cover" style="border-radius: 50% !important;" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;h=128&amp;w=128" alt="alt" data-config-id="image2-1" data-path="0.0.0.1.0.0.0.1.2.0.0">
                            </div>
                            <a class="button is-ghost" href="#" style="border-radius: 50% !important;" data-path="0.0.0.1.0.0.0.1.2.1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-8-1" data-path="0.0.0.1.0.0.0.1.2.1.0">
                                    <path d="M8.00001 6.66666C7.26363 6.66666 6.66668 7.26362 6.66668 8C6.66668 8.73637 7.26363 9.33333 8.00001 9.33333C8.73639 9.33333 9.33334 8.73637 9.33334 7.99999C9.33334 7.26362 8.73639 6.66666 8.00001 6.66666Z" fill="#E1E4E8"></path>
                                    <path d="M12.6667 6.66666C11.9303 6.66666 11.3333 7.26362 11.3333 8C11.3333 8.73637 11.9303 9.33333 12.6667 9.33333C13.403 9.33333 14 8.73637 14 7.99999C14 7.26362 13.403 6.66666 12.6667 6.66666Z" fill="#E1E4E8"></path>
                                    <path d="M3.33332 6.66666C2.59694 6.66666 1.99999 7.26362 1.99999 8C1.99999 8.73637 2.59694 9.33333 3.33332 9.33333C4.0697 9.33333 4.66666 8.73637 4.66666 7.99999C4.66666 7.26362 4.0697 6.66666 3.33332 6.66666Z" fill="#E1E4E8"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="mb-3 pt-1 is-relative has-background-primary-light" data-path="0.0.0.1.0.0.0.1.3">
                            <div class="has-background-warning" style="position: absolute; top: 0; left: 0; width: 20%; height: 100%" data-path="0.0.0.1.0.0.0.1.3.0"></div>
                        </div>
                        <div class="is-flex is-align-items-center" data-path="0.0.0.1.0.0.0.1.4">
                            <span class="tag is-link is-light mr-2" style="font-size: 12px;" data-config-id="label2" data-path="0.0.0.1.0.0.0.1.4.0">${this.status}</span>
                            <span class="has-text-weight-semibold has-text-grey-light" style="font-size: 12px;" data-config-id="desc2" data-path="0.0.0.1.0.0.0.1.4.1">${this.textState(this.status)}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    textState(status) {
        switch (status) {
            case 'Backlog':
                return 'La tarea está en el backlog';
            case 'En Proceso':
                return 'La tarea está en proceso';
            case 'Completada':
                return 'La tarea está completada';
            default:
                return 'No se ha definido el estado de la tarea';
        }
    }
}