fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products-container');
    products.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <h3>${product.Название}</h3>
          <p>Артикул: ${product.Артикул}</p>
          <p>Кросс-номера: ${product.КроссНомера}</p>
          <a href="${product.Ссылка}" target="_blank" class="buy-button">
            Посмотреть на andiv.ru
          </a>
        </div>
      `;
    });
  });
