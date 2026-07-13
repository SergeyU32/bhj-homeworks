const fontSizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', (event) => {
        event.preventDefault();

        // Убираем активный класс у всех кнопок
        fontSizes.forEach(item => {
            item.classList.remove('font-size_active');
        });

        // Делаем активной нажатую кнопку
        fontSize.classList.add('font-size_active');

        // Сбрасываем классы размера
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');

        // Добавляем нужный класс
        const size = fontSize.dataset.size;

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});