# TP de Express: localidades

Este trabajo es una API para consultar localidades de la Provincia de Buenos Aires. La información se lee del archivo `cities.json`.

## Cómo probarlo

Desde esta carpeta, abrir una terminal y ejecutar:

```bash
npm install
npm start
```

Después se puede entrar a `http://localhost:3000/` para ver las rutas disponibles. El archivo `api.http` también tiene ejemplos para probarlas desde VS Code con REST Client.

## Rutas

- `GET /` muestra cómo usar la API.
- `GET /localidades` devuelve todas las localidades.
- `GET /localidades/:id` busca una localidad por su ID.
- `GET /localidades/buscar?nombre=La%20Plata` busca por nombre.

Las respuestas son JSON. Si no encuentra una localidad, responde 404. Si falta el nombre en la búsqueda, responde 400.

Para detener el servidor, usar `Control + C` en la terminal.
