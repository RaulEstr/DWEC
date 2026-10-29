// Referencia al formulario y a los dos botones
let formu = document.getElementById("formu");
let botonEnviar = formu["enviar"];
let botonLimpiar = formu["limpiar"];

// Eventos de los botones
botonEnviar.addEventListener("click", enviar);
botonLimpiar.addEventListener("click", limpiar);

// Funcion que muestra por pantalla los values de los checkboxes seleccionados
function enviar(event) {
    event.preventDefault();

    let mensaje = "";
    let checkboxes = formu["opciones"];
    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            mensaje += "\n" + checkboxes[i].value;
        }
    }
    if(mensaje != "") {
        alert("Has seleccionado las opciones:" + mensaje);
    }
    else {
        alert("No se ha seleccionado ninguna opcion");
    }
}

// Funcion que limpia el formulario
function limpiar(event) {
    event.preventDefault();
    
    formu.reset();
}