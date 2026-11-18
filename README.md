# TP Express — API REST de localidades

API de consulta de localidades de la Provincia de Buenos Aires, basada en el archivo `cities.json` de `04-practica` del repositorio de clase.

## Requisitos

- Node.js 18 o superior.
- Conexión a internet para instalar Express.

## Instalación y ejecución

Desde esta carpeta:

```bash
npm install
npm start
```

El servidor escucha en `http://localhost:3000`.

## Endpoints

- `GET /` — documentación breve de la API y de sus endpoints.
- `GET /localidades` — devuelve el arreglo completo.
- `GET /localidades/:id` — busca por ID. Ejemplo: `/localidades/0602801008`.
- `GET /localidades/buscar?nombre=La%20Plata` — busca por nombre exacto, sin distinguir mayúsculas. La propiedad `data` devuelve un arreglo porque el conjunto de datos puede contener más de una coincidencia.

Todas las respuestas tienen las propiedades `status`, `message` y `data`; los estados HTTP distinguen los resultados correctos, los parámetros faltantes y los recursos inexistentes.

## Notas de implementación

- El archivo se carga con `readFileSync` desde `node:fs` y luego se convierte con `JSON.parse`.
- Las respuestas se generan con `res.status(...).json(...)`.
- La ruta `/localidades/buscar` se declara antes de `/localidades/:id` para evitar que `buscar` se interprete como un ID.

Fuente de datos de la cursada: [GUAMINI-BE-UNTREF](https://github.com/marcelobettini/GUAMINI-BE-UNTREF), carpeta `04-practica`.
