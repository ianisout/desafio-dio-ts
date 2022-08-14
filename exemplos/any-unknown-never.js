"use strict";
let anyEstaDeVolta; // pode ser qualquer tipo
let unknownValue; // obrigado a validar valor antes de alocar dentro de um unknown
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'not true anymore?';
let stringTest = 'agora vai';
// ABAIXO não funciona
// stringTest = unknownValue;
if (typeof unknownValue === 'string') {
    stringTest = unknownValue;
}
// never + throw: pára o código
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
