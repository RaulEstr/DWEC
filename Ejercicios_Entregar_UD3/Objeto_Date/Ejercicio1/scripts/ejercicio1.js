// Guardo la fecha de hoy
let hoy = new Date();

// Le pido una fecha con formato aaaa/mm/dd
let fecha = prompt("Introduce la fecha del ultimo dia del curso (aaaa/mm/dd)")

// Compruebo si hay una / en el quinto caracter
if(fecha.charAt(4) == "/") {
    // Guardo el año, que son los 4 primeros caracteres
    let anio = fecha.substring(0,4);

    // Creo una variable para comprobar si el mes lo ha puesto con 1 o con 2 digitos
    // Y compruebo que hay una / en el septimo o octavo caracter
    let separador = 0;
    if(fecha.charAt(6) == "/") {
        separador = 6;
    }
    if(fecha.charAt(7) == "/") {
        separador = 7;
    }

    if(separador != 0) {
        // Guardo el mes
        let mes = fecha.substring(5, separador);

        // Compruebo que el mes sea correcto
        if(mes < 1 || mes > 12) {
            document.write("El mes no es correcto");
        }
        else {
            // Guardo el día (No voy a comprobar si la cantidad de dias son correctos si el año es bisiesto)
            let dia = fecha.substring(separador + 1);

            if(dia < 1 || dia > 31) {
                document.write("El dia no es correcto");
            }
            else {
                // Creo una variable tipo fecha con la fecha que ha introducido
                let fechaFin = new Date(anio,mes - 1,dia);
                
                // Compruebo que la fecha no sea menor a la de hoy
                if(fechaFin < hoy) {
                    document.write("El curso no puede terminar antes que hoy");
                }
                else {
                    // Calculo cuantos días de diferencia hay entre las dos fechas
                    let dif = fechaFin - hoy;

                    // Paso la diferencia a segundos
                    dif = dif / 1000;

                    // Paso la diferencia a minutos
                    dif = dif / 60;

                    // Paso la diferencia a horas
                    dif = dif / 60;

                    // Paso la diferencia a dias
                    dif = dif / 24;
                    
                    document.write("Quedan " + Math.round(dif) + " dias para que acabe el curso")
                }
            }

            
        }

       
    }
}
else{
    document.write("Tienes que escribir una fecha de nacimiento válida");
}