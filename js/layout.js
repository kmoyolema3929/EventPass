(function () {
var rol = null;
try {
  var sesion = JSON.parse(localStorage.getItem('eventpass_sesion'));
  rol = sesion ? sesion.rol : null;
} catch (e) {}

  var enlaces = {
    comprador: [
      ['Inicio', 'index.html'],
      ['Eventos', 'index.html#proximos-eventos'],
      ['Mi carrito', 'checkout.html'],
      ['Mi perfil', 'perfil.html']
    ],
    publicador: [
      ['Inicio', 'index.html'],
      ['Publicar concierto', 'publicar-concierto.html'],
      ['Mi panel', 'dashboard.html'],
      ['Mi perfil', 'perfil.html']
    ],
    invitado: [
      ['Inicio', 'index.html'],
      ['Eventos', 'index.html#proximos-eventos'],
      ['Iniciar sesión', 'login.html'],
      ['Registrarse', 'registro.html']
    ]
  };

  var lista = enlaces[rol] || enlaces.invitado;
  var items = lista.map(function (e) {
    return '<li><a href="' + e[1] + '">' + e[0] + '</a></li>';
  }).join('');
  if (enlaces[rol]) {
    items += '<li><a href="index.html" id="ep-salir">Cerrar sesión</a></li>';
  }

  var nav = document.getElementById('navbar');
  if (nav) {
    nav.innerHTML =
      '<nav class="ep-nav">' +
        '<a class="ep-brand" href="index.html">EventPass</a>' +
        '<button class="ep-toggle" id="ep-toggle" aria-label="Menú">☰</button>' +
        '<ul class="ep-links" id="ep-links">' + items + '</ul>' +
      '</nav>';

    document.getElementById('ep-toggle').addEventListener('click', function () {
      document.getElementById('ep-links').classList.toggle('abierto');
    });

    var salir = document.getElementById('ep-salir');
    if (salir) {
      salir.addEventListener('click', function () {
        try { localStorage.removeItem('eventpass_sesion'); } catch (e) {}
      });
    }
  }

  var foot = document.getElementById('footer');
  if (foot) {
    foot.innerHTML =
      '<footer class="ep-footer">' +
        '<p>© 2026 EventPass · Compra y publica boletos de conciertos</p>' +
        '<p><a href="index.html">Inicio</a><a href="index.html#proximos-eventos">Eventos</a><a href="login.html">Ingresar</a></p>' +
      '</footer>';
  }
})();