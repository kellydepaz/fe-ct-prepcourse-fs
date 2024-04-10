function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find(function(element) {
    return typeof element === 'string' && element.length > 5;
  });
  
}

console.log(obtenerPrimerStringLargo(['kelly', 'elefante', 'comida']))

module.exports = obtenerPrimerStringLargo;
