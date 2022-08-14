"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
// console.log(somarValores("foo", 1))
// console.log(somarValores("foo", "bar"))
// console.log(somarValores(2, 1))
// console.log(somarValores("2", 1))
// TYPE of return of functions
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
}
// console.log(somarValoresNumericos(1, 2));
// VOID -> ausência de retorno
function printarValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
// callbacks
function somarValoresNumericosETratar(num1, num2, callback) {
    var resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
// 16
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
// 1
