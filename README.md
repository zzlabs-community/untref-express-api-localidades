# TP Express — API REST de localidades

API para consultar localidades de la Provincia de Buenos Aires usando Express y el archivo `cities.json` de la cursada.

## Cómo ejecutarla

Se necesita Node.js 18 o superior. Desde esta carpeta, abrir una terminal y ejecutar:

```bash
npm install
npm start
```

El servidor queda disponible en `http://localhost:3000`. Para detenerlo, usar `Control + C` en la terminal.

## Cómo probarla

Se pueden abrir las direcciones de abajo en el navegador o usar las consultas del archivo `api.http` con la extensión REST Client de VS Code.

- `GET /` — explica cómo usar la API.
- `GET /localidades` — devuelve las 944 localidades del archivo.
- `GET /localidades/0602801008` — busca una localidad por ID.
- `GET /localidades/buscar?nombre=Malvinas%20Argentinas` — busca por nombre.
- `GET /localidades/no-existe` — devuelve 404 si el ID no existe.
- `GET /localidades/buscar` — devuelve 400 si falta el parámetro `nombre`.

Las respuestas usan JSON con `status`, `message` y `data`. La búsqueda por nombre no distingue mayúsculas y devuelve las coincidencias encontradas.

El archivo `cities.json` está dentro de `src/data`. No hace falta enviar `node_modules`: se genera al ejecutar `npm install`.
