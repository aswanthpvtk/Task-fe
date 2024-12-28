document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const categoryFilter = document.getElementById('category-filter');


    fetch('./data/products.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);

            categoryFilter.addEventListener('change', () => {
                const selectedCategory = categoryFilter.value;
                const filteredProducts = selectedCategory === 'all'
                    ? data
                    : data.filter(product => product.category === selectedCategory);
                displayProducts(filteredProducts);
            });
        })
        .catch(error => {
            console.error('Error loading products:', error);
            productContainer.innerHTML = `<p class="text-red-500">Failed to load products. Please try again later.</p>`;
        });

  
    function displayProducts(products) {
        productContainer.innerHTML = ''; 
        products.forEach(product => {
            const productCard = `
                <div class="bg-white p-4 rounded shadow rounded-5 w-64 h-80 flex flex-col items-center margin-left-30px hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                    <img src="${product.image}" alt="Image of ${product.name}" class="ms-5 w-full h-40 object-cover rounded">
                    <h2 class="mt-2 text-lg font-bold text-center">${product.name}</h2>
                   <p class="text-gray-700 text-center fs-6">${product.description}</p>
                    <p class="text-blue-600 font-bold"> <i class="fa-solid fa-indian-rupee-sign"></i> ${product.price}</p>
                    
                </div>
            `;
            productContainer.innerHTML += productCard;
        });
    }
});
