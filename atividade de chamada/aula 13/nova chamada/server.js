const express = require("express");
const app = express();

const alunoRoutes = require("./src/routes/aluno.routes");
const professorRoutes = require("./src/routes/professor.routes");
const cursoRoutes = require("./src/routes/curso.routes");
const turmaRoutes = require("./src/routes/turma.routes");
const matriculaRoutes = require("./src/routes/matricula.routes");
const relatorioRoutes = require("./src/routes/relatorio.routes");

app.use(express.json());

app.use(alunoRoutes);
app.use(professorRoutes);
app.use(cursoRoutes);
app.use(turmaRoutes);
app.use(matriculaRoutes);
app.use(relatorioRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
