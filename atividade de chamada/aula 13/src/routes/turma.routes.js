const express = require("express");
const router = express.Router();
const turmaController = require("../controllers/turma.controllers");

router.get("/turma", turmaController.listarTurmas);
router.put("/turmas:id", turmaController.adicionarTurma);


module.exports = router;
