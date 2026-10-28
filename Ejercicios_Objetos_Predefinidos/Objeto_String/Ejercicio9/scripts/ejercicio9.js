let texto = "Introduce una contraseña \n";
texto += "- Que tenga entre 8 y 16 caracteres\n";
texto += "- Que tenga al menos una letra mayúscula\n";
texto += "- Que tenga al menos una letra minúscula\n";
texto += "- Que tenga al menos un número\n";
texto += "- Que tenga alguno de los siguientes símbolos (- _ @ # $ % &)"
let pass = prompt(texto).trim();

// Compruebo que no ha introducido solo un texto vacio
if(pass.length == 0) {
    document.write("Tienes que introducir una contraseña");
}
else {
    // Creo las variables para comprobar que cumple los requisitos
    let tamanioCorrecto = false;
    let tieneUpper = false;
    let tieneLower = false;
    let tieneNum = false;
    let tieneEspecial = false;

    // Creo los strings para las comprobaciones
    let abecedario = "abcdefghijklmnñopqrstuvwxyz";
    let abecedarioMayus = abecedario.toUpperCase();
    let numeros = "0123456789";
    let especiales = "-_@#$%&";

    // Miro el tamaño
    if(pass.length >= 8 && pass.length <= 16) {
        tamanioCorrecto = true;
    }

    // Miro si tiene alguna minuscula
    let i = 0;
    while(!tieneLower && i < abecedario.length) {
        if(pass.includes(abecedario.charAt(i))) {
            tieneLower = true;
        }
        i++;
    }

    // Miro si tiene alguna mayuscula
    i = 0;
    while(!tieneUpper && i < abecedarioMayus.length) {
        if(pass.includes(abecedarioMayus.charAt(i))) {
            tieneUpper = true;
        }
        i++;
    }

    // Miro si tiene algun caracter especial
    i = 0;
    while(!tieneEspecial && i < especiales.length) {
        if(pass.includes(especiales.charAt(i))) {
            tieneEspecial = true;
        }
        i++;
    }

    // Miro si tiene algun numero
    i = 0;
    while(!tieneNum && i < numeros.length) {
        if(pass.includes(numeros.charAt(i))) {
            tieneNum = true;
        }
        i++;
    }

    // Muestro si la contraseña esta bien o mal, si está mal le detallo que falta
    if(tamanioCorrecto && tieneEspecial && tieneUpper && tieneLower && tieneNum) {
        document.write("La contraseña es segura, cumple con todos los requisitos");
    }
    else {
        let texto = "No es una contraseña segura, le falta: <br>";
        if(!tamanioCorrecto) {
            texto += "- Que tenga entre 8 y 16 caracteres <br>";
        }
        if(!tieneUpper) {
            texto += "- Alguna letra mayúscula <br>";
        }
        if(!tieneLower) {
            texto += "- Alguna letra minúscula <br>";
        }
        if(!tieneNum) {
            texto += "- Algún número <br>";
        }
        if(!tieneEspecial) {
            texto += "- Algún caracter especial (- _ @ # $ % &)";
        }
        document.write(texto);
    }

}

