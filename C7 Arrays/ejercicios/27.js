function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  let palabrasConcatenadas = '';

  for (let i = 0; i < palabras.length; i++) {
    palabrasConcatenadas = palabrasConcatenadas + ' ' + palabras[i];
  }

  return palabrasConcatenadas



}

console.log(dePalabrasAFrase(['kelly', 'jason']))

module.exports = dePalabrasAFrase;
