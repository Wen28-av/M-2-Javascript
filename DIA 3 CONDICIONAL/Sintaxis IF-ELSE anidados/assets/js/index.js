/* SINTAXIS IF ELSE ANIDADO */
let semaforo = prompt("escribe el color del semaforo")

if (semaforo === "amarillo"){
    alert("Frenar con precaución");
}else if (semaforo === "verde") {
    alert("Avanzar");
} else if (semaforo === "rojo") {
    alert("No cruzar");
} else { alert("El semaforo no anda o esta averiado");}



/*  ejercicio de un banco donde si el saldo era negativo me dira "debes dinero" , si esta en 0 me dira "estas en 0", si es positivo me dira "puedes retirar dinero"*/
let saldo = Number(prompt("ingresa tu saldo imaginario para la prueba"));

//    alert("debes dinero, no puedes retirar, tu saldo es =>", saldo); no se puede poner dos parametros por eso se pone==> + saldo

if(saldo < 0){ 
    alert("debes dinero, no puedes retirar, tu saldo es =>"+ saldo);
}else if(saldo === 0){ 
    alert("estas en 0, te prestaremos dinero, tu saldo es =>"+ saldo);
}else if(saldo > 0){ 
    alert("puedes retirar, tu saldo es =>"+ saldo);
}else {
    alert("SALDO INGRESADO INCORRECTAMENTE");
}

/* Ejercicio 3 Escribe un programa que pregunte al usuario su nota en un examen. En funcion de la nota , el programa debe mostrar un mensaje.
Por ejemplo , si el usuario saca un 10 , el mensaje podria ser "Excelente". Si el usuario saca un 9 o un 8 , el mensaje  podria ser "Muy bien". Si el usuario saca un 7 o un 6 , el mensaje podria ser "Bien". Sii el usuario saca un 5 o un 4 el mensaje podria ser "Suficiente", y si el usuario saca un 3 o un 2, el mensaje podria ser "Insuficiente".*/