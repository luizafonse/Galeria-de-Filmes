import express from "express";
import multer from "multer";
const app = express();
import connection from "./config/sequelize-config.js";
import Filme from "./models/Filme.js";
import FilmesController from "./controllers/FilmesController.js";
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
const upload = multer({ dest: "public/uploads/" });

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

  connection
  .query(`CREATE DATABASE IF NOT EXISTS galeria;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });
  app.use("/", FilmesController);
  const port = 8080;
  app.listen(port, (error) => {
    if (error) {
      console.log(`Ocorreu um erro! ${error}`);
    } else {
      console.log(`Servidor iniciado com sucesso em: http://localhost:${port}.`);
    }
  });