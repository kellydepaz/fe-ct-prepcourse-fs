function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let cantidadDePares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 !== 0) {
      continue;
    }
    cantidadDePares += 1;   
  }

  return cantidadDePares;
}

console.log(contarParesConContinue([1,2,3,4,5]))

module.exports = contarParesConContinue;
