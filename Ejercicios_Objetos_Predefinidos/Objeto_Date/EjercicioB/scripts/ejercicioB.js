// Creacion de la hora en formato hh:mm:ss copiado del ejercicio4
let hoy = new Date();

let hora = hoy.getHours();
let mins = hoy.getMinutes();
let secs = hoy.getSeconds();

let textoMostrar = "";

if(hora < 10) {
    textoMostrar += "0" + hora;
} 
else {
    textoMostrar += hora;
}
textoMostrar += ":";

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

// Miro que valor tiene hora para saber que mensaje mostrar
if(hora >= 6 && hora < 12) {
    textoMostrar = "Buenos días, son las " + textoMostrar;
}
else if(hora >= 12 && hora < 20) {
    textoMostrar = "Buenas tardes, son las " + textoMostrar;
}
else {
    textoMostrar = "Buenas noches, son las " + textoMostrar;
}

document.write(textoMostrar);

