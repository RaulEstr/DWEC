// Cojo la referencia al div, a cada color, al span para indicar el color y al boton de reset
let pinturitas = document.getElementById("pinturitas");
let rojo = document.getElementById("rojo");
let azul = document.getElementById("azul");
let verde = document.getElementById("verde");
let blanco = document.getElementById("blanco");
let negro = document.getElementById("negro");
let amarillo = document.getElementById("amarillo");
let seleccionado = document.getElementById("seleccionado");
let reset = document.getElementById("reset");

// Le añado a cada celda de color el mismo evento para cambiar el color seleccionado
rojo.addEventListener("click", cambiarColorSeleccionado);
azul.addEventListener("click", cambiarColorSeleccionado);
verde.addEventListener("click", cambiarColorSeleccionado);
blanco.addEventListener("click", cambiarColorSeleccionado);
negro.addEventListener("click", cambiarColorSeleccionado);
amarillo.addEventListener("click", cambiarColorSeleccionado);

// Le añado al boton de reset la funcion que resetea la tabla
reset.addEventListener("click", ()=> {
    pinturitas.innerHTML = "";
    generarTabla();
});

// Por defecto el colo va a ser blanco y cambio de color seleccionado por el nombre del ID de cada color
let colorSeleccionado = "blanco";
function cambiarColorSeleccionado(event) {
    colorSeleccionado = event.target.id;
    seleccionado.textContent = colorSeleccionado;
}

// Creo una variable que controle y está clickando en la ventana
let clickado = false;
document.addEventListener("mousedown", () => {
    clickado = true;
});
document.addEventListener("mouseup", () => {
    clickado = false;
})

function generarTabla() {
    // Creo una tabla de 60x30 celdas de cada celda siendo de 20x20px
    for (let index1 = 0; index1 < 60; index1++) {
        let tr = document.createElement("tr");
        for(let index2 = 0; index2 < 30; index2++) {
            let td = document.createElement("td");
            td.style.width = "20px";
            td.style.height = "20px";
           
            // A cada celda le añado un evento de mouseover (y un mousedown para que tambien pinte la primera celda), que llama la funcion pintar
            td.addEventListener("mouseover", pintar);
            td.addEventListener("mousedown", pintar);

            tr.appendChild(td);
        }
        pinturitas.appendChild(tr);
    }
}

// Funcion que cambia el backgroundColor al color seleccionado en caso de que se este haciendo click
function pintar(event) {
    if(clickado) {
        switch (colorSeleccionado) {
            case "blanco":
                event.target.style.backgroundColor = "white";
                break;
            case "negro":
                event.target.style.backgroundColor = "black";
                break;
            case "rojo":
                event.target.style.backgroundColor = "red";
                break;
            case "azul":
                event.target.style.backgroundColor = "blue";
                break;
            case "verde":
                event.target.style.backgroundColor = "green";
                break;
            case "amarillo":
                event.target.style.backgroundColor = "yellow";
                break;
        }
    }
}

// Llamo a la funcion que genera la tabla 
generarTabla();