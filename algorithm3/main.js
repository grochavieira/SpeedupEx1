const { performance } = require("perf_hooks");

const nums = [7, 37, 8431, 13033, 524287, 664283, 3531271, 2147483647];
const numExecucoes = 30;
const temposTotais = new Array(8).fill(0).map(() => new Array(30).fill(0));

function TestaPrimo(num) {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i <= num; i++) {
    if (num === i) {
      return true;
    }

    if (num % i === 0) {
      return false;
    }
  }
}

function calcMedia(vetorTempo) {
  let soma = 0;
  for (let i = 0; i < vetorTempo.length; i++) {
    soma += vetorTempo[i];
  }

  const media = soma / numExecucoes;
  return media;
}

function calcDesvio(media, vetorTempo) {
  let soma = 0;
  for (let k = 0; k < vetorTempo.length; k++) {
    soma += Math.pow(vetorTempo[k] - media, 2);
  }

  const desvioPadrao = Math.sqrt(soma / 30);
  return desvioPadrao;
}

for (let i = 0; i < 8; i++) {
  let ehNumPrimo = false;
  for (let j = 0; j < numExecucoes; j++) {
    const tempoInicial = performance.now();
    ehNumPrimo = TestaPrimo(nums[i]);
    const tempoFinal = performance.now();
    const tempoTotal = tempoFinal - tempoInicial;
    temposTotais[i][j] = tempoTotal;
  }
  const media = calcMedia(temposTotais[i]);
  const desvioPadrao = calcDesvio(media, temposTotais[i]);

  console.log(
    `numero: ${nums[i]}, eh Primo: ${ehNumPrimo}, media: ${media}, desvio padrao: ${desvioPadrao}`
  );
}
