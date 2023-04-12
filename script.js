const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productDetailsContainer = document.querySelector('.product-detail');

const categories = [
    {id: 1, name: 'Coffee'},
    {id: 2, name: 'Tea'},
    {id: 3, name: 'Cocktails'},
];

const products = [
    {id: 1, name: 'Cappuccino', price: 5, categoryId: 1},
    {id: 2, name: 'Latte', price: 8, categoryId: 1},
    {id: 3, name: 'Espresso', price: 3, categoryId: 1},
    {id: 4, name: 'Americano', price: 4, categoryId: 1},
    {id: 5, name: 'Earl Grey', price: 5, categoryId: 2},
    {id: 6, name: 'Jasmin', price: 4, categoryId: 2},
    {id: 7, name: 'Orange mint', price: 6, categoryId: 2},
    {id: 8, name: 'Vanilla', price: 3, categoryId: 2},
    {id: 9, name: 'Margarita', price: 10, categoryId: 3},
    {id: 10, name: 'Sex on the beach', price: 12, categoryId: 3},
    {id: 11, name: 'Devils heart', price: 13, categoryId: 3},
    {id: 12, name: 'Jin tonic', price: 9, categoryId: 3},
]

const renderCategories = () => {
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.innerText = category.name;
        categoryElement.addEventListener(
            'click',
            () => {renderProducts(category.id)}
        );
        categoriesContainer.appendChild(categoryElement);
    })
}

const renderProducts = (categoryId) => {
    productsContainer.innerHTML = '';
    if (!categoryId) {
        return;
    }
    const filteredProducts = products.filter(product => product.categoryId === categoryId);
    filteredProducts.forEach (product => {
        const productElement = document.createElement('div');
        productElement.innerText = product.name;
        productElement.addEventListener (
            'click',
            () => {renderProductDetails(product)}
        );
        productsContainer.appendChild(productElement);
    })
};

const renderProductDetails = (product) => {
    productDetailsContainer.innerHTML= '';
    if (!product) {
        return;
    }
    const productDetailsElement = document.createElement('div');
    productDetailsElement.innerHTML = `
        <h3>${product.name}</h3>
        <div>$ ${product.price}</div>
        <button class="btn_buy">Buy</button>
    `;
    productDetailsElement.querySelector('.btn_buy').addEventListener(
        'click',
        () => {
            alert(`You bought ${product.name}!`);
            renderProducts();
            renderProductDetails();
        }
    );
    productDetailsContainer.appendChild(productDetailsElement);
};

renderCategories();
renderProducts();
renderProductDetails();