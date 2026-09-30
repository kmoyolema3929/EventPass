# Guía de colaboración - EventPass

Universidad Técnica de Ambato | Facultad de Ingeniería en Sistemas, Electrónica e Industrial

## Lo más importante (léelo primero)
1. Nadie sube directo a `main` ni a `develop`: todo entra por Pull Request.
2. Trabaja en tu rama `feature/*`, creada desde `develop` (`git pull origin develop` antes de crearla).
3. Nadie aprueba ni hace merge de su propio PR.
4. Cada integrante hace mínimo 2 PRs y revisa PRs de sus compañeros.
5. Cada integrante usa sus propios archivos CSS y JS. No se edita el archivo de otro integrante sin avisarle.
6. No se borran las ramas después del merge (no pulsar "Delete branch"), para conservar el grafo de ramas como evidencia.

## Ramas (GitFlow)
- `main`: versión estable. Solo recibe `release/*` y `hotfix/*`, con aprobación de una líder.
- `develop`: integración. Aquí entran todas las features.
- `feature/nombre-corto`: una por tarea, creada desde `develop`.
- `release/x.y.z`: preparación de la versión final, creada desde `develop`.
- `hotfix/nombre`: corrección urgente, creada desde `main`. Después se lleva también a `develop`.

## Reglas de los Pull Requests
1. El PR de una feature apunta siempre a `develop`. Solo `release/*` y `hotfix/*` apuntan a `main`.
2. Cada PR necesita 1 aprobación de un compañero distinto del autor.
3. Los PRs hacia `main` los aprueba una de las líderes.
4. Método de merge: solo **Merge** (no Squash ni Rebase).
5. Si `develop` cambió mientras trabajas, actualiza tu rama antes de abrir el PR: `git pull origin develop` estando en tu rama, y resuelve los conflictos si aparecen.

## Revisión de código
- Al abrir el PR, el autor pide la revisión a un compañero en **Reviewers**. El revisor es cualquier integrante distinto del autor; las líderes también pueden revisar.
- Cada revisión incluye al menos 2 comentarios en líneas de código (**Files changed**), no solo un comentario general.
- Flujo: el revisor comenta y aprueba; el autor responde a los comentarios (y corrige lo importante); después el autor hace el merge.
- Las sugerencias menores se pueden corregir en un PR posterior, avisando en el PR original.
- Meta: cada integrante revisa al menos 2 PRs de sus compañeros.

### Qué verifica el revisor
- Que el PR apunte a `develop` (nunca a `main`, salvo release y hotfix).
- Que el PR solo incluya cambios de su tarea.
- Etiquetas HTML semánticas y atributo `alt` en las imágenes.
- Que no haya errores en la consola del navegador ni desbordamientos en pantallas pequeñas.

## Commits y títulos de PR
Formato: `tipo(ámbito): descripción corta`, en minúsculas, con verbo en presente y sin punto final.
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`.
- Ámbitos: `home`, `layout`, `checkout`, `auth`, `publicar`, `dashboard`, `perfil`, `detalle`.
- Ejemplo: `feat(home): agrega carrusel de conciertos`.

El título del PR sigue el mismo formato.

## Reparto de tareas
| Integrante | Componente |
|---|---|
| Katherine Moyolema (líder) | Documentación, navbar y footer |
| Alisson Paredes (líder) | Checkout: carrito, pago simulado y código QR |
| Mateo Herrera | Landing: carrusel, buscador y cartelera de eventos |
| Julio Zurita | Detalle del evento: información, precios, imágenes y video |
| Alina Ortiz | Panel del publicador: formulario de publicar y tabla de eventos |
| Anahi Molina | Login, registro con selector de rol y perfil |

## Estructura de carpetas
- `css/`: estilos. `styles.css` y `layout.css` son comunes; cada integrante tiene el suyo.
- `js/`: scripts. `layout.js` es común; cada integrante tiene el suyo.
- `img/`: imágenes del sitio.
- Páginas HTML en la raíz del proyecto.