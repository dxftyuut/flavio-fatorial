const prompt = require("prompt-sync")();
import { multiplicar } from './multiplicar.js';

var numero1 = prompt('Número 1: ');
var numero2 = prompt('Número 2: ');

var produto = multiplicar(numero1,numero2);

console.log("\nO produto é igual a " + produto + "\n");    