const express = require("express");
const router = express.Router();
const matriculaController = require("../controllers/matricula.controllers");

router.get("/matricula", matriculaController.listarMatriculas);
router.put("/matriculas:id", matriculaController.adicionarMatricula);


module.exports = router;
