// Define el catálogo de productos
const productos = [
    {
      nombre: "Producto 1",
      precio: 100,
      descripcion: "Descripción del producto 1",
    },
    {
      nombre: "Producto 2",
      precio: 200,
      descripcion: "Descripción del producto 2",
    },
    // Agregar más productos aquí
  ];
  
  // Define el carrito de compras
  let carrito = [];
  
  // Obtener elementos del DOM
  const productosEl = document.querySelector(".productos");
  const carritoEl = document.querySelector(".carrito");
  const listaDeProductosEl = document.querySelector(".lista-de-productos");
  const totalEl = document.querySelector(".total");
  const comprarEl = document.querySelector(".comprar");
  
  // Función para mostrar los productos en el catálogo
  function mostrarProductos() {
    productos.forEach(producto => {
      const productoEl = document.createElement("div");
      productoEl.classList.add("producto");
      productoEl.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">$${producto.precio}</p>
        <button class="agregar-al-carrito">Agregar al carrito</button>
      `;
      productosEl.appendChild(productoEl);
  
      const botonAgregarAlCarritoEl = productoEl.querySelector(".agregar-al-carrito");
      botonAgregarAlCarritoEl.addEventListener("click", () => {
        agregarAlCarrito(producto);
      });
    });
  }
  
  // Función para agregar un producto al carrito de compras
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
  }
  
  // Función para eliminar un producto del carrito de compras
  function eliminarDelCarrito(producto) {
    carrito = carrito.filter(item => item !== producto);
    mostrarCarrito();
  }
  
  // Función para mostrar los productos en el carrito de compras
  function mostrarCarrito() {
    listaDeProductosEl.innerHTML = "";
    carrito.forEach(producto => {
      const productoEl = document.createElement("li");
      productoEl.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <span>${producto.nombre}</span>
        <span>$${producto.precio}</span>
        <button class="eliminar-del-carrito">Eliminar</button>
      `;
      listaDeProductosEl.appendChild(productoEl);
  
      const botonEliminarDelCarritoEl = productoEl.querySelector(".eliminar-del-carrito");
      botonEliminarDelCarritoEl.addEventListener("click", () => {
        eliminarDelCarrito(producto);
      });
    });
  
    totalEl.textContent = `Total: $${calcularTotal()}`;
  }
  
  // Función para calcular el precio total de la compra
  function calcularTotal() {
    let total = 0;
    carrito.forEach(item => {
      total += item.precio;
    });
    return total;
  }
  
  // Función para completar la compra
  function comprar() {
    alert("Gracias por su compra!");
    carrito = [];
    mostrarCarrito();
  }
  
  // Mostrar los productos en el catálogo
  mostrarProductos();
  
  // Escuchar clics en el botón de comprar
  comprarEl.addEventListener("click", comprar);