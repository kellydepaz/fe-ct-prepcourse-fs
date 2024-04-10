function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let nuevoArray = []

  for (let i = 0; i < array.length; i++) {
    let stringEnMay = array[i].toUpperCase()
    nuevoArray.push(stringEnMay)
  }

  return nuevoArray

}

console.log(convertirStringAMayusculas(['hola', 'kelly']))

module.exports = convertirStringAMayusculas;
