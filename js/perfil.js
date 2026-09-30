// Perfil SIMULADO: lee la sesión creada por auth.js y guarda los cambios en localStorage.
(function () {
  const SESION = 'eventpass_sesion';
  const USUARIOS = 'eventpass_usuarios';
  const PERFILES = 'eventpass_perfiles';

  const leer = (clave, defecto) => {
    try { return JSON.parse(localStorage.getItem(clave)) ?? defecto; }
    catch (e) { return defecto; }
  };
  const guardar = (clave, valor) => {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* sin almacenamiento */ }
  };
  const $ = (id) => document.getElementById(id);

  const sesion = leer(SESION, null);
  if (!sesion) {
    $('sin-sesion').classList.remove('d-none');
    return;
  }

  $('contenido').classList.remove('d-none');
  $('btn-salir').classList.remove('d-none');

  const usuario = leer(USUARIOS, []).find((u) => u.correo === sesion.correo) || {};
  const perfiles = leer(PERFILES, {});
  const extra = perfiles[sesion.correo] || {};
  const esPublicador = sesion.rol === 'publicador';

  // Cabecera
  const iniciales = sesion.nombre.split(' ').filter(Boolean).slice(0, 2)
    .map((p) => p[0].toUpperCase()).join('');
  $('avatar').textContent = iniciales;
  $('nombre').textContent = sesion.nombre;
  $('correo').textContent = sesion.correo;
  $('rol').textContent = esPublicador ? 'Organizador de eventos' : 'Comprador';

  // Vista según el rol
  const vista = $(esPublicador ? 'vista-publicador' : 'vista-comprador');
  vista.classList.remove('d-none');

  if (esPublicador) {
    $('productora').value = extra.productora ?? usuario.productora ?? '';
    $('telefono').value = extra.telefono ?? '';
    $('descripcion').value = extra.descripcion ?? '';
  } else {
    $('ciudad').value = extra.ciudad ?? '';
    const generos = extra.generos ?? [];
    document.querySelectorAll('input[name="genero"]').forEach((c) => {
      c.checked = generos.includes(c.value);
    });
  }

  function avisar() {
    const aviso = $('aviso');
    aviso.classList.remove('d-none');
    setTimeout(() => aviso.classList.add('d-none'), 3000);
  }

  vista.addEventListener('submit', (e) => {
    e.preventDefault();
    if (esPublicador) {
      perfiles[sesion.correo] = {
        productora: $('productora').value.trim(),
        telefono: $('telefono').value.trim(),
        descripcion: $('descripcion').value.trim()
      };
    } else {
      perfiles[sesion.correo] = {
        ciudad: $('ciudad').value.trim(),
        generos: [...document.querySelectorAll('input[name="genero"]:checked')].map((c) => c.value)
      };
    }
    guardar(PERFILES, perfiles);
    avisar();
  });

  $('btn-salir').addEventListener('click', () => {
    try { localStorage.removeItem(SESION); } catch (e) { /* nada */ }
    window.location.href = 'login.html';
  });
})();