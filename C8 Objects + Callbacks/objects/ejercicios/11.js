function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una  función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:

  objeto.metodo = metodo; 
}

let persona = {
  nombre: 'kelly',
  edad: 24,
  saludo: function() {
    console.log('Hola mi nombre es kelly')
  }
};

console.log(invocarMetodo(persona, saludo()))



module.exports = invocarMetodo;
