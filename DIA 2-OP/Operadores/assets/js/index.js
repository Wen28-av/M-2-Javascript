console.log("archivo conectado")

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
/*console.log(esPar);*/
/* ----------OPERADORES RELACIONALES -------------------*/

let esCorrecto = 5 + 2 === 4 + 3;
//                 7   ===   7 ===> true
console.log(esCorrecto);
//mimuto  1:29

/* Menor que = > Compara si el valor izquierdo es menor que el derecho*/
let MenorQue = 5 < 10; //true
let esMenorQue = 5 < 5; //false
/* Mayor que = > Compara si el valor izquierdo es mayor que el derecho*/
let MayorQue = 5 > 10; //false
let esMayorQue = 10 > 10; //false

/* Menor o igual que => Compara si el valor izquierdo es menor que el derecho*/
let MenorOIgualQue = 5 <= 10; //true
let esMenorOIgualQue = null; //true

/* Mayor o igual que => Compara si el valor izquierdo es mayor que el derecho*/
let MayoOIgualrQue = 5 >= 10; //false
let esMayorOIgualQue = 10 >= 10; //true

/* Igualdad compara si los dos valores son iguales sin importar el tipo de dato  -----  tiene tendencia a errores*/
let sonIguales = 5 == 5; //true
let sonIguales2 = "5" == "5"; //true porque podemos comparar dos tipos de datos
let sonIguales3 = 5 == "5"; //true

console.log(sonIguales3);

/* Igualdad estricta => compara si los dos valores son iguales, importa el tipo de dato   */
let sonIgualesEstricto = 5 === 5; //true
let sonIgualesEstricto2 = 5 === "5"; //false
let sonIgualesEstricto3 = 5 === "5"; //false
let sonIgualesEstricto4 = 555 === "555"; //false
let sonIgualesEstricto5 = "5" === 5; //false

let prueba = "Wendy" === "wendy" //es false por la mayuscula
console.log(prueba);

/* No igualdad estricta/ No son iguales estricto */
let nosonIgualesEstricto = 5 !== 5; //false

let nosonIgualesEstricto0 = 5 !== "5"; //true
let nosonIgualesEstricto2 = 555 !== "545"; //true
let nosonIgualesEstricto3 = 5 !== "5"; //true
let nosonIgualesEstricto4 = 555 !== "555"; //true
let nosonIgualesEstricto5 = "5" !== 5; //true

/* Tipos de datos */
let estoEsUndefinitedDeclarado = undefined //representa a un valor no definido
let estoEsUndefined// representa a un valor no definido

/* ------------Type of---------------- */
//devuelve una cadena o string sin evaluarlo
let saludo = "Hola";
let nombre = "Wendy";
let edad = 25;

let tiposIguales = typeof saludo === typeof nombre;//true
//                  typeof "Hola"      typeof "Wendy"
//                      "string"          "string"
//                       "string"     ===     "string"
//                                   true
let tiposIguales2 = typeof saludo === typeof edad;//false
let tiposIguales3 = typeof "me gusta el helado" === typeof 25; //false

console.log(typeof nombre)
console.log(typeof edad)


/*--------------------OPERADORES LOGICOS--------------- */

//Operador and=> se hace con un doble & => && =>>Si las dos condiciones se cumplen, se realiza el suceso y se arroja true

const ejemplo1 = 5 > 5 && 10 > 10
//               false     false

const ejemplo2 = true && 10 === 10
//               true &&  true            =>true

//Operador or=> se hace con doble |  =>  || si una u otra se cumple da como resultado true
 let ejemplo3 = 5 > 5 || 10 === 10

 console.log(5 && "Wendy") // cuando los dos valores son verdaderos arroja el dato de la derecha