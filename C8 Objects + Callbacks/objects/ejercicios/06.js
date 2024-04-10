const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  for (let prop in objeto) {
    console.log('el objeto tiene la propiedad', prop)
  }
};

let persona = {
  nombre: 'kelly',
  edad: 31
}

contarPropiedades(persona)


module.exports = contarPropiedades;
