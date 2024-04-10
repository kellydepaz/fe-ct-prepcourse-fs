function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevoArreglo = [];

  for (let i =0; i < array.length; i++) {
    let resultado = array[i] * i;
    nuevoArreglo.push(resultado)
  }
  return nuevoArreglo

}

console.log(multiplicarElementosPorIndice([1,2,3,4]))

module.exports = multiplicarElementosPorIndice;
