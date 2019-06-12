const products = [...document.querySelectorAll('.product')],
        cartBlock = document.querySelector('.cart'),
            cart = cartBlock.querySelector('.cart__products');

for ( const product of products ) {

    const decBtn = product.querySelector('.product__quantity-control_dec'),
            itemAmount = product.querySelector('.product__quantity-value'),
                incBtn = product.querySelector('.product__quantity-control_inc'),
                    addBtn = product.querySelector('.product__add');

    decBtn.addEventListener('click', () => {
        if ( +itemAmount.textContent === 1) return;

        itemAmount.textContent--;
    });

    incBtn.addEventListener('click', () => {
        itemAmount.textContent++;
    });

    addBtn.addEventListener('click', () => {

        const newItemID = product.dataset.id,
                newItemPic = product.querySelector('.product__image').src;

        const itemHTML = `<div class="cart__product" data-id="${newItemID}">
                            <img class="cart__product-image" src="${newItemPic}">
                            <div class="cart__product-delete">&times;</div>
                            <div class="cart__product-count">${itemAmount.textContent}</div>
                        </div>`;

        const itemsInCart = [...cart.children];

        const productFound = newItemID => {

            return itemsInCart.find( item => {

              return item.dataset.id === newItemID;
            });
        };

        if ( productFound(newItemID) === undefined ) {

            cart.insertAdjacentHTML('afterbegin', itemHTML);
            cartBlock.classList.add('cart-active');

        } else {

            itemsInCart.forEach( item => {

                if (item.dataset.id === newItemID) {
                    const curAmount = item.querySelector('.cart__product-count');
                    const newItemAmount = +curAmount.textContent + +itemAmount.textContent;
                    curAmount.textContent = newItemAmount;
                };
            });
        };

        getStored();
    });
};

function getStored() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart.innerHTML));
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Превышен лимит');
        };
    };
};

cart.addEventListener('click', (e) => {
    const btn = e.target;

    if ( btn.classList.contains('cart__product-delete') ) {
        
        btn.closest('.cart__product').remove();

        if (cart.children.length === 0) cartBlock.classList.remove('cart-active');

        getStored();
    }
});

window.addEventListener('load', () => {
    cart.innerHTML = JSON.parse(localStorage.getItem('cart'));

    if (cart.children.length) cartBlock.classList.add('cart-active');
});