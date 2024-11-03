// container.js
const awilix = require("awilix");
const GreetingService = require("./services/greetingService");
const FancyGreetingService = require("./services/fancyGreetingService");

const container = awilix.createContainer();

// Registro de servicios
container.register({
  greetingService: awilix.asClass(GreetingService).singleton(),
  fancyGreetingService: awilix.asClass(FancyGreetingService).singleton()
});

module.exports = container;
