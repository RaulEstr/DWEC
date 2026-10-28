// Creo la fecha de inicio
let fechaIni = new Date();

// Le pido el nombre
let nombre = prompt("Escribe tu nombre");

// Comprobaciones del nombre
if(nombre == null) {
    document.write("Has cancelado")
}
else if(nombre == "") {
    document.write("No has introducido nombre")
}
else {
    // Creo la fecha después del prompt
    let fechaFin = new Date();

    // Calculo la diferencia
    let diferencia = fechaFin-fechaIni;

    // Muestro la diferencia en segundos
    document.write(nombre + ", has tardado: " + (diferencia/1000) + " segundos");
    alert(nombre + ", has tardado: " + (diferencia/1000) + " segundos")
}

