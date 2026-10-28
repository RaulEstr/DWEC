// Variables
let fecha = prompt("Introduce una fecha en formato correcto (dd/mm/aaaa):");
let dia;
let mes;
let anio;

// Constantes
const ANIOSMOSTRAR = 5;
const DIASSEMANA = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

// Div principal
let miDiv = document.createElement("div");
document.body.appendChild(miDiv);

// Tuitulo
let titulo = document.createElement("p");
titulo.textContent = "VALIDANDO FECHAS";
miDiv.appendChild(titulo);

// Fecha
let fechaIntroducida = document.createElement("p");
fechaIntroducida.textContent = "Fecha introducida: " + fecha;
miDiv.appendChild(fechaIntroducida);

// Estilo del div y del titulo
miDiv.style.textAlign = "center";
titulo.style.fontWeight = "bold";
titulo.style.textDecoration = "underline";

if(fechaValida()) {
    // Texto de "Ese mismo dia en..."
    let eseDia = document.createElement("p");
    miDiv.appendChild(eseDia);
    eseDia.textContent = "Ese mismo día en...";

    // Tabla con líneas y primeros td
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

    // Bucle para añadir tds dependiendo de la constante ANIOSMOSTRAR
    for(let i = 1; i <= ANIOSMOSTRAR; i++) {
        // Año
        let elanio = document.createElement("td");
        linea1.appendChild(elanio);
        elanio.textContent = anio - ANIOSMOSTRAR + i;

        // Dia de la semana
        let eraun = document.createElement("td");
        linea2.appendChild(eraun);
        let date = new Date(mes + "/" + dia + "/" + (anio - ANIOSMOSTRAR + i));
        eraun.textContent = DIASSEMANA[date.getDay()];
    }

    // Estilo de la tabla
    tabla.style.border = "1px solid black";
    tabla.style.marginLeft = "auto";
    tabla.style.marginRight = "auto";
}
else {
    // Indicar que la fecha no es correcta
    let valida = document.createElement("p");
    valida.textContent = "La fecha no es correcta";
    miDiv.appendChild(valida);
}

// Funcion que comprueba que la fecha sea correcta
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