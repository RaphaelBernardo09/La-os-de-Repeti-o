let quantidadeNumeros = parseInt(prompt("Por favor digite a quantidade de números a serem somados:"));
let numeros = [];

for (let i = 0; i < quantidadeNumeros; i++) {
  let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  numeros.push(numero);
}

let soma = numeros.reduce((acc, num) => acc + num, 0);
let media = soma / numeros.length;

alert(`Soma dos números que você escolheu: ${soma}\nMédia dos números que você escolheu: ${media}`);

let num1 = parseInt(prompt("Por favor digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Por favor Digite o segundo número inteiro (maior que o primeiro Número):"));

if (num1 >= num2 || isNaN(num1) || isNaN(num2)) {
  alert("Erro: Um número deve ser maior do que o outro.");
} else {
  let somaImpares = 0;

  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      somaImpares += i;
    }
  }

  alert(`A soma dos números ímpares no intervalo  [${num1}, ${num2}] é igual à: ${somaImpares}`);
}