let valor = parseInt(prompt("¿En que formato quieres ver la hora (1/2)\n1. hh:mm:ss formato 24h\n2. hh:mm:ss formato 12h"));
let hoy = new Date();

// Compruebo que lo que me ha introducido es un valor correcto
if(isNaN(valor) || valor < 1 || valor > 2) {
    document.write("La valor introducido no es correcto")
}
else {
    // Guardo las variables
    let hora = hoy.getHours();
    let mins = hoy.getMinutes();
    let secs = hoy.getSeconds();

    // Inicializo el string con : porque la hora es lo ultimo que voy a añadir
    let textoMostrar = ":";

    // Miro si los minutos y los segundos son menor a 10, si lo es, añado un 0 al string
    if(mins < 10) {
        textoMostrar += "0" + mins;
    }
    else {
        textoMostrar += mins;
    }
    textoMostrar += ":";

    if(secs < 10) {
        textoMostrar += "0" + secs;
    }
    else {
        textoMostrar += secs;
    }

    // Meto en el string la hora, teniendo en cuenta si es formato 24 o 12
    if(valor == 1) {
        // Miro si la hora es menor a 10, si lo es, añado un 0 al string
        if(hora < 10) {
            textoMostrar = "0" + hora + textoMostrar;
        } 
        else {
            textoMostrar = hora + textoMostrar;
        }
    }
    else {
        // Si la hora es mayor o igual a 12 eso quiere decir que es a la tarde, con lo que restamos 12
        if(hora >= 12) {
            hora = hora - 12;
            // Hay que tener en cuenta que en este formato no existe el 00:00 PM, con lo que si la hora es 00, son las 12 PM
            if(hora == 0) {
                hora = 12;
            }
            // Miro si la hora es menor a 10, si lo es, añado un 0 al string y PM al final
            if(hora < 10) {
                textoMostrar = "0" + hora + textoMostrar + " PM";
            }
            else {
                textoMostrar = hora + textoMostrar + " PM";
            }
        }
        else {
            // Hay que tener en cuenta que en este formato no existe el 00:00 AM, con lo que si la hora es 00, son las 12 AM
            if(hora == 0) {
                hora = 12;
            }
            // Miro si la hora es menor a 10, si lo es, añado un 0 al string y AM al final
            if(hora < 10) {
                textoMostrar = "0" + hora + textoMostrar + " AM";
            }
            else {
                textoMostrar = hora + textoMostrar + " AM";
            }
        }
    }

    document.write(textoMostrar);
}
