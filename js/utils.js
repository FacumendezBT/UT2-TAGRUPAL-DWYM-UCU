/**
 * Función que recibe un mensaje, un tipo y un tiempo de duración y muestra una notificación
 * @param {string} message Mensaje de la notificación
 * @param {string} type Tipo de la notificación
 * @param {number} timeout Tiempo de duración de la notificación
 */
function addNotification(message, type, timeout) {
    let toast = document.createElement('div');
    toast.style.padding = '20px';
    toast.style.paddingRight = '40px';
    toast.classList.add('notification', 'is-light', 'animate__animated', 'animate__fadeInRight', 'animate__faster');
    toast.innerHTML = `
    <button class="delete crossNotification" onclick="this.parentElement.remove()"></button>
    ${message}
    `;

    switch (type) {
        case 'success':
            toast.classList.add('is-success');
            break;
        case 'warning':
            toast.classList.add('is-warning');
            break;
        case 'danger':
            toast.classList.add('is-danger');
            break;
        default:
            toast.classList.add('is-primary');
            break;
    }

    document.getElementById('notifications').appendChild(toast);

    setTimeout(() => {
        toast.classList.add('animate__animated', 'animate__fadeOutRight');
        setTimeout(() => {
            toast.remove();
        }, 1000);
    }, timeout !== undefined ? timeout : 2000);
}