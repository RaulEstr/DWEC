let contrasenia = prompt("Introduce una contraseña que creas segura").trim();

let tamanioCorrecto = false;
if(contrasenia.length >= 8 || contrasenia.length <= 16) {
    tamanioCorrecto = false;
}

let contraseniaLower = contrasenia.toLowerCase();
let contraseniaUpper = contrasenia.toUpperCase();
let tieneNum = false;
let tieneCaracter = false;
let tieneUpper = false;
let tieneLower = false;

for(let i = 0; i < contrasenia.length; i++) {

}
if(tamanioCorrecto && tieneCaracter && tieneNum && tieneUpper && tieneLower) {
    document.write("La contraseña cumple los requisitos");
}
else {
    document.write("La contraseña no cumple los requisitos");
}

