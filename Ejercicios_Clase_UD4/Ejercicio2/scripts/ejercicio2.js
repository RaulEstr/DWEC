// Funcion que devuelve una cadena de texto u otra dependiendo de si es par o impar
function parImpar(num) { 
    if(num % 2 == 0) {
        return "es par";
    }
    else {
        return "es impar";
    }
}

// Pido un numero
let num = parseInt(prompt("Introduce un numero"));

// Compruebo si ha introducido un numero
if(isNaN(num)) {
    document.write("No has introducido ningún numero");
}
else {
    // Llamo a la función y muestro por pantalla el resultado
    alert("El numero " + num + " " + parImpar(num));
}