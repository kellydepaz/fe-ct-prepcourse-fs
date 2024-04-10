function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let sumaDeArrays = 0;

  for (let i = 0; i < arrayOfNums.length; i++ ) {
    sumaDeArrays = sumaDeArrays + arrayOfNums[i]
  }

  return sumaDeArrays;
}

console.log(agregarNumeros([1,2,3,4]))

module.exports = agregarNumeros;
