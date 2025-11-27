const db = require("../config/db");

const listar = (req, res) => {
  try {
    db.query("SELECT * FROM matriculas", (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const adicionar = (req, res) => {
  try {
    const { id_aluno, id_turma, data_matricula } = req.body;

    db.query(
      "INSERT INTO matriculas (id_aluno, id_turma, data_matricula) VALUES (?, ?, ?)",
      [id_aluno, id_turma, data_matricula],
      (err) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Matrícula realizada" });
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { listar, adicionar };
