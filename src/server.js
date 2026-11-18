import express from "express";
import { readFileSync } from "node:fs";

const app = express();
const PORT = 3000;

// Leemos el JSON con el módulo fs y guardamos el arreglo en una variable.
const archivoLocalidades = readFileSync(new URL("./data/cities.json", import.meta.url), "utf8");
const datos = JSON.parse(archivoLocalidades);
const localidades = datos.localidades;

function responder(res, status, message, data) {
  return res.status(status).json({ status, message, data });
}

// La raíz documenta para qué sirve la API y cómo usar cada endpoint.
app.get("/", (req, res) => {
  return responder(res, 200, "API de localidades de la Provincia de Buenos Aires", {
    endpoints: [
      {
        method: "GET",
        path: "/localidades",
        description: "Devuelve todas las localidades.",
        parameters: "ninguno",
      },
      {
        method: "GET",
        path: "/localidades/buscar?nombre=La Plata",
        description: "Busca localidades por nombre exacto, sin distinguir mayúsculas.",
        parameters: "query: nombre (obligatorio)",
      },
      {
        method: "GET",
        path: "/localidades/:id",
        description: "Devuelve la localidad cuyo id coincide con el parámetro.",
        parameters: "params: id (obligatorio)",
      },
    ],
  });
});

app.get("/localidades", (req, res) => {
  return responder(res, 200, "Localidades encontradas", localidades);
});

// Debe estar antes de /localidades/:id para que "buscar" no se tome como id.
app.get("/localidades/buscar", (req, res) => {
  const nombre = req.query.nombre;

  if (typeof nombre !== "string" || nombre.trim() === "") {
    return responder(res, 400, "Debe enviar el parámetro query nombre", null);
  }

  const nombreBuscado = nombre.trim().toLocaleLowerCase("es-AR");
  const coincidencias = localidades.filter(
    (localidad) => localidad.nombre.toLocaleLowerCase("es-AR") === nombreBuscado,
  );

  if (coincidencias.length === 0) {
    return responder(res, 404, "Localidad no encontrada", null);
  }

  return responder(res, 200, "Localidades encontradas", coincidencias);
});

app.get("/localidades/:id", (req, res) => {
  const localidad = localidades.find((item) => item.id === req.params.id);

  if (!localidad) {
    return responder(res, 404, "Localidad no encontrada", null);
  }

  return responder(res, 200, "Localidad encontrada", localidad);
});

// Si ninguna ruta anterior coincide, respondemos también en JSON.
app.use((req, res) => {
  return responder(res, 404, "Ruta no encontrada", null);
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
