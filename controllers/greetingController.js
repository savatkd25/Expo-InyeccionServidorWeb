// greetingController.js
class GreetingController {
    constructor({ greetingService, fancyGreetingService }) {
      this.greetingService = greetingService;
      this.fancyGreetingService = fancyGreetingService;
    }
  
    greet(req, res) {
      const { name } = req.params;
      res.json({ message: this.greetingService.greet(name) });
    }
  
    fancyGreet(req, res) {
      const { name } = req.params;
      res.json({ message: this.fancyGreetingService.greet(name) });
    }
  }
  
  module.exports = GreetingController;
  