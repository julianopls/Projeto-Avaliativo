const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/curso.controllers");

router.get("/curso", cursoController.listar);
router.post("/cursos", cursoController.adicionar);

module.exports = router;

