const pool = require("../config/db");

const listarAlunos = (req, res) => {
  db.query("SELECT * FROM alunos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const adicionarAluno = (req, res) => {
  const { nome, email, telefone } = req.body;
  db.query(
    "INSERT INTO alunos (nome, email, telefone) VALUES (?, ?, ?)",
    [nome, email, telefone],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "Aluno cadastrado com sucesso!" });
    }
  );
};

const excluirAluno = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM alunos WHERE id = ?", [id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Aluno excluído com sucesso!" });
  });
};

module.exports = { 
    listarAlunos, 
    adicionarAluno, 
    excluirAluno };
