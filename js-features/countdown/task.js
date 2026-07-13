const timer = document.getElementById('timer');
let seconds = Number(timer.textContent);

const interval = setInterval(() => {
    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
    }
}, 1000);