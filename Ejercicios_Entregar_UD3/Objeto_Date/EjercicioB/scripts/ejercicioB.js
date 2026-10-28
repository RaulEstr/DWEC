// Ejercicio practicamente reutilizado del ejercicio4

// Guardo la fecha actual
let ahora = new Date;

// Guardo en variables cada hora
let hora = ahora.getHours();
let minutos = ahora.getMinutes();
let segundos = ahora.getSeconds();

// Empiezo el string que voy a sacar por pantalla
let formatoFecha = "";

// Si la hora está entre las 6 (incluido) y las 12, saco un buenos dias
if(hora >= 6 && hora < 12) {
    formatoFecha += "Buenos días, son las ";
}

// Si la hora está entre las 12 (incluido) y las 20, saco un buenas tardes
if(hora >= 12 && hora < 20) {
    formatoFecha += "Buenas tardes, son las ";
}

// Si la hora está entre las 20 (incluido) y las 6, saco un buenas noches
if(hora >= 20 && hora < 6) {
    formatoFecha += "Buenas noches, son las ";
}

// Compruebo la hora para no sacar solo un digito
if (hora < 10) {
    formatoFecha += "0" + hora.toString();
    }
else {
    formatoFecha += hora.toString();
}
formatoFecha += ":";  

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

document.write(formatoFecha);
