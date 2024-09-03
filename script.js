// Exercício 1

const inputNum = document.querySelector("#inputEx1");
const submitNum = document.querySelector("#formEx1");
const resEx1 = document.querySelector("#resEx1");

submitNum.addEventListener("submit", (e) => {
  e.preventDefault();

  let nA = 0;
  let nB = 1;
  let nC = 0;

  const arraySequenciaF = [0, 1];

  for (let c = 1; c <= 50; c++) {
    nC = nA + nB;

    arraySequenciaF.push(nC);

    nA = nB;
    nB = nC;
  }

  const  num = parseFloat(inputNum.value);

  let pertence = arraySequenciaF.includes(num);

  if (pertence == true) {
    resEx1.innerHTML = "Esse número <strong>pertence</strong> a sequência de Fibonacci.";
  } else {
    resEx1.innerHTML = "Esse número <strong>não pertence</strong> a sequência de Fibonacci.";
  }
});

// Exercício 2

const inputTxt = document.querySelector("#inputEx2");
const submitEx2 = document.querySelector("#formEx2");
const resEx2 = document.querySelector("#resEx2");

submitEx2.addEventListener("submit", (e) => {
  e.preventDefault();

  let txt = inputTxt.value;
  let quantidade = 0;
  let info = ""
  
  for (var i = 0; i <= txt.length; i++) {
    if (txt[i] == "a" || txt[i] == "A") {
      quantidade += 1;
    } 
  }
  
  if (quantidade == 1) {
    info = `Existe <strong>${quantidade} letra "a"</strong> nessa palavra`
  } else if (quantidade > 1) {
    info = `Existem <strong>${quantidade} letras "ás"<strong> nessa palavra`
  } else {
    info = '<strong>Não existe</strong> nenhuma <strong>letra "a"</strong> nessa palavra'
  }
  resEx2.innerHTML = info;
});

// Exercício 3

const resEx3 = document.querySelector("#resEx3");

var INDICE = 12;
var SOMA = 0;
var K = 1;

while (K < INDICE) {
  K += 1;
  SOMA += K;
}

resEx3.innerHTML = SOMA;


// Exercício 4

// a)
let rA = 1

for (var c = 0; c < 4; c++) {
  rA += 2
}

document.querySelector('#resEx4A').innerHTML = rA /* rA = 9 */

// b)
let rB = 2

for (var c = 0; c < 6; c++) {
  rB *= 2
}

document.querySelector('#resEx4B').innerHTML = rB /* rB = 128 */

// c)
let rC = 0

for (var c = 0; c < 8; c++) {
  rC = c ** 2
}

document.querySelector('#resEx4C').innerHTML = rC /* rC = 49 */

// d)
let rD = 4
let rDInicial = 4
let rDAnterior = 0

for (var c = 0; c < 4; c++) {
  rD = rDInicial - rDAnterior + 8 + rDInicial
  
  rDAnterior = rDInicial
  rDInicial = rD
}

document.querySelector('#resEx4D').innerHTML = rD /* rD = 100 */

// e)
let numA = 0;
let numB = 1;
let numC = 0;

for (let c = 0; c < 6; c++) {
  numC = numA + numB;
  
  numA = numB;
  numB = numC;
  rE = numC;
}

document.querySelector('#resEx4E').innerHTML = rE /* rE = 13 */

// f)

/* rF = 200

A sequência são de numeros que começam com a letra "D", não achei uma lógica matemática para fazer no código kkk */