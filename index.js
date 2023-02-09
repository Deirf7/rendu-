const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/taskDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connexion à la base de données établie !"))
  .catch(err => console.log("Error: " + err));

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log("Serveur en écoute sur le port " + port);
});
