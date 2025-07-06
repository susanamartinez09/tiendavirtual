// product.js

// Abrir modal de detalles del producto
function openProductDetailModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-image').src = product.image;
    document.getElementById('detail-product-image').alt = product.alt;
    document.getElementById('detail-product-brand').textContent = product.brand;
    document.getElementById('detail-product-sku').textContent = product.sku;
    document.getElementById('detail-product-description').textContent = product.description;

    const detailFullPrice = document.getElementById('detail-full-price');
    if (product.fullPrice && product.fullPrice > product.price) {
        detailFullPrice.textContent = `$${product.fullPrice.toFixed(2)}`;
        detailFullPrice.classList.remove('hidden');
    } else {
        detailFullPrice.classList.add('hidden');
    }
    document.getElementById('detail-price').textContent = `$${product.price.toFixed(2)}`;

    // Render colors
    const detailColorsContainer = document.getElementById('detail-colors');
    detailColorsContainer.innerHTML = '';
    let selectedColor = null; // Reset selection
    product.colors.forEach(color => {
        const colorSpan = document.createElement('span');
        colorSpan.className = `color-option inline-block w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer transition-all duration-200 hover:scale-110`;
        colorSpan.style.backgroundColor = color; // Fallback for unknown colors or direct color names
        // Handle specific Tailwind colors or custom colors
        if (color === 'white') colorSpan.classList.add('bg-white');
        else if (color === 'black') colorSpan.classList.add('bg-black');
        else if (color === 'blue') colorSpan.classList.add('bg-blue-500');
        else if (color === 'brown') colorSpan.classList.add('bg-amber-800');
        else if (color === 'gray') colorSpan.classList.add('bg-gray-500');
        else if (color === 'red') colorSpan.classList.add('bg-red-500');
        else if (color === 'orange') colorSpan.classList.add('bg-orange-500');

        colorSpan.dataset.color = color;
        detailColorsContainer.appendChild(colorSpan);
    });

    // Render sizes
    const detailSizesContainer = document.getElementById('detail-sizes');
    detailSizesContainer.innerHTML = '';
    let selectedSize = null; // Reset selection
    product.sizes.forEach(size => {
        const sizeButton = document.createElement('button');
        sizeButton.className = 'size-option px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-200';
        sizeButton.text