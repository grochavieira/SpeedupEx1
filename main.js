const { performance } = require("perf_hooks");
const readline = require("readline");
function TestaPrimo(num) {
  let ehPrimo = true;
  let i = 2;
  while (ehPrimo && i <= num / 2) {
    if (num % i === 0) {
      ehPrimo = false;
    }
    i++;
  }
  return ehPrimo;
}
const num = 524287;
const tempo = [];
let ehNumPrimo = TestaPrimo(num);

// Executa o algoritmo 30 vezes e armazena os dados em um vetor
for (let j = 0; j < 30; j++) {
  const t0 = performance.now();
  TestaPrimo(num);
  const t1 = performance.now();
  tempo.push(t1 - t0);
}

// Calcula o tempo médio de Execução do Algoritmo
let media = 0;
for (let k = 0; k < 30; k++) {
  media += tempo[k];
}
media = media / 30;

// Calcula o Desvio Padrão
let aux = 0;
for (let k = 0; k < 30; k++) {
  aux += Math.pow(tempo[k] - media, 2);
}
let desvioPadrao = Math.sqrt(aux / 30);

// Imprime na tela os resultados
console.log(`Eh primo: ${ehNumPrimo}`);
console.log(`Media eh: ${media.toFixed(5)}`);
console.log(`Desvio Padrao eh: ${desvioPadrao.toFixed(5)}`);
