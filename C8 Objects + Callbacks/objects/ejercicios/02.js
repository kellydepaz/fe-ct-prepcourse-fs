function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   return objeto;
}

const mascota = {
   nombre: 'canela',
   edad: 1
};

const mascota2 = {
   nombre: 'mertin',
   edad: 2
};

console.log(actualizarValorPropiedad(mascota, 'alergia', '[chocolate, queso ]'))


module.exports = actualizarValorPropiedad;
