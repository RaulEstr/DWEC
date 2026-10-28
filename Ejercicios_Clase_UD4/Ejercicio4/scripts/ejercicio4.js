// Funcion que suma 2 numeros
function suma(num1, num2) {
    return num1 + num2;
}

// Pido los dos numeros
let num1 = parseInt(prompt("Introduce el primer numero"));
let num2 = parseInt(prompt("Introduce el segundo numero"));

// Compruebo que ambos valores sean numericos
if(isNaN(num1) || isNaN(num2)) {
    document.write("<p>Alguno de los valores introducidos no es un numero</p>");
}
else{
    // Llamo a la funcion y muestro el resultado por pantalla
    let resultado = suma(num1, num2);
    document.write("<p>" + num1 + " + " + num2 + " = " + resultado + "</p>");
}

