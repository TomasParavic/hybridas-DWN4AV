// Importamos la función que verifica si un número es primo
import isPrime from './primes.js';

// Verificamos si un número es primo
const number = 7;
const result = isPrime(number);

// Imprimimos el resultado
console.log(`¿Es ${number} un número primo? ${result ? 'Sí' : 'No'}`);