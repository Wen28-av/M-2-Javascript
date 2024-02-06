/* ------------SINTAXIS IF ELSE */
if(true) {
    console.log("La condicion se cumplio");
}else{
    console.log("La condicion no se cumplio");
}


if(false) {
    console.log("La condicion se cumplio");
}else{
    console.log("La condicion no se cumplio");
}
 /*Crear una condicion para que si tienes 18 años  o mas puedas ingresar a la disco*/

 let edad = prompt(
    "BINVENIDO A LA DISCOTECA!, POR FAVOR INGRESE SU EDAD"
);//me permite escribir en el navegador el valor de la variable en formato string

 if(Number(edad) >= 18) {
    console.log("La condicion se cumplio");
    alert("Usted puede ingresar, Gracias por venir!");
}else {
    console.log("La condicion no se cumplio")
    alert("Por favor retirese de inmediato, no se aceptan menores !!!")
}