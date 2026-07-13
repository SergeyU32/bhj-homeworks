const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;

    function rotate() {
        cases[index].classList.remove('rotator__case_active');

        index++;
        if (index >= cases.length) {
            index = 0;
        }

        const activeCase = cases[index];

        activeCase.classList.add('rotator__case_active');
        activeCase.style.color = activeCase.dataset.color;

        setTimeout(rotate, activeCase.dataset.speed || 1000);
    }

    setTimeout(rotate, cases[0].dataset.speed || 1000);
});