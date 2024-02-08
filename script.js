fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(response => response.json())
      .then(data => {
        displayProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
    // Function to display products in the specified container
    function displayProducts(data) {
      const mensProductsContainer = document.getElementById('mens-products');
      const womensProductsContainer = document.getElementById('womens-products');
      const kidsProductsContainer = document.getElementById('kids-products');

      data.forEach(product => {
        const productCard = `
          <div class="product-card">
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
          </div>
        `;
        if (product.category === 'mens') {
          mensProductsContainer.insertAdjacentHTML('beforeend', productCard);
        } else if (product.category === 'womens') {
          womensProductsContainer.insertAdjacentHTML('beforeend', productCard);
        } else if (product.category === 'kids') {
          kidsProductsContainer.insertAdjacentHTML('beforeend', productCard);
        }
      });

      // Button click event handler
      const categoryButtons = document.querySelectorAll('.category-button');
      categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');
          const activeSection = document.getElementById(`${category}-section`);
          const allSections = document.querySelectorAll('.section');
          allSections.forEach(section => section.style.display = 'none');
          activeSection.style.display = 'block';
        });
      });
    }