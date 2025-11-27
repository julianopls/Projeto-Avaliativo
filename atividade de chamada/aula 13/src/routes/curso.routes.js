const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/curso.controllers");

router.get("/curso", cursoController.listarCursos);
router.put("/cursos:id", cursoController.adicionarCurso);

module.exports = router;
