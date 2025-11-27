const pool = require("../config/db");

const listarMatriculas = (req, res) => {
  db.query("SELECT * FROM matriculas", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const adicionarMatricula = (req, res) => {
  const { id_aluno, id_turma } = req.body;
  db.query(
    "INSERT INTO matriculas (id_aluno, id_turma) VALUES (?, ?)",
    [id_aluno, id_turma],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Matrícula realizada com sucesso!" });
    }
  );
};

module.exports = { 
    listarMatriculas, 
    adicionarMatricula };
