const pool = require("../config/db");

const listarCursos = (req, res) => {
  db.query("SELECT * FROM cursos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const adicionarCurso = (req, res) => {
  const { nome, nivel, carga_horaria } = req.body;
  db.query(
    "INSERT INTO cursos (nome, nivel, carga_horaria) VALUES (?, ?, ?)",
    [nome, nivel, carga_horaria],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Curso adicionado com sucesso!" });
    }
  );
};

module.exports = { 
    listarCursos, 
    adicionarCurso };
