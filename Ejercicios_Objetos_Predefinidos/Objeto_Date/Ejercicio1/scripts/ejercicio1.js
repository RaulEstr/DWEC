// Guardo las dos fechas
let fecha = prompt("Introduce el ultimo dia del curso (aaaa/mm/dd)");
let hoy = new Date();

// Compruebo que lo que me ha introducido es una fecha correcta
if(fecha.charAt(4) != "/" || fecha.charAt(7) != "/") {
    document.write("La fecha introducida no es correcta")
}
else {
    // Separo la fecha en variables
    let anio = parseInt(fecha.substring(0,4));
    let mes = parseInt(fecha.substring(5, 7));
    let dia = parseInt(fecha.substring(8));

    // Compruebo que los valores esten correctos
    if(mes < 1 || mes > 12) {
        document.write("El mes introducido no es correcto");
    }
    else if(dia < 1 || dia > 31) {
        document.write("El dia introducido no es correcto");
    }
    else {
        let fechaFin = new Date(anio, mes - 1, dia);

        // Compruebo que la fecha sea posterior a la de hoy
        if(fechaFin < hoy) {
            document.write("La fecha de fin no puede ser anterior a la actual");
        }
        else {
            // Compruebo la diferencia y la muestro
            let diff = fechaFin - hoy;
            diff = diff / 1000; 
            diff = diff / 60; 
            diff = diff / 60; 
            diff = Math.ceil(diff / 24);

            document.write("Faltan " + diff + " días para que acabe el curso");
        }
    }
}
