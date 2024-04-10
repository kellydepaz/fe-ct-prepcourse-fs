function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código: {
    let arregloNuevo = [];

    // Repetir hasta que el arreglo original quede vacío
    while (array.length > 0) {
      let numeroMinimo = Math.min(...array); // Encontrar el número mínimo
      let indiceMinimo = array.indexOf(numeroMinimo); // Encontrar el índice del número mínimo
      array.splice(indiceMinimo, 1); // Eliminar el número mínimo del arreglo original
      arregloNuevo.push(numeroMinimo); // Agregar el número mínimo al arreglo ordenado
    }
  
    return arregloNuevo;
 }
 
 
console.log(ordenarArray([24, 1, 7, 9]))


module.exports = ordenarArray;
