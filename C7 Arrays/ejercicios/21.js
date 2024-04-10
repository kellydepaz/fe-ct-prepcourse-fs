function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let arregloNuevo = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      arregloNuevo.push(array[i]);
    }
  }

  if (arregloNuevo.length === 3) {
    return arregloNuevo;
  } else {
    return "No se encontraron los meses pedidos";
  }

}

console.log(mesesDelAño(['Enero', 'Febrero', 'Marzo', 'Noviembre']))

module.exports = mesesDelAño;
