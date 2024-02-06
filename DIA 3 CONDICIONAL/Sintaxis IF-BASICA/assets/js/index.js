console.log("coneccion correcta");
/* -------------SINTAXIS IF BASICA--------------------- */
//if ("condicion") {"codigo a ejecutar"}          sintaxis basica

let numero1 = 25;
let numero2 = 30;
let numero3 = 35;
/* Crear una condicion para que si tienes 18 años  o mas puedas ingresar a la disco */
let edad = prompt("BINVENIDO A LA DISCOTECA!, POR FAVOR INGRESE SU EDAD"); //me permite escribir en el navegador el valor de la variable en formato string
/* La edad al ser ingresada por un prompt , se guardara como string, con el metodo Number(), lo convertire en un tipo de dato Número/Number */
if(Number(edad) >= 18) {
    console.log("La condicion se cumplio");
    alert("Usted puede ingresar, Gracias por venir!");
}

//Ejemplo
if(15>5) {
    console.log("La condicion se cumplio");
    console.log("Quince es mayor a 5");
}


