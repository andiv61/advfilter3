<!DOCTYPE html>
<html>
<head>
    <title>Каталог фильтров</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Наш каталог</h1>
    <div id="products-container"></div>
    <script src="script.js"></script>
</body>
</html>
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
    .catch(error => console.error('Ошибка:', error));
    .product-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    max-width: 300px;
}
a {
    color: #0066cc;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.product-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    max-width: 300px;
}
a {
    color: #0066cc;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
[
    {
        "Название": "Фильтр А",
        "Артикул": "12345",
        "Кросс-номера": "67890, 78901",
        "Ссылка на andiv.ru": "https://andiv.ru/product/12345"
    },
    {
        "Название": "Фильтр Б",
        "Артикул": "67890",
        "Кросс-номера": "12345, 88123",
        "Ссылка на andiv.ru": "https://andiv.ru/product/67890"
    }
]
