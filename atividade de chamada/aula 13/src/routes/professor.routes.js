const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professor.controllers");

router.get("/professor", professorController.listarProfessores);
router.put("/professors:id", professorController.adicionarProfessor);


module.exports = router;

