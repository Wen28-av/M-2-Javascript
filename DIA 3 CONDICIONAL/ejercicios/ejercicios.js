/* crea una condicion que devuelva "true" si el numero es entero de lo contrario devuelve false/ "El numero no es entero", puedes utilizar console.log para ver la respuesta */
let numero = 125.5;
console.log(numero);

//if(125) {
//    console.log(tue, "El numero es entero");
//}else{
//    console.log(false, "El numero no es entero");
//}

//opcion b
if(numero % 1 === 0) {
    console.log(tue, "El numero es entero", numero);
}else{
    console.log(false, "El numero no es entero", numero);
}



/* 2 Devuelve "true" si "numero" es menor que 50 y mayor que 20, de lo contrario, devuelve "false" */
//| Pista: debes usar && 
//opcion A
console.log("----------ejercicio2-------")

let numero2 = 9

if(numero2 > 20 && numero2 < 50) {
    console.log(tue, "El numero cumple la condicion", numero2);
}else{
    console.log(false, "El numero no cumple la condicion", numero2);
}


//opcion B
let y = Number(prompt("Digite numero: "));
if(y < 50 && y > 20) {
    alert("El numero es menor que 50 y mayor que 20");
}else{
    alert("El numero no es menor que 50 y mayor que 20");
}

//opcion C
let NumeroEjercicio2 = prompt("Ingrese un valor numerico");
if(Number(NumeroEjercicio2) < 50 && Number(NumeroEjercicio2) > 20) {
    alert("true");
}else{
    alert("False");
}
