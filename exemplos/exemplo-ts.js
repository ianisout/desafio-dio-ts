"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somaTs(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar)
        console.log(resultado);
    return frase + resultado;
}
let devePrintar = true;
let frase;
frase = 'O valor é: ';
if (button)
    button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(somaTs(+input1.value, +input2.value, devePrintar, frase));
    });
