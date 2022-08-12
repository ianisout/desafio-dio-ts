let button = document.getElementById('button')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function soma(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return +num1 + +num2
  }

}

button.addEventListener('click', () => console.log(soma(input1.value, input2.value)))