import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    nombre: "API Mundiales FIFA"
  });
});

app.listen(4321);