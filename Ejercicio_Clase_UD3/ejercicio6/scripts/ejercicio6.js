// Guardo la fecha de hoy
let hoy = new Date();

// Pido la fecha con formato aaaa/mm/dd
let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (formato aaaa/mm/dd)");

// Compruebo si hay una / en el quinto caracter
if(fechaNacimiento.charAt(4) == "/") {
    // Guardo el año, que son los 4 primeros caracteres
    let anio = fechaNacimiento.substring(0,4);

    // Creo una variable para comprobar si el mes lo ha puesto con 1 o con 2 digitos
    // Y compruebo que hay una / en el septimo o octavo caracter
    let separador = 0;
    if(fechaNacimiento.charAt(6) == "/") {
        separador = 6;
    }
    if(fechaNacimiento.charAt(7) == "/") {
        separador = 7;
    }

    if(separador != 0) {
        // Guardo el mes
        let mes = fechaNacimiento.substring(5, separador);

        if(mes < 1 || mes > 12) {
            document.write("El mes no es correcto");
        }
        else {
            // Guardo el día (No voy a comprobar si la cantidad de dias son correcto si el año es bisiesto etc)
            let dia = fechaNacimiento.substring(separador + 1);

            if(dia < 1 || dia > 31) {
                document.write("El dia no es correcto");
            }
            else {
                // Creo una variable tipo fecha con la fecha que ha introducido
                let cumpleanios = new Date(anio,mes - 1,dia);
                
                // Compruebo que la fecha no sea mayor a la de hoy
                if(cumpleanios > hoy) {
                    document.write("Tu fecha de nacimiento no puede ser mayor a la de hoy");
                }
                else {
                    // Le pongo su fecha de nacimiento por pantalla
                    document.write("Has nacido el " + cumpleanios.getDate() + "/" + (cumpleanios.getMonth() + 1) + "/" + cumpleanios.getFullYear());

                    // Calculo los años de diferencia
                    let diferencia = hoy.getFullYear() - cumpleanios.getFullYear();

                    // Miro si el mes actual es el mismo que el de su cumpleaños
                    if(hoy.getMonth() == cumpleanios.getMonth()) {

                        // Si el dia del mes de hoy es menor al dia del mes del cumpleaños significa que todavia no ha cumplido años, con lo que le restamos 1
                        if(hoy.getDate() < cumpleanios.getDate()) {
                            diferencia--;
                        }
                    }
                    document.write("<br>");
                    document.write("Tienes " + diferencia + " años");
                }
            }

            
        }

       
    }
}
else{
    document.write("Tienes que escribir una fecha de nacimiento válida");
}