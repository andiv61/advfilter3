# advfilter3
git clone https://github.com/andiv61/andiv61.github.io
cd andiv61.github.io
/
├── index.html       # Главная страница
├── products.json    # Файл с товарами
├── style.css        # Стили
└── script.js        # Скрипт для загрузки товаров
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
    });
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
git add .
git commit -m "Добавлен каталог товаров"
git push origin main
