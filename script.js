document.addEventListener('DOMContentLoaded', function () {
    // banner de cookies 
    var cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'block';
});


function acceptCookies() {
    // Al hacer clic en "Aceptar Todas", oculta el banner de cookies
    var cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'none';
}

function openCookieSettings() {
    // Abre el modal de configuración de cookies
    var cookieModal = document.getElementById('cookieModal');
    cookieModal.style.display = 'flex';
}

function closeCookieSettings() {
    // Cierra el modal de configuración de cookies
    var cookieModal = document.getElementById('cookieModal');
    cookieModal.style.display = 'none';
}

function saveCookieSettings() {
    // Implementa la lógica para guardar la configuración de cookies aquí
    closeCookieSettings();
}

    // JSON
    const servicios = [
        { nombre: 'Circuito Spa', descripcion: 'Nuestro circuito spa ofrece una experiencia completa de relajación con sauna, jacuzzi y baño de vapor.', imagen: 'img/circuito_spa.jpg' },
        { nombre: 'Circuito Spa + Masaje', descripcion: 'Disfruta de la combinación perfecta con nuestro circuito spa seguido de un relajante masaje personalizado.', imagen: 'img/circuito_masaje.jpg' },
        { nombre: 'Masajes', descripcion: 'Ofrecemos una variedad de masajes, desde relajantes hasta terapéuticos, adaptados a tus necesidades específicas.', imagen: 'img/masajes.jpg' },
        { nombre: 'Spa y Comida', descripcion: 'Experimenta el lujo de nuestro spa combinado con deliciosas opciones de comida, ya sea desayuno, almuerzo o cena.', imagen: 'img/spa_comida.jpg' },
        { nombre: 'Rituales', descripcion: 'Descubre rituales exclusivos diseñados para renovar tu mente, cuerpo y espíritu con tratamientos especializados.', imagen: 'img/rituales.jpg' },
    ];


    const serviciosContainer = document.querySelector('#servicios .row');

    servicios.forEach(servicio => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'service-card');

        card.innerHTML = `
            <div class="card">
                <img src="${servicio.imagen}" class="card-img-top" alt="${servicio.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${servicio.nombre}</h5>
                    <p class="card-text">${servicio.descripcion}</p>
                </div>
            </div>
        `;

        serviciosContainer.appendChild(card);
    });

    let carrito = [];
let total = 0;

function agregarAlCarrito(productoId) {
    const producto = {
        id: productoId,
        nombre: "Masaje Relajante", // Nombre del producto
        precio: 50.00 // Precio del producto
    };

    carrito.push(producto);
    total += producto.precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

function realizarCompra() {
    // proceso del pago y realizar la compra.
    alert("Compra realizada. Gracias por elegir SpaMar!");
    
    // Reiniciar el carrito
    carrito = [];
    total = 0;

    // Actualizar
    actualizarCarrito();
}