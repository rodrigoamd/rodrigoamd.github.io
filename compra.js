document.addEventListener("DOMContentLoaded", function () {
  let totalCompra = 0;


  const contenedorCompra = document.createElement("div");
  contenedorCompra.className = "container mt-4";


  const encabezadoTabla = document.createElement("h4");
  encabezadoTabla.textContent = "Detalles de la compra";
  encabezadoTabla.style.display = "none"; 

  const tablaCompra = document.createElement("table");
  tablaCompra.className = "table table-rounded shadow";
  tablaCompra.style.display = "none";
  tablaCompra.innerHTML = `
    <thead>
      <tr class="bg-primary text-white">
        <th>Producto</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;


  const filaTotal = document.createElement("tr");
  filaTotal.innerHTML = `
    <td class="bg-primary text-white">Descripción</td>
    <td class="bg-primary text-white">Total</td>
    <td class="bg-primary text-white">Acciones</td>
  `;
  tablaCompra.querySelector("tbody").appendChild(filaTotal);

  const filaResumen = document.createElement("tr");
  filaResumen.innerHTML = `
    <td>Compra</td>
    <td id="totalCompra">$0.00</td>
    <td>
      <button class="btn btn-success pagar-item">Pagar</button>
    </td>
  `;
  tablaCompra.querySelector("tbody").appendChild(filaResumen);

  contenedorCompra.appendChild(encabezadoTabla);
  contenedorCompra.appendChild(tablaCompra);

  const contenedorTabla = document.getElementById("contenedorTabla");
  contenedorTabla.appendChild(contenedorCompra);

  const totalElement = document.getElementById("totalCompra");

  const botonesAgregar = document.querySelectorAll(".agregaritem");
  botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      encabezadoTabla.style.display = "block";
      tablaCompra.style.display = "table";
      const nombreProducto = this.parentNode.querySelector(".card-title").innerText;
      const precioTexto = this.parentNode.querySelector(".precio").innerText;
      const precioProducto = parseFloat(precioTexto);

      totalCompra += precioProducto;

      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${nombreProducto}</td>
        <td>$${precioProducto}</td>
        <td>
          <button class="btn btn-danger quitar-item">Quitar</button>
        </td>
      `;
      tablaCompra.querySelector("tbody").insertBefore(fila, filaTotal);

      totalElement.textContent = `$${totalCompra}`;

      alert(`Producto ${nombreProducto} agregado al carrito`);

      const botonQuitar = fila.querySelector(".quitar-item");
      botonQuitar.addEventListener("click", function () {

        tablaCompra.querySelector("tbody").removeChild(fila);

        totalCompra -= precioProducto;

        totalElement.textContent = `$${totalCompra}`;

        alert(`Producto ${nombreProducto} quitado del carrito`);

        if (totalCompra == 0) {
          encabezadoTabla.style.display = "none";
          tablaCompra.style.display = "none";
        }
      });
    });
  });

  const botonPagar = contenedorCompra.querySelector(".pagar-item");
  botonPagar.addEventListener("click", function () {
    
    const modal = new bootstrap.Modal(document.getElementById('myModal'));

    modal.show();
    iniciarPayPalIntegration(totalCompra);
  });
});
