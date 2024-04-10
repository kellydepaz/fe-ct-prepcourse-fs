const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];
   
   return a;
};

const mascota = {
   nombre: 'canela',
   edad: 1
};

console.log(obtenerValorPropiedad(mascota, 'nombre'))

module.exports = obtenerValorPropiedad;
