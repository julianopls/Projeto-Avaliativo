const db = require("../config/db");

const alunosDaTurma = (req, res) => {
  try {
    const { turma_id } = req.params;

    db.query(
      `SELECT a.id, a.nome, a.email 
       FROM matriculas m
       JOIN alunos a ON a.id = m.aluno_id
       WHERE m.turma_id = ?`,
      [turma_id],
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

const turmasDoProfessor = (req, res) => {
  try {
    const { professor_id } = req.params;

    db.query(
      `SELECT t.id, c.nome AS curso, t.horario, t.sala
       FROM turmas t
       JOIN cursos c ON c.id = t.curso_id
       WHERE t.professor_id = ?`,
      [professor_id],
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

const cursosDoAluno = (req, res) => {
  try {
    const { aluno_id } = req.params;

    db.query(
      `SELECT c.nome AS curso, c.nivel, t.horario, t.sala
       FROM matriculas m
       JOIN turmas t ON t.id = m.turma_id
       JOIN cursos c ON c.id = t.curso_id
       WHERE m.aluno_id = ?`,
      [aluno_id],
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

const quantidadeAlunosPorCurso = (req, res) => {
  try {
    db.query(
      `SELECT c.nome AS curso, COUNT(m.aluno_id) AS total_alunos
       FROM cursos c
       LEFT JOIN turmas t ON t.curso_id = c.id
       LEFT JOIN matriculas m ON m.turma_id = t.id
       GROUP BY c.id, c.nome`,
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  alunosDaTurma,
  turmasDoProfessor,
  cursosDoAluno,
  quantidadeAlunosPorCurso
};
