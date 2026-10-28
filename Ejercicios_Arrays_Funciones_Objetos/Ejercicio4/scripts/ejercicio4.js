let letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L','C', 'K', 'E', 'T');
let respuesta = document.getElementById("respuesta");

function validarDNI() {
    let dni = (document.getElementById("dni").value).trim();
    
    if(dni.length != 9) {
        respuesta.innerHTML = "<p style=\"color: red\">Faltan datos, tiene que haber 8 numeros y 1 letra</p>";
    }
    else {
        let numDni = parseInt(dni.substring(0, 8));
        let letraDni = dni.substring(8).toUpperCase();
  
        if(isNaN(numDni)) {
            respuesta.innerHTML = "<p style=\"color: red\">No has introducido bien el numero</p>";
        }
        else {
            // Le añado "" al numero para poder comprobar su longitud como si fuese un string
            if((numDni + "").length != 8) {
                respuesta.innerHTML = "<p style=\"color: red\">El numero no tiene 8 caracteres</p>";
            }
            else {
                if(!letras.includes(letraDni)) {
                    respuesta.innerHTML = "<p style=\"color: red\">La letra no es válida</p>";
                }
                else {
                    let resto = numDni % 23;
                    let letra = letras[resto];
                    if(letra == letraDni) {
                        respuesta.innerHTML = "<p style=\"color: green\">El numero y la letra son correctos</p>";
                    }
                    else {
                        respuesta.innerHTML = "<p style=\"color: red\">La letra es incorrecta</p>"
                    }
                }
            }
        }
    }
}