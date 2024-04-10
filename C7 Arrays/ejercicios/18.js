function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let promedio = 0;

  for(let i = 0;  i < resultadosTest.length; i++) {
    promedio = (promedio + resultadosTest[i]) / resultadosTest.length
      
  }

  return promedio
}

console.log(promedioResultadosTest([2,2,2]))

module.exports = promedioResultadosTest;
