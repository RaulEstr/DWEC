let pinturitas = document.getElementById("pinturitas");
let rojo = document.getElementById("rojo");
let azul = document.getElementById("azul");
let verde = document.getElementById("verde");
let blanco = document.getElementById("blanco");
let negro = document.getElementById("negro");
let amarillo = document.getElementById("amarillo");

rojo.addEventListener("click", cambiarColorSeleccionado);
azul.addEventListener("click", cambiarColorSeleccionado);
verde.addEventListener("click", cambiarColorSeleccionado);
blanco.addEventListener("click", cambiarColorSeleccionado);
negro.addEventListener("click", cambiarColorSeleccionado);
amarillo.addEventListener("click", cambiarColorSeleccionado);

let seleccionado = "blanco";
function cambiarColorSeleccionado(event) {
    
}

generarTabla();

function generarTabla() {
    for (let index1 = 0; index1 < 60; index1++) {
        let tr = document.createElement("tr");
        for(let index2 = 0; index2 < 30; index2++) {
            let td = document.createElement("td");
            td.style.width = "20px";
            td.style.height = "20px";
            td.addEventListener("click", ()=> {
                
            });

            tr.appendChild(td);
        }
        pinturitas.appendChild(tr);
    }
}