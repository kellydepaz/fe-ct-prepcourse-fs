function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  if (num % 2 !== 0) {
    return true; 
  } else {
    return false; 
  }
}

console.log(esImpar(6))
module.exports = esImpar;