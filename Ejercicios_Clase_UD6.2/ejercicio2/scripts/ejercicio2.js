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

    let radiosProc = formu["procesador"];
    let radiosSistema = formu["sistema"];
    alert("Has seleccionado el procesador " + radiosProc.value + " con sistema operativo " + radiosSistema.value);
}

// Funcion que limpia el formulario
function limpiar(event) {
    event.preventDefault();
    
    formu.reset();
}