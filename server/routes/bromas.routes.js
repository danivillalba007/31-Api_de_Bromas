const BromasController = require("../controllers/bromas.controller");

module.exports = (app) => {
  app.get("/api/bromas", BromasController.mostrarChistes);
  app.get("/api/seleccionarChiste/:id", BromasController.seleccionarChiste);
  app.post("/api/nuevo", BromasController.nuevoChiste);
  app.put("/api/update/:id", UserController.editarChiste);
  app.delete("/api/borrar/:id", BromasController.borrarChiste);
};
