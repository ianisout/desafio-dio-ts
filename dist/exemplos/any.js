"use strict";
var valorAny;
valorAny = 1;
valorAny = 'Oi';
valorAny = true;
var valorString = 'teste';
valorString = valorAny;
// above and below shoun't be done, duh
var valorString2 = 'Lorem Ipsum';
valorString2 = valorAny;
function somarStgring(str1, str2) {
    console.log(str1 + str2);
}
somarStgring(valorString, valorString2);
somarStgring('ola ', 'como vais?');
