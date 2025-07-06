// ... (código existente) ...

// Base de datos de productos (ahora solo para referencia o si tienes productos locales)
const products = [
    // ... (tus productos existentes) ...
];

// ... (resto de tu código JavaScript) ...

// Abrir modal de detalles del producto
async function openProductDetailModal(productId) {
    let product;
    try {
        const response = await fetch(`https://api-frontend-production.up.railway.app/api/products/${productId}`);
        if (!response.ok) {
            throw new Error(`Error al cargar el producto: ${response.statusText}`);
        }
        product = await response.json();
    } catch (error) {
        console.error('Error al obtener los detalles del producto desde la API:', error);
        showToast('No se pudieron cargar los detalles del producto.');
        return; // Sale de la función si hay un error
    }

    if (!product) return; // En caso de que la API devuelva un producto nulo o indefinido

    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-image').src = product.image;
    document.getElementById('detail-product-image').alt = product.alt || product.name; // Usa product.name si alt no está disponible
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
    if (product.colors && product.colors.length > 0) {
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
    } else {
        detailColorsContainer.innerHTML = '<p class="text-gray-500 text-sm">No hay opciones de color disponibles.</p>';
    }


    // Render sizes
    const detailSizesContainer = document.getElementById('detail-sizes');
    detailSizesContainer.innerHTML = '';
    let selectedSize = null; // Reset selection
    if (product.sizes && product.sizes.length > 0) {
        product.sizes.forEach(size => {
            const sizeButton = document.createElement('button');
            sizeButton.className = 'size-option px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-200';
            sizeButton.textContent = size;
            sizeButton.dataset.size = size;
            detailSizesContainer.appendChild(sizeButton);
        });
    } else {
        detailSizesContainer.innerHTML = '<p class="text-gray-500 text-sm">No hay opciones de talla disponibles.</p>';
    }


    // Event listeners for size and color selection within the modal
    detailColorsContainer.onclick = (e) => {
        const target = e.target.closest('.color-option');
        if (target) {
            document.querySelectorAll('#detail-colors .color-option').forEach(btn => btn.classList.remove('selected'));
            target.classList.add('selected');
            selectedColor = target.dataset.color;
        }
    };

    detailSizesContainer.onclick = (e) => {
        const target = e.target.closest('.size-option');
        if (target) {
            document.querySelectorAll('#detail-sizes .size-option').forEach(btn => btn.classList.remove('selected', 'bg-indigo-600', 'text-white'));
            target.classList.add('selected', 'bg-indigo-600', 'text-white');
            selectedSize = parseInt(target.dataset.size);
        }
    };

    // Add to cart button in modal
    addToCartDetailBtn.onclick = () => {
        if (selectedSize && selectedColor) {
            addToCart(productId, selectedSize, selectedColor);
            productDetailModal.classList.add('hidden');
        } else {
            showToast('Por favor, selecciona una talla y un color.');
        }
    };

    productDetailModal.classList.remove('hidden');
}

// ... (resto de tu código JavaScript) ...
