const tasksInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();

    const text = tasksInput.value.trim();

    if (!text) {
        return;
    }

    tasksList.insertAdjacentHTML(
        'beforeend',
        `
        <div class="task">
            <div class="task__title">${text}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `
    );

    tasksInput.value = '';
});

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        event.target.closest('.task').remove();
    }
});