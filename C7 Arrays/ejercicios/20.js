function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:  

  // Comparamos todos los elementos con el primero
  let primerElemento = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false; // Si encontramos un elemento diferente, devolvemos false
    }
  }

  return true; // Si todos los elementos son iguales, devolvemos true
}

console.log(todosIguales([22,1,1]))

module.exports = todosIguales;
