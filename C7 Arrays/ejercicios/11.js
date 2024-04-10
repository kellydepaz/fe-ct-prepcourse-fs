function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let nuevoArray = []

  for(let i =0; i < array.length; i++) {
    let numeroObtenido = array[i] * 2
    nuevoArray.push(numeroObtenido)
  }

  return nuevoArray

 }

 console.log(duplicarElementos([1,2,8,7]))

module.exports = duplicarElementos;
