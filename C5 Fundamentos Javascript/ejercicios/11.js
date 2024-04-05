function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  if ((2024 - fechaNacimiento.getFullYear()) > 18) {
    console.log(true);
  } else {
    console.log(false)
  }
}

esMayorDeEdad( new Date('July 20, 69 00:20:18')) 

module.exports = esMayorDeEdad;