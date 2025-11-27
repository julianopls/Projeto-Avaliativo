const pool = require("../config/db");

const listarTurmas = (req, res) => {
  db.query("SELECT * FROM turmas", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const adicionarTurma = (req, res) => {
  const { id_curso, id_professor, horario } = req.body;
  db.query(
    "INSERT INTO turmas (id_curso, id_professor, horario) VALUES (?, ?, ?)",
    [id_curso, id_professor, horario],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Turma criada com sucesso!" });
    }
  );
};

module.exports = { 
    listarTurmas, 
    adicionarTurma };
