fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('products-container');
        products.forEach(product => {
            container.innerHTML += `
                <div class="product-card">
                    <h3>${product.Название}</h3>
                    <p>Артикул: ${product.Артикул}</p>
                    <p>Кросс-номера: ${product['Кросс-номера']}</p>
                    <a href="${product['Ссылка на andiv.ru']}" target="_blank">Посмотреть на andiv.ru</a>
                </div>
            `;
        });
    })
    .catch(error => console.error('Ошибка:', error)); // Добавьте обработку ошибок