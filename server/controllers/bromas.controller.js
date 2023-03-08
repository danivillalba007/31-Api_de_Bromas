const Bromas = require("../models/bromas.model");

module.exports.mostrarChistes = (req, res) => {
  console.log(req.body + "esto es req");
  console.log(res + "esto es res");
  Bromas.find()
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.nuevoChiste = (req, res) => {
  Bromas.create(req.body)
    .then((chiste) => res.json(chiste))
    .catch((error) => res.json(error));
};

module.exports.borrarChiste = (req, res) => {
  Bromas.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.seleccionarChiste = (req, res) => {
  Bromas.User.findOne({ _id: req.params.id })({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.editarChiste = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) => res.json({ user: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
