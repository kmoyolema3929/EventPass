# EventPass
**Versión 1.0.3**
Universidad Técnica de Ambato | Facultad de Ingeniería en Sistemas, Electrónica e Industrial

Sitio web para **comprar y publicar boletos de conciertos**. Tiene dos roles:
- **Comprador**: explora eventos, elige localidades y paga (simulado).
- **Publicador**: publica conciertos y ve sus ventas en un panel.

## 📌 Objetivo
Aplicar conocimientos sobre Git y plataformas de repositorio remoto mediante la simulación de un entorno real de desarrollo colaborativo, utilizando el modelo **GitFlow**.

## 🚀 Descripción
Este proyecto corresponde al **Primer Parcial de Manejo y Configuración de Software** en la Universidad Técnica de Ambato.
El trabajo consiste en desarrollar un sitio web básico y aplicar buenas prácticas de control de versiones con Git y GitHub.
El pago es simulado y los datos se guardan en el navegador (`localStorage`); no hay base de datos ni servidor.

## 🌐 Secciones del sitio
  - Inicio: carrusel, buscador y cartelera de próximos eventos.
  - Navbar y footer con enlaces según el rol (comprador, publicador o invitado).
  - Detalle del evento: información, precios, imágenes y video.
  - Checkout: zonas, carrito, pago simulado y código QR.
  - Panel del publicador: formulario para publicar y tabla de eventos.
  - Login, registro y perfil.

## 🛠️ Tecnologías
- HTML, CSS, JavaScript y Bootstrap 5.
- Git y GitHub para control de versiones.

## 🔑 Estructura de ramas (GitFlow)
- **main** → versión estable y lista para producción.
- **develop** → rama de integración donde se fusionan las funcionalidades.
- **feature/** → ramas para cada nueva funcionalidad.
- **release/** → ramas para preparar versiones finales.
- **hotfix/** → ramas para corregir errores críticos en producción.

## 📂 Archivos importantes
- `README.md` → descripción del proyecto.
- `.gitignore` → exclusión de archivos innecesarios (Node.js, Python, Java), con su justificación.
- `CONTRIBUTING.md` → reglas de colaboración del grupo.
- `css/`, `js/`, `img/` → estilos, scripts e imágenes del sitio.

## ▶️ Ejecución local
1. Clonar el repositorio.
2. Abrir `index.html` en el navegador (o con Live Server en VS Code).

Requiere conexión a internet: Bootstrap, el video y el código QR se cargan desde servicios externos.

## 🔄 Flujo de trabajo
Todo cambio entra a `develop` mediante Pull Request con revisión de un compañero. Las reglas completas están en [CONTRIBUTING.md](CONTRIBUTING.md).

## 👥 Equipo
- **Katherine Moyolema** (líder): documentación, navbar y footer.
- **Alisson Paredes** (líder): checkout con carrito, pago simulado y código QR.
- **Mateo Herrera**: landing con carrusel, buscador y cartelera de eventos.
- **Julio Zurita**: vista de detalle del evento, con imágenes y video.
- **Alina Ortiz**: panel del publicador (formulario de publicar y tabla de eventos).
- **Anahi Molina**: login, registro con selector de rol y perfil.



