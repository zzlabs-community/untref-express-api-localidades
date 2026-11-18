# TP: Creación de API REST con Express JS

Resumen de la consigna compartida por el estudiante:

- Crear un servidor Express.
- Servir la documentación de la API en `/`.
- Cargar `cities.json` en un arreglo con el módulo `fs`.
- `GET /localidades`: devolver todas las localidades.
- `GET /localidades/:id`: buscar por parámetro de ruta.
- `GET /localidades/buscar?nombre=...`: buscar por parámetro query.
- Responder siempre en JSON con `{ status, message, data }` y usar códigos HTTP acordes; devolver 404 si el recurso no existe.

El archivo de datos proviene de `04-practica/cities.json` en el repositorio de clase enlazado en el README.
