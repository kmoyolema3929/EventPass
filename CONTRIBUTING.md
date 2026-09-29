# Guía de colaboración - EventPass

## Ramas (GitFlow)
- `main`: versión estable. Solo recibe `release/*` y `hotfix/*`.
- `develop`: integración. Aquí entran todas las features.
- `feature/nombre-corto`: una por tarea, creada desde `develop`.
- `release/x.y.z`: preparación de la versión final.
- `hotfix/nombre`: corrección urgente desde `main`.

## Reglas
1. Nadie sube directo a `main` ni a `develop`: todo entra por Pull Request.
2. Cada integrante hace mínimo 2 PRs.
3. Nadie aprueba ni hace merge de su propio PR.
4. Cada PR necesita 1 aprobación de un compañero, con al menos un comentario de revisión.
5. PRs hacia `main` (release y hotfix): aprobación de una de las líderes.
6. Método de merge: solo **Merge** (no Squash ni Rebase).
7. Antes de empezar una tarea: `git pull origin develop` y crear la rama desde ahí.
8. Si `develop` cambió mientras trabajas, actualiza tu rama antes de abrir el PR:
   `git pull origin develop` estando en tu rama, y resuelve conflictos si aparecen.

## Revisión de código
- Al abrir el PR, el autor pide la revisión a un compañero en **Reviewers**.
- El revisor puede ser cualquier integrante distinto del autor. Las líderes también pueden revisar.
- Meta del grupo: cada integrante revisa al menos 2 PRs de sus compañeros, y se procura repartir las revisiones de forma equilibrada.
- Revisar significa: leer **Files changed**, dejar al menos un comentario o sugerencia, y elegir *Approve* o *Request changes*.
- Cuando el PR tiene la aprobación, el merge lo hace el autor o el revisor.

## Commits
Formato: `tipo: descripción corta`. Tipos: `feat`, `fix`, `docs`, `style`, `refactor`.
Ejemplo: `feat(home): agrega carrusel de conciertos`.

## Archivos
Cada integrante usa su propio CSS (`home.css`, `checkout.css`, `dashboard.css`, `auth.css`...) para evitar conflictos. Los estilos comunes van en `styles.css`.