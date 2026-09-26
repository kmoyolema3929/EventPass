const contenedorBoletos = document.getElementById('contenedor-boletos');
const contenedorCarrito = document.getElementById('detalle-carrito');
const totalCarrito = document.getElementById('total-carrito');

let carrito = [];

function renderizarBoletos() {
    contenedorBoletos.innerHTML = '';
    const datosConcierto = localStorage.getItem('conciertoActual');

    if (!datosConcierto) {
        contenedorBoletos.innerHTML = '<p class="text-danger fw-bold">El evento aún no está publicado.</p>';
        return;
    }

    const concierto = JSON.parse(datosConcierto);
    document.getElementById('titulo-concierto').textContent = `Selección de Entradas - ${concierto.nombreConcierto}`;

    concierto.tiposBoleto.forEach(tipo => {
        
        let opcionesZonas = tipo.zonas.map(zona => `<option value="${zona}">${zona}</option>`).join('');

        const div = document.createElement('div');
        div.className = 'zona-tarjeta card p-3 mb-3';
        div.innerHTML = `
            <h5>${tipo.nombre} - $${tipo.precio.toFixed(2)}</h5>
            <div class="row mt-2">
                <div class="col-6">
                    <label class="form-label text-muted small">Selecciona la zona</label>
                    <select class="form-select form-select-sm" id="zona-${tipo.id}">
                        ${opcionesZonas}
                    </select>
                </div>
                <div class="col-6">
                    <label class="form-label text-muted small">Cantidad</label>
                    <div class="input-group input-group-sm">
                        <input type="number" class="form-control" id="cant-${tipo.id}" min="1" max="10" value="1">
                        <button class="btn btn-primary" onclick="agregarAlCarrito('${tipo.id}', '${tipo.nombre}', ${tipo.precio})">Agregar</button>
                    </div>
                </div>
            </div>
        `;
        contenedorBoletos.appendChild(div);
    });
}


window.agregarAlCarrito = function(idTipo, nombre, precio) {
    const zonaSeleccionada = document.getElementById(`zona-${idTipo}`).value;
    const cantidad = parseInt(document.getElementById(`cant-${idTipo}`).value);

    // Buscar si ya existe en el carrito
    const itemExistente = carrito.find(item => item.idTipo === idTipo && item.zona === zonaSeleccionada);
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({ idTipo, nombre, zona: zonaSeleccionada, precio, cantidad });
    }
    
    actualizarCarrito();
};

function actualizarCarrito() {
    contenedorCarrito.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p class="text-muted small">Tu carrito está vacío.</p>';
    } else {
        carrito.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            
            contenedorCarrito.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                    <div>
                        <h6 class="mb-0">${item.nombre}</h6>
                        <small class="text-muted">${item.zona} x ${item.cantidad}</small>
                    </div>
                    <div>
                        <span class="fw-bold">$${subtotal.toFixed(2)}</span>
                        <button class="btn btn-sm btn-outline-danger ms-2" onclick="eliminarDelCarrito(${index})">X</button>
                    </div>
                </div>
            `;
        });
    }
    totalCarrito.textContent = `$${total.toFixed(2)}`;
}

window.eliminarDelCarrito = function(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
};


document.addEventListener('DOMContentLoaded', renderizarBoletos);