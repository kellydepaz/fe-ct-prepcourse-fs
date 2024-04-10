function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let arregloTablaDelSeis = []

  for (let i = 0; i <= 60; i++) {
    if (i % 6 === 0) {
      arregloTablaDelSeis.push(i)
    }
  }

  return arregloTablaDelSeis;


}

console.log(tablaDelSeis())

module.exports = tablaDelSeis;
