// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let carts = document.querySelector('.carts-block')

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((value) => {
        let arrCarts = value.carts;
            for (const cart of arrCarts) {
                console.log(cart)
                let cartBlock = document.createElement('div')
                cartBlock.classList.add('cart-block')
                carts.appendChild(cartBlock)
                cartBlock.innerHTML = `
                    <div>
                        <h3>Cart: ${cart.id}</h3>
                        <p>userID: ${cart.userId}</p>
                        <p>Total Products: ${cart.totalProducts}</p>
                        <p>Total: ${cart.total}</p>
                        <p>Total Quantity: ${cart.totalQuantity}</p>
                    </div>
                `
                for (const product of cart.products) {
                    let productBlock = document.createElement('div');
                    productBlock.classList.add('product-block')
                    cartBlock.appendChild(productBlock)
                    productBlock.innerHTML = `
                        <h3>Products:</h3>
                        <p>ID: ${product.id}</p>
                        <p>Title: ${product.title}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: ${product.quantity}</p>
                        <p>Total: ${product.total}</p>
                    `
                }
            }
    }
    );