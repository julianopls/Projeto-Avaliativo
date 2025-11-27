const db = require("../config/db");

const listar = (req, res) => {
  try {
    db.query(
      `SELECT t.id, c.nome AS curso, p.nome AS professor, t.horario, t.sala
       FROM turmas t
       JOIN cursos c ON c.id = t.id_curso
       JOIN professores p ON p.id = t.id_professor`,
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

const adicionar = (req, res) => {
  try {
    const { curso, professor, horario, sala } = req.body;

    db.query(
      "SELECT id FROM cursos WHERE nome = ?",
      [curso],
      (erro1, resCurso) => {
        if (erro1) return res.status(500).json({ error: erro1 });

        if (resCurso.length === 0) {
          try {
            db.query(
              "INSERT INTO cursos (nome) VALUES (?)",
              [curso],
              (erro2, novoCurso) => {
                if (erro2) return res.status(500).json({ error: erro2 });

                criarProfessor(novoCurso.insertId);
              }
            );
          } catch (error) {
            return res.status(500).json({ error });
          }
        } else {
          criarProfessor(resCurso[0].id);
        }
      }
    );

    function criarProfessor(idCurso) {
      try {
        db.query(
          "SELECT id FROM professores WHERE nome = ?",
          [professor],
          (erro3, resProf) => {
            if (erro3) return res.status(500).json({ error: erro3 });

            if (resProf.length === 0) {
              try {
                db.query(
                  "INSERT INTO professores (nome) VALUES (?)",
                  [professor],
                  (erro4, novoProf) => {
                    if (erro4) return res.status(500).json({ error: erro4 });

                    criarTurma(idCurso, novoProf.insertId);
                  }
                );
              } catch (error) {
                return res.status(500).json({ error });
              }
            } else {
              criarTurma(idCurso, resProf[0].id);
            }
          }
        );
      } catch (error) {
        res.status(500).json({ error });
      }
    }

    function criarTurma(idCurso, idProfessor) {
      try {
        db.query(
          "INSERT INTO turmas (id_curso, id_professor, horario, sala) VALUES (?, ?, ?, ?)",
          [idCurso, idProfessor, horario, sala],
          (erro5) => {
            if (erro5) return res.status(500).json({ error: erro5 });

            res.json({ message: "Turma criada com sucesso!" });
          }
        );
      } catch (error) {
        res.status(500).json({ error });
      }
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { listar, adicionar };
