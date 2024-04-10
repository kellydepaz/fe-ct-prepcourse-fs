function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let numeroMayor = Math.max(...array);
  console.log(numeroMayor)

  let indice = array.indexOf(numeroMayor)

  return indice

}

console.log(encontrarIndiceMayor([1,50,4,5,24,0]) )

module.exports = encontrarIndiceMayor;
