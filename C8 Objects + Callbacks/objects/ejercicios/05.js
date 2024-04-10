const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  let propiedades = Object.keys(objeto)
  return propiedades
};


let persona = {
  nombre: 'kelly',
  edad: 31
}


console.log(listarPropiedades(persona))

module.exports = listarPropiedades;
