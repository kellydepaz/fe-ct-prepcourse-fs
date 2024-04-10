const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;

};

let persona = {
  nombre: 'kelly',
  edad: 31
}


console.log(agregarNuevaPropiedad(persona, 'nombre', 'kelly') )
console.log(agregarNuevaPropiedad(persona, 'gustos', '[comer pizza, jugar futbol]') )

module.exports = agregarNuevaPropiedad;
