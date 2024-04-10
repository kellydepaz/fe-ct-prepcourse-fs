function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

  let numeroAleatorioDeLaLongitud = Math.floor(Math.random() * array.length)

   return array[numeroAleatorioDeLaLongitud]
}

console.log(obtenerElementoAleatorio([1,2,3,4]))

module.exports = obtenerElementoAleatorio;
