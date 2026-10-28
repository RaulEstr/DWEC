// Pido un 1 o un 2 por pantalla
let tipo = parseInt(prompt("¿Como quieres ver la hora (1 o 2) \n 1. formato 24h\n 2. formato 12h"));

// Compruebo que lo que ha metido sea un 1 o un 2
if(isNaN(tipo) || (tipo != 1 && tipo != 2)) {
    document.write("Valor incorrecto, tiene que ser 1 o 2");
}
else {
    // Guardo la fecha actual
    let ahora = new Date;

    // Guardo en variables cada hora
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Empiezo a crear el string con el formato de hora que voy a sacar, empiezo por : porque la hora la voy a añadir al final
    let formatoFecha = ":";
    
    // Compruebo los minutos para no sacar solo con un digito
    if(minutos < 10) {
        formatoFecha += "0" + minutos.toString();
    }
    else {
        formatoFecha += minutos.toString();
    }
    formatoFecha += ":";   

    // Compruebo los segundos para no sacar solo con un digito
    if(segundos < 10) {
        formatoFecha += "0" + segundos.toString();
    }
    else {
        formatoFecha += segundos.toString();
    }

    // Compruebo que tipo de hora se ha introducido, si formato 24h o formato 12h
    if(tipo == 1) {

        // En el formato 24h, compruebo la hora para no sacar solo un digito y lo añado al inicio del string
        if (hora < 10) {
            formatoFecha = "0" + hora.toString() + formatoFecha;
        }
        else {
            formatoFecha = hora.toString() + formatoFecha;
        }
    }
    else {
        // Si la hora es mayor a 12 es que estamos en PM
        if(hora >= 12) {

            // En el formato 12h hay que tener en cuenta que a partir de las 12 del mediodia ya estamos en PM y que a partir de las 13 son la 01:00 PM
            if(hora != 12) {
                hora = hora - 12;
            }

            // Compruebo la hora para no sacar solo un digito y lo añado al inicio del string y añado también el PM al final
            if (hora < 10) {
                formatoFecha = "0" + hora.toString() + formatoFecha + " PM";
            }
            else{
                formatoFecha = hora.toString() + formatoFecha + " PM";
            }
        }
        else {
            // En el formato 12h hay que tener en cuenta que no existe las 00:00 AM, tiene que ser 12:00 AM
            if(hora == 0) {
                hora = 12;
            }

            // Compruebo la hora para no sacar solo un digito y lo añado al inicio del string y añado también el AM al final
            if (hora < 10) {
                formatoFecha = "0" + hora.toString() + formatoFecha + " AM";
            }
            else {
                formatoFecha = hora.toString() + formatoFecha + " AM";
            }
        }
    }

    document.write(formatoFecha);
}