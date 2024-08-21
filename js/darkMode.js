document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function updateButtonText() {
        darkModeToggle.textContent = body.classList.contains('is-dark-mode') ? '☀️' : '🌙';
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('is-dark-mode');
        updateButtonText();
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('is-dark-mode');
        updateButtonText();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            body.classList.add('is-dark-mode');
        } else {
            body.classList.remove('is-dark-mode');
        }
        updateButtonText();
    });
});
