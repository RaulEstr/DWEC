// Declaro el contador para controlar que solo haya 4 por linea
let contador = 0;

// For general entre 1 y 100 ambos incluidos para calcular sus sumatorios
for(let num=1; num<=100; num++) {
    // Variable que va a guardar la el sumatorio
    let sumaNumero = 0;

    // For que calcula el sumatorio
    for(let sum=1; sum<=num; sum++) {
        sumaNumero += sum;
    }

    // Condicion para salir del bucle
    if(sumaNumero >= 1000) {
        break;
    }

    // Condicion para escribir el numero
    if(sumaNumero%2 != 0) {
        document.write(sumaNumero + ", ")
        contador++;
    }

    // Condicion para resetar el contador
    if (contador == 4) {
        document.write("<br>");
        contador = 0;
    }
}