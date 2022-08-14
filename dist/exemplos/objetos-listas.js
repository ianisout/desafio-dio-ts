"use strict";
var pessoa = {
    nome: 'João',
    idade: 30,
    prof: 'pintor',
};
pessoa.idade = 31;
var ian = {
    nome: 'Ian',
    idade: 30,
    prof: 'desenvolvedor',
};
var julia = {
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
var isis = {
    nome: 'Isis',
    idade: 50,
    prof: Profissao.Streamer,
};
var jessica = {
    nome: 'Jessica',
    idade: 21,
    prof: Profissao.Atriz,
    materias: ['Matemática', 'Português', 'Inglês'],
};
var monica = {
    nome: 'Mônica',
    idade: 21,
    materias: ['Matemática', 'Português', 'Inglês'],
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(monica.materias);
