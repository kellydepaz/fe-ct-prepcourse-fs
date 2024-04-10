function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:

  let nuevoObjeto = {};

  nuevoObjeto.nombre = nombre;
  nuevoObjeto.email = email;
  nuevoObjeto.password = password;

  return nuevoObjeto
}

console.log(nuevoUsuario('kelly', 'sisi@gmail.com', 12345))

module.exports = nuevoUsuario;
