# Convención del equipo

## Ramas
- `main`: solo código estable (entregas). Se actualiza por PR desde `develop`.
- `develop`: integración. Se actualiza por PR desde las ramas de feature.
- `feature/devN-descripcion` (ej. `feature/dev2-modelo-cliente`)

## Commits (Conventional Commits)
`tipo(alcance): descripción en minúscula, en presente`

Tipos: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `style`

Ejemplos:
- `feat(cliente): agrega modelo con documento unico`
- `chore(server): configura eslint y prettier`

## Reglas
- Un commit = un cambio lógico. Nada de "cambios varios".
- Siempre PR hacia `develop`, con al menos 1 revisión.
- Antes de empezar: `git pull origin develop`.
- Nunca subir `.env`; usar `server/.env.example` como plantilla.

## Arranque del servidor
```
cd server
copy .env.example .env   (y completar con los datos reales)
npm install
npm run dev
```
