const express = require("express");
const router = express.Router();
const controller = require("../controllers/professor.controllers");

router.get("/professores", controller.listar);
router.post("/professores", controller.adicionar);

module.exports = router;
