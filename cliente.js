// Array para almacenar la lista de clientes
let clientes = [];

// Función para agregar un nuevo cliente
function agregarCliente() {
  // Obtener valores del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  // Validar que los campos no estén vacíos
  if (nombre && email && telefono) {
    // Crear objeto cliente
    const cliente = {
      nombre: nombre,
      email: email,
      telefono: telefono
    };

    // Agregar cliente al array
    clientes.push(cliente);

    // Limpiar formulario
    document.getElementById('clienteForm').reset();

    // Actualizar la lista de clientes
    actualizarListaClientes();
    } else {
    alert('Por favor, complete todos los campos.');
  }
}

// Función para actualizar la lista de clientes en el HTML
function actualizarListaClientes() {
  const listaClientes = document.getElementById('listaClientes');
  listaClientes.innerHTML = ''; // Limpiar la lista

  // Iterar sobre la lista de clientes y agregar elementos a la lista en el HTML
  clientes.forEach((cliente, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
      <span>${cliente.nombre} - ${cliente.email} - ${cliente.telefono}</span>
      <button type="button" class="btn btn-warning btn-sm ml-2" onclick="editarCliente(${index})">Editar</button>
      <button type="button" class="btn btn-danger btn-sm ml-2" onclick="eliminarCliente(${index})">Eliminar</button>
    `;
    listaClientes.appendChild(listItem);
  });
}

// Función para editar un cliente
function editarCliente(index) {
  // Obtener el cliente seleccionado
  const cliente = clientes[index];

  // Llenar el formulario con los datos del cliente
  document.getElementById('nombre').value = cliente.nombre;
  document.getElementById('email').value = cliente.email;
  document.getElementById('telefono').value = cliente.telefono;

  // Eliminar el cliente de la lista
  clientes.splice(index, 1);

  // Actualizar la lista de clientes
  actualizarListaClientes();
}

// Función para eliminar un cliente
function eliminarCliente(index) {
  // Eliminar el cliente de la lista
  clientes.splice(index, 1);

  // Actualizar la lista de clientes
  actualizarListaClientes();
}