function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   let palabraNormal = string.split('');
   console.log(palabraNormal)
   palabraNormal.reverse();
   console.log(palabraNormal)
   let palabraAlReves = palabraNormal.join('')
   console.log(palabraAlReves)

  if(string === palabraAlReves) {
   return true
  } else {
   return false
  }



}

console.log(esPalindromo('kelly'))


module.exports = esPalindromo;
