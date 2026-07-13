const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

products.forEach(product => {
    const dec = product.querySelector('.product__quantity-control_dec');
    const inc = product.querySelector('.product__quantity-control_inc');
    const value = product.querySelector('.product__quantity-value');
    const addButton = product.querySelector('.product__add');

    // Уменьшение количества
    dec.addEventListener('click', () => {
        let count = Number(value.textContent);

        if (count > 1) {
            value.textContent = count - 1;
        }
    });

    // Увеличение количества
    inc.addEventListener('click', () => {
        let count = Number(value.textContent);
        value.textContent = count + 1;
    });

    // Добавление в корзину
    addButton.addEventListener('click', () => {
        const id = product.dataset.id;
        const img = product.querySelector('.product__image').src;
        const count = Number(value.textContent);

        let cartProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);

        if (cartProduct) {
            const cartCount = cartProduct.querySelector('.cart__product-count');
            cartCount.textContent = Number(cartCount.textContent) + count;
        } else {
            cart.insertAdjacentHTML(
                'beforeend',
                `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${count}</div>
                </div>
                `
            );
        }
    });
});