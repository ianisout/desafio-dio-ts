"use strict";
const pessoa = {
    nome: 'João',
    idade: 30,
    prof: 'pintor',
};
pessoa.idade = 31;
const ian = {
    nome: 'Ian',
    idade: 30,
    prof: 'desenvolvedor',
};
const julia = {
    nome: 'Julia',
    idade: 30,
    prof: 'desenvolvedor',
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Streamer"] = 3] = "Streamer";
})(Profissao || (Profissao = {}));
const isis = {
    nome: 'Isis',
    idade: 50,
    prof: Profissao.Streamer,
};
const jessica = {
    nome: 'Jessica',
    idade: 21,
    prof: Profissao.Atriz,
    materias: ['Matemática', 'Português', 'Inglês'],
};
const monica = {
    nome: 'Mônica',
    idade: 21,
    materias: ['Matemática', 'Português', 'Inglês'],
};
function listar(lista) {
    for (const item of lista)
        console.log('- ', item);
}
listar(monica.materias);
