const { performance } = require("perf_hooks");

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

const num = 2147483647;

// Calcula o tempo da função TestaPrimo
const t0 = performance.now();
let ehNumPrimo = TestaPrimo(num);
const t1 = performance.now();
const tempoTotal = t1 - t0;

// Imprime na tela os resultados
// console.log(`Eh primo: ${ehNumPrimo}`);
console.log(tempoTotal);
