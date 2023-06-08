
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var productos = [
    {
      nombre: "AXSPEN",
      imagen: "img/B/b1.png",
      descripcion: "Chaqueta masculina 607",
      calificacion: 5,
      precio: "COP 150,000"
    },

    {
        nombre: "AXSPEN",
        imagen: "../img/B/b1.png",
        descripcion: "Chaqueta masculina 87",
        calificacion: 5,
        precio: "COP 150,000"
      },

      {
        nombre: "AXSPEN",
        imagen: "../img/B/b1.png",
        descripcion: "Chaqueta masculina 87",
        calificacion: 5,
        precio: "COP 150,000"
      },

      {
        nombre: "AXSPEN",
        imagen: "../img/B/b1.png",
        descripcion: "Chaqueta masculina 687",
        calificacion: 5,
        precio: "COP 150,000"
      },

      {
        nombre: "AXSPEN",
        imagen: "../img/B/b1.png",
        descripcion: "Chaqueta masculina 67",
        calificacion: 5,
        precio: "COP 150,000"
      },
    // Agrega más objetos para cada producto adicional
  ];

  var contenedor = document.getElementById("productos-container");

for (var i = 0; i < productos.length; i++) {
  var producto = productos[i];

  var productoHTML = `
    <div class="pro">
      <img src="${producto.imagen}" alt="">
      <div class="pro-info">
        <span>${producto.nombre}</span>
        <h5>${producto.descripcion}</h5>
        <div class="star">
          ${generarCalificacion(producto.calificacion)}
        </div>
        <h4>${producto.precio}</h4>
        <a href="" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </div>
  `;

  contenedor.innerHTML += productoHTML;
}

  
