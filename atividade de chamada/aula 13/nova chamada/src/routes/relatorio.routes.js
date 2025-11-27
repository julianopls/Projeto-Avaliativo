const express = require("express");
const router = express.Router();
const controller = require("../controllers/relatorio.controllers");

router.get("/relatorio/turma/:id_turma", controller.alunosDaTurma);
router.get("/relatorio/professor/:professor_id", controller.turmasDoProfessor);
router.get("/relatorio/aluno/:aluno_id", controller.cursosDoAluno);
router.get("/relatorio/cursos/alunos", controller.quantidadeAlunosPorCurso);

module.exports = router;
