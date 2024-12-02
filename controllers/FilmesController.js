import multer from "multer";
const upload = multer({ dest: "public/uploads/" });

import express from "express";
const router = express.Router();
import Filme from "../models/Filme.js";
// ROTA PRINCIPAL
router.get("/cadastros", (req, res) => {
  res.render("cadastros");
});

router.get("/", (req, res) => {
 Filme.findAll().then((filmes) => {
    res.render("index", {
      filmes: filmes,
    });
  });
});

// ROTA DE UPLOAD
router.post("/uploads", upload.single("file"), (req, res) => {
  const titulo = req.body.titulo;
  const ano = req.body.ano;
    const file = req.file.filename;
  Filme.create({
    titulo: titulo,
    ano: ano,
    file: file,
  });
  res.redirect("/cadastros");
});


export default router;