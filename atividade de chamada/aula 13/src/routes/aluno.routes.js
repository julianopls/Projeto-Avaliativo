const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/aluno.controllers");

router.get("/aluno", alunoController.listarAlunos);
router.put("/alunos:id", alunoController.adicionarAluno);
router.delete("/alunosx:id", alunoController.excluirAluno);

module.exports = router;

