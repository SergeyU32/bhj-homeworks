const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

tooltips.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        // Если подсказка уже существует
        let tooltip = item.nextElementSibling;

        if (!tooltip || !tooltip.classList.contains('tooltip')) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = item.title;
            item.insertAdjacentElement('afterend', tooltip);
        }

        // Закрываем предыдущую подсказку
        if (activeTooltip && activeTooltip !== tooltip) {
            activeTooltip.classList.remove('tooltip_active');
        }

        // Если кликнули по уже открытой подсказке
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            activeTooltip = null;
            return;
        }

        tooltip.classList.add('tooltip_active');

        const coords = item.getBoundingClientRect();

        tooltip.style.left = `${coords.left}px`;
        tooltip.style.top = `${coords.bottom}px`;

        activeTooltip = tooltip;
    });
});