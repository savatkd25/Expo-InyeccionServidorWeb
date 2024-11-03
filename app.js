// app.js
const express = require("express");
const container = require("./container");
const GreetingController = require("./controllers/greetingController");

const app = express();

// Crear una instancia del controlador
const greetingController = container.resolve("greetingController");

// Rutas
app.get("/greet/:name", (req, res) => greetingController.greet(req, res));
app.get("/fancy-greet/:name", (req, res) => greetingController.fancyGreet(req, res));

module.exports = app;
