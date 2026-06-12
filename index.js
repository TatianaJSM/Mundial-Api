import express from "express";

import { getAll } from "./routes/mundiales/getAll.js";
import { getBySlug } from "./routes/mundiales/getBySlug.js";
import { getByChampion } from "./routes/mundiales/getByChampion.js";
import { random } from "./routes/mundiales/random.js";
import { search } from "./routes/mundiales/search.js";

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.use("/imagenes", express.static("public/imagenes"));

app.get("/", (req, res) => {
  res.status(200).json({
    nombre: "API Mundial FIFA",
    version: "1.0",
    descripcion: "API REST sobre distintas ediciones de la Copa Mundial de la FIFA.",
    rutas: [
      "/mundiales",
      "/mundial/:slug",
      "/campeon/:pais",
      "/random",
      "/search/:text",
      "/imagenes/:archivo"
    ]
  });
});

app.get("/mundiales", getAll);
app.get("/mundial/:slug", getBySlug);
app.get("/campeon/:pais", getByChampion);
app.get("/random", random);
app.get("/search/:text", search);

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada"
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor en http://${HOST}:${PORT}/`);
});