function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:

   //convertir el texto en array //
   let nuevoString = texto.split('')

   //lo invierto
   let textoInvertido = nuevoString.reverse();
   console.log('Soy el array del texto invertido:' , textoInvertido)

   //convierto el array en string
   textoInvertido = textoInvertido.join('');

   return textoInvertido
}

console.log(invertirTexto('kelly'))





module.exports = invertirTexto;




