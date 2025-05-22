fetch('data/products.json') 
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('products-container');
        products.forEach(product => {
            container.innerHTML += `
  <div class="product-card">
    <h3>${product["Название товара"]}</h3>
    <p>Артикул: ${product.Артикул}</p>
    <a href="${product.Ссылка}" target="_blank">Купить на andiv.ru</a>
  </div>
`;
        });
    })
    .catch(error => console.error('Ошибка:', error)); // Добавьте обработку ошибок
