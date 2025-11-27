const express = require("express");
const router = express.Router();
const controller = require("../controllers/turma.controllers");

router.get("/turmas", controller.listar);
router.post("/turmas", controller.adicionar);

module.exports = router;
