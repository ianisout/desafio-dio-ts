"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function somaTs(num1, num2, devePrintar, frase) {
    var resultado = num1 + num2;
    if (devePrintar)
        console.log(resultado);
    return frase + resultado;
}
var devePrintar = true;
var frase;
frase = 'O valor é: ';
if (button)
    button.addEventListener('click', function () {
        if (input1 && input2)
            console.log(somaTs(+input1.value, +input2.value, devePrintar, frase));
    });
