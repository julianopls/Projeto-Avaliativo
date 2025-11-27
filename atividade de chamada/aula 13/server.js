require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunoRoutes = require("./src/routes/aluno.routes");
const professorRoutes = require("./src/routes/professor.routes");
const cursoRoutes = require("./src/routes/curso.routes");
const turmaRoutes = require("./src/routes/turma.routes");
const matriculaRoutes = require("./src/routes/matricula.routes");

app.use(express.json());
app.use(cors());

app.use(alunoRoutes);
app.use(professorRoutes);
app.use(cursoRoutes);
app.use(turmaRoutes);
app.use(matriculaRoutes);


app.listen(port, () => {
    console.log('Servidor online na ' + port);
})