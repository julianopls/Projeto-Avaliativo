const db = require("../config/db");

const listar = (req, res) => {
  try {
    db.query("SELECT * FROM professores", (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const adicionar = (req, res) => {
  try {
    const { nome, email, especialidade } = req.body;

    db.query(
      "INSERT INTO professores (nome, email, especialidade) VALUES (?, ?, ?)",
      [nome, email, especialidade],
      (err) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Professor cadastrado" });
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { listar, adicionar };
