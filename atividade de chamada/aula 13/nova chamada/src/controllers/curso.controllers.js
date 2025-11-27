const db = require("../config/db");

const listar = (req, res) => {
  try {
    db.query("SELECT * FROM cursos", (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const adicionar = (req, res) => {
  try {
    const { nome, nivel, ch } = req.body;

    db.query(
      "INSERT INTO cursos (nome, nivel, ch) VALUES (?, ?, ?)",
      [nome, nivel, ch],
      (err) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Curso cadastrado" });
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { listar, adicionar };
