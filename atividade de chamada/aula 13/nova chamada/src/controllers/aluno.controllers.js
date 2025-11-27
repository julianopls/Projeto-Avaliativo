const db = require("../config/db");

const listar = (req, res) => {
  try {
    db.query("SELECT * FROM alunos", (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const adicionar = (req, res) => {
  try {
    const { nome, email, telefone } = req.body;

    db.query(
      "INSERT INTO alunos (nome, email, telefone) VALUES (?, ?, ?)",
      [nome, email, telefone],
      (err) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Aluno cadastrado" });
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { listar, adicionar };
