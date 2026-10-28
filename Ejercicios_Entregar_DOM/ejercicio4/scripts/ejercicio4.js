// let fecha = prompt("Introduce una fecha en formato correcto (dd/mm/aaaa):");
let fecha = "11/01/2001"
let dia;
let mes;
let anio;

const ANIOSMOSTRAR = 5;

let miDiv = document.createElement("div");
document.body.appendChild(miDiv);
miDiv.style.textAlign = "center";

let titulo = document.createElement("p");
titulo.textContent = "VALIDANDO FECHAS";
miDiv.appendChild(titulo);

let fechaIntroducida = document.createElement("p");
fechaIntroducida.textContent = "Fecha introducida: " + fecha;
miDiv.appendChild(fechaIntroducida);

if(fechaValida()) {
    let tabla = document.createElement("table");
    miDiv.appendChild(tabla);
    let linea1 = document.createElement("tr");
    tabla.appendChild(linea1);
    let linea2 = document.createElement("tr");
    tabla.appendChild(linea2);

    let titulo1 = document.createElement("td");
    linea1.appendChild(titulo1);
    titulo1.textContent = "el año...";

    let titulo2 = document.createElement("td");
    linea2.appendChild(titulo2);
    titulo2.textContent = "era un...";

    for(let i = 0; i < ANIOSMOSTRAR; i++) {
        
    }


    // estilos
    tabla.style.border = "1px solid black";
}
else {
    let valida = document.createElement("p");
    valida.textContent = "La fecha no es correcta";
    miDiv.appendChild(valida);
}

function fechaValida() {
    if(fecha[2] != "/" || fecha[5] != "/") {
        return false;
    }

    let partes = fecha.split("/");
    dia = parseInt(partes[0]);
    mes = parseInt(partes[1]);
    anio = parseInt(partes[2]);

    if(isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return false;
    }

    if(dia < 1 || dia > 31) {
        return false;
    }

    if(mes < 1 || mes > 12) {
        return false;
    }

    return true;
}