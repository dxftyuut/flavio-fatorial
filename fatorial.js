function fatorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("O argumento deve ser um inteiro não negativo");
  }

  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// --- ESTA PARTE É PARA O GITHUB ACTIONS MOSTRAR NO LOG ---
if (require.main === module) {
  const numero = 5; // << Você pode mudar este valor
  const resultado = fatorial(numero);
  console.log(`Fatorial de ${numero} é: ${resultado}`);
}

// Exporta para o Jest
module.exports = fatorial;
