CREATE DATABASE EscolaIdiomas;
USE EscolaIdiomas;

CREATE TABLE Aluno (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE,
    telefone VARCHAR(15),
    email VARCHAR(100)
);

CREATE TABLE Professor (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    especialidade VARCHAR(100),
    telefone VARCHAR(15),
    email VARCHAR(100)
);

CREATE TABLE Curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    nivel VARCHAR(30),
    carga_horaria INT
);


CREATE TABLE Turma (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    id_curso INT,
    id_professor INT,
    horario VARCHAR(30),
    sala VARCHAR(10),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    FOREIGN KEY (id_professor) REFERENCES Professor(id_professor)
);


CREATE TABLE Matricula (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT,
    id_turma INT,
    data_matricula DATE,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES Turma(id_turma)
);


INSERT INTO Aluno (nome, data_nascimento, telefone, email)
VALUES ('Vitor roque', '2002-03-15', '11999999999', 'roque@email.com'),
       ('Estevao', '2001-10-02', '11988888888', 'estevao@email.com');

INSERT INTO Professor (nome, especialidade, telefone, email)
VALUES ('Neymar', 'Inglês', '11977777777', 'neymar@email.com'),
       ('Cr7', 'Francês', '11966666666', 'cr7@email.com');

INSERT INTO Curso (nome, nivel, carga_horaria)
VALUES ('Inglês Básico', 'Básico', 60),
       ('Francês Avançado', 'Avançado', 80);

INSERT INTO Turma (id_curso, id_professor, horario, sala)
VALUES (1, 1, 'Seg e Qua - 19h', 'A1'),
       (2, 2, 'Ter e Qui - 18h', 'B2');

INSERT INTO Matricula (id_aluno, id_turma, data_matricula)
VALUES (1, 1, '2025-03-01'),
       (2, 2, '2025-03-02');




SELECT A.nome AS Aluno, T.sala, T.horario
FROM Matricula M
JOIN Aluno A ON M.id_aluno = A.id_aluno
JOIN Turma T ON M.id_turma = T.id_turma
WHERE T.id_turma = 1;


SELECT T.id_turma, C.nome AS Curso, T.horario, T.sala
FROM Turma T
JOIN Curso C ON T.id_curso = C.id_curso
WHERE T.id_professor = 1;


SELECT A.nome AS Aluno, C.nome AS Curso
FROM Matricula M
JOIN Aluno A ON M.id_aluno = A.id_aluno
JOIN Turma T ON M.id_turma = T.id_turma
JOIN Curso C ON T.id_curso = C.id_curso
WHERE A.id_aluno = 1;


SELECT C.nome AS Curso, COUNT(M.id_aluno) AS Quantidade_Alunos
FROM Matricula M
JOIN Turma T ON M.id_turma = T.id_turma
JOIN Curso C ON T.id_curso = C.id_curso
GROUP BY C.nome;
