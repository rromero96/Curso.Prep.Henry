// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  const objeto1 = Object.entries(objeto);
  return objeto1;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if(obj.hasOwnProperty(string[i])){
      obj[string[i]] = obj[string[i]] + 1;

    } else {
      obj[string[i]] = 1;
    }
  }
   return (obj);


}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var grupo = [];
  var mayus = [];
  var minus = [];
  for(var i = 0; i < s.length; i++){
    var letra = s[i];
    grupo.push(letra);
  }
  for(var i = 0; i < grupo.length; i++){
    if(grupo[i] === grupo[i].toUpperCase()){
      mayus.push(grupo[i]);
    } else if(grupo[i] === grupo[i].toLowerCase()){
      minus.push(grupo[i]);
    }
  }
  var frase = mayus.concat(minus);
  return frase.join('');
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   var reves = '';
  for(var i = str.length; i >= 0; i--){
    reves = reves + str.charAt(i);
  }
  var cadena = reves.split(' ').reverse().join(' ');
  return cadena;
} 
 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    var string = numero.toString().split('').reverse().join('');
  if(numero == string){
    return "Es capicua";
  } return "No es capicua";
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    var chain = '';
  for(var i = 0; i < cadena.length; i++){
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      chain = chain + cadena[i];
    }
  }
  return chain;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var ordenado = [];
  var index = [arr[0]];
  console.log("este es index " + index);
  for(var i = 0; i < arr.length; i++){
    if(index.length < arr[i].length){
      index = arr[i];
    } ordenado.push(arr[i]);
    console.log("index en el for " + index);
  }
  console.log("esto es ordenado " + ordenado);
  return ordenado; */
  return arr.sort((a,b) => a.length - b.length);
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
    var arrayNuevo = [];
  for(var i = 0; i < arreglo1.length; i++){
    for(var j = 0; j < arreglo2.length; j++)
    if(arreglo1[i] == arreglo2[j]){
      arrayNuevo.push(arreglo1[i]);
    }
  } 
  return arrayNuevo;
} 




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

