"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somaTs(num1, num2) {
    return num1 + num2;
}
if (button)
    button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(somaTs(+input1.value, +input2.value));
    });
