

# Zapatería Elite - Tienda Virtual

## Descripción del Proyecto

¡Bienvenido a la Tienda Virtual de Zapatería Elite\! Este proyecto es una aplicación web de comercio electrónico minimalista y responsiva, diseñada para mostrar y vender una variedad de calzado. Permite a los usuarios explorar productos, ver detalles específicos de cada artículo, añadir productos a un carrito de compras y simular un proceso de pago.

El objetivo principal es demostrar la creación de una interfaz de usuario dinámica y funcional utilizando HTML, CSS (con Tailwind CSS) y JavaScript puro, sin el uso de frameworks complejos de frontend.

## Características Principales

  * **Catálogo de Productos Dinámico:** Visualiza una lista de zapatos con información detallada como nombre, marca, precio y SKU.
  * **Filtros por Categoría:** Filtra productos por categorías como "Running", "Casual", "Formal" y "Deportivo".
  * **Modal de Detalles del Producto:** Haz clic en cualquier producto para ver una vista detallada con su descripción, precio, colores y tallas disponibles, y la opción de añadirlo al carrito.
  * **Carrito de Compras Funcional:**
      * Añade productos al carrito con la talla y el color seleccionados.
      * Ajusta la cantidad de productos en el carrito.
      * Elimina productos del carrito.
      * Calcula el total automáticamente.
  * **Proceso de Checkout Simplificado:** Un modal de pago que simula la confirmación de la compra con opciones de dirección y método de pago.
  * **Notificaciones Toast:** Mensajes temporales de confirmación para acciones como añadir o eliminar productos del carrito.
  * **Diseño Responsivo:** Interfaz adaptada para dispositivos móviles y de escritorio.
  * **Estilos Modernos:** Utiliza **Tailwind CSS** para un diseño limpio y moderno.

## Tecnologías Utilizadas

  * **HTML5:** Estructura de la página web.
  * **CSS3:** Estilos visuales (principalmente con **Tailwind CSS**).
  * **JavaScript (ES6+):** Lógica interactiva del carrito, filtros, modales y renderizado dinámico de productos.

## Cómo Usar

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  **Navegar al directorio del proyecto:**
    ```bash
    cd zapateria-elite-tienda-virtual
    ```
3.  **Abrir `index.html`:** Simplemente abre el archivo `index.html` en tu navegador web preferido (Chrome, Firefox, Edge, etc.). No se requiere un servidor local para su funcionamiento básico.

## Estructura del Proyecto

```
zapateria-elite-tienda-virtual/
├── index.html        # Contiene la estructura HTML, CSS (incrustado) y JavaScript (incrustado)
└── README.md         # Este archivo
```

**Nota:** Por simplicidad y para este prototipo, el CSS y el JavaScript están incrustados directamente en el archivo `index.html`. Para un proyecto más grande, sería recomendable separarlos en archivos `.css` y `.js` dedicados.

## Mejoras Futuras Potenciales

  * Integración con una API real para la gestión de productos y pedidos.
  * Funcionalidad de búsqueda avanzada.
  * Sistema de autenticación y perfiles de usuario.
  * Pasarela de pago real.
  * Implementación de un framework de JavaScript (React, Vue, Angular) para una gestión del estado más robusta.
  * Base de datos para persistencia de datos del carrito y pedidos.

-----
