const pool = require("../config/db");

const listarProfessores = (req, res) => {
  db.query("SELECT * FROM professores", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const adicionarProfessor = (req, res) => {
  const { nome, especialidade } = req.body;
  db.query(
    "INSERT INTO professores (nome, especialidade) VALUES (?, ?)",
    [nome, especialidade],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Professor cadastrado com sucesso!" });
    }
  );
};

module.exports = { 
    listarProfessores, 
    adicionarProfessor };
