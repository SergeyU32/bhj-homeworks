const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Убираем активные классы
        tabs.forEach(item => item.classList.remove('tab_active'));
        contents.forEach(item => item.classList.remove('tab__content_active'));

        // Делаем активными выбранные элементы
        tab.classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
    });
});