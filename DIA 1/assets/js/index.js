/*Ejemplo uno de comentario / comentario en bloque=> apretando alt+shift+A*/
//Ejemplo de comentario =>comentario en linea=> utilizando doble //=> CTRL+}
/*Console.log =>para mostrar en consola lo expresado entre los parentesis*/
/* console.log>>>fue hecho para debuguear/depurar el codigo */
/* console.log("Esta es una suma=>", 2+2); */
/*document.write => para mostrar en antalla lo expresado entre*/
/* document.write("Bienvenidos a DEV.F") */
/* -----alert es un mensaje de alerta ------*/
/*  alert("Hola! has clic para continuar")*/

/* console.log("El código termino"); */
/* ---------------------------------------- */
/* las variables pueden ser definidsas con la palabra reservada "var" o "let" */
/* declaracion (darle nombre) asignacion de valor (darle valor) de una variable */


/* console.log(Este es mi nombre ); */
let nombre = "Wendy"; /* esta es una variable con let*/
const apellido= "Acho";/* esta es una constante */

nombre= "Sara" /* redeclaracion/reasignacion de un valor */

console.log("Este es mi nombre=>", nombre);
console.log("Este es mi apellido=>", apellido);
/* lo siguiente se llama concatenacion , en console.log no mas de 3 cosas*/
console.log(nombre + " " + apellido);
/* ------------------TIPOS DE DATOS---------------- */
/* STRING represanta datos textuales entre comillas */
/* undefined => aun no esta definido /su valor no existe como>>>>console.log("Este es mi nombre=>", animal);*/
let string = "Cadena de caracteres entre comillas"
console.log("String=>",string);
let number =5;
let floatNumber = 1.5; //.>numero decimal siempre con punto
console.log(number);
let boolean = true
let boolean2 = false


/* ---------------------OPERADORES MATEMATICOS -------------*/
/* las operaciones matematicas arrojan un valor de salidas unico */
let numeroFavorito = 44;
let suma = numeroFavorito+2 //46
let resta = 5-3 //2
let multiplicacion = 5*5; //25
let division = 25/5; //5
let residuoDeDivision = 25% 5 // 0
let residuoDeDivision2 = 28% 5 // 25/5=>0 para llegar al 28 falta 3 por eso el residuo es>>> 3=====>>> Sirve para saber si el numero es par
let esPar = 29%2
let potencia = 2 ** 3; //8
console.log(esPar);