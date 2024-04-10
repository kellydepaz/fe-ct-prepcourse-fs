function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let nuevoArregloDeNumerosMayoresA10 = []


  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      nuevoArregloDeNumerosMayoresA10.push(array[i])
    }
  }

  return nuevoArregloDeNumerosMayoresA10
}

console.log(contarElementosMayoresA10([1,4,6,8,20,11]))

module.exports = contarElementosMayoresA10;
