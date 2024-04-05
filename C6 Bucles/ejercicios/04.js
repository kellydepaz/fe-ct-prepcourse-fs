function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  while(edad >= 18) {
    return 'Allowed'
  }
  return 'No Allowed'

}

console.log(mayoriaDeEdad(17))

module.exports = mayoriaDeEdad;
