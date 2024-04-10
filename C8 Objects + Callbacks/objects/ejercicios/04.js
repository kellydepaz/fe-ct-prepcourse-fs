function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   if (objeto.hasOwnProperty(propiedad)) {
      return true
   } else {
      return false
   }
}

let persona = {
   nombre: 'kelly',
   edad: 31
}

persona.gustos = ['jugar futbol', 'escuchar musica', 'comer pizza']

console.log(verificarPropiedad(persona, 'gustos'))



module.exports = verificarPropiedad;
