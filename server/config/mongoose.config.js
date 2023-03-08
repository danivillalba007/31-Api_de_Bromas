//con esto tengo mongoose disponible
const mongoose = require("mongoose");

//método para conectarme

mongoose
  .connect("mongodb://127.0.0.1:27017/apibromas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Se estableció la conección a la base de datos"))
  .catch((err) =>
    console.log("Algo salió mal al conectarse a la base de datos", err)
  );
