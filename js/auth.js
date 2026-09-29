// Login y registro SIMULADOS: no hay servidor, los datos se guardan en localStorage.
// (En un sistema real la contraseña nunca se guarda así.)
(function () {
  const USUARIOS = 'eventpass_usuarios';
  const SESION = 'eventpass_sesion';

  const leer = (clave, defecto) => {
    try { return JSON.parse(localStorage.getItem(clave)) ?? defecto; }
    catch (e) { return defecto; }
  };
  const guardar = (clave, valor) => {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* sin almacenamiento */ }
  };

  const correoValido = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const valor = (id) => document.getElementById(id).value.trim();

  function mostrarError(mensaje) {
    const alerta = document.getElementById('alerta');
    alerta.textContent = mensaje;
    alerta.classList.remove('d-none');
  }

  function iniciarSesion(usuario) {
    guardar(SESION, { correo: usuario.correo, nombre: usuario.nombre, rol: usuario.rol });
    window.location.href = 'index.html';
  }

  /* ---------- Registro ---------- */
  const formRegistro = document.getElementById('form-registro');
  if (formRegistro) {
    const campoProductora = document.getElementById('campo-productora');

    formRegistro.querySelectorAll('input[name="rol"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        campoProductora.classList.toggle('d-none', radio.value !== 'publicador');
      });
    });

    formRegistro.addEventListener('submit', (e) => {
      e.preventDefault();
      const rolElegido = formRegistro.querySelector('input[name="rol"]:checked');
      const nombre = valor('nombre');
      const correo = valor('correo').toLowerCase();
      const clave = document.getElementById('clave').value;
      const clave2 = document.getElementById('clave2').value;
      const productora = valor('productora');

      if (!rolElegido) return mostrarError('Elige si quieres comprar entradas o publicar eventos.');
      if (nombre.length < 3) return mostrarError('Escribe tu nombre completo (mínimo 3 letras).');
      if (rolElegido.value === 'publicador' && !productora) return mostrarError('Escribe el nombre de tu productora.');
      if (!correoValido(correo)) return mostrarError('Escribe un correo válido, por ejemplo nombre@correo.com.');
      if (clave.length < 6) return mostrarError('La contraseña debe tener al menos 6 caracteres.');
      if (clave !== clave2) return mostrarError('Las contraseñas no coinciden.');

      const usuarios = leer(USUARIOS, []);
      if (usuarios.some((u) => u.correo === correo)) {
        return mostrarError('Ya existe una cuenta con ese correo. Inicia sesión.');
      }

      const nuevo = { nombre, correo, clave, rol: rolElegido.value, productora };
      usuarios.push(nuevo);
      guardar(USUARIOS, usuarios);
      iniciarSesion(nuevo);
    });
  }

  /* ---------- Login ---------- */
  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const correo = valor('correo').toLowerCase();
      const clave = document.getElementById('clave').value;

      if (!correoValido(correo)) return mostrarError('Escribe un correo válido.');
      if (!clave) return mostrarError('Escribe tu contraseña.');

      const usuario = leer(USUARIOS, []).find((u) => u.correo === correo && u.clave === clave);
      if (!usuario) return mostrarError('Correo o contraseña incorrectos. Si no tienes cuenta, regístrate primero.');
      iniciarSesion(usuario);
    });
  }
})();