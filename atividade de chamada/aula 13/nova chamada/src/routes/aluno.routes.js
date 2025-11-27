const express = require("express");
const router = express.Router();
const controller = require("../controllers/aluno.controllers");

router.get("/alunos", controller.listar);
router.post("/alunos", controller.adicionar);

module.exports = router;
