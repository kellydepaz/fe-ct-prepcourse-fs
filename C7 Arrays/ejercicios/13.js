function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let nuevoArregloDeNumerosPares = []


  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      nuevoArregloDeNumerosPares.push(array[i])
    }
  }

  return nuevoArregloDeNumerosPares
}

console.log(filtrarNumerosPares([1,4,6,8,2,5]))

module.exports = filtrarNumerosPares;
