function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  let nuevoObjeto = {};

  nuevoObjeto.nombre = nombre;
  nuevoObjeto.edad = edad;
  nuevoObjeto.meow = function() {
    return 'Meow!'
  }

  return nuevoObjeto;

}

console.log(crearGato('popo', 5))

module.exports = crearGato;
