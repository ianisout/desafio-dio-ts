let valorAny: any;

valorAny = 1;
valorAny = 'Oi';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
// above and below shoun't be done, duh
let valorString2: string = 'Lorem Ipsum';
valorString2 = valorAny;

function somarStgring(str1: string, str2: string) {
  console.log(str1 + str2);
}

somarStgring(valorString, valorString2);
somarStgring('ola ', 'como vais?')