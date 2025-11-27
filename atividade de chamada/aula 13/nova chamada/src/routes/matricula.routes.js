const express = require("express");
const router = express.Router();
const controller = require("../controllers/matricula.controllers");

router.get("/matriculas", controller.listar);
router.post("/matriculas", controller.adicionar);

module.exports = router;
