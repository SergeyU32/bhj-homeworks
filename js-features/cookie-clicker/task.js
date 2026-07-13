const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

let clicks = 0;
let isBig = true;
let lastClick = new Date();

cookie.onclick = function () {
    clicks++;
    counter.textContent = clicks;

    if (isBig) {
        cookie.width = 180;
        isBig = false;
    } else {
        cookie.width = 200;
        isBig = true;
    }

    const now = new Date();
    const seconds = (now - lastClick) / 1000;

    if (clicks > 1) {
        speed.textContent = (1 / seconds).toFixed(2);
    }

    lastClick = now;
};