function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:

  objeto.null = propiedad;

  return objeto
}

let persona = {
}


console.log(agregarPropiedad(persona, 'kelly'))

module.exports = agregarPropiedad;
