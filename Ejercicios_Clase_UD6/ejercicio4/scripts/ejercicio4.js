// Referencia a los botones
let boton = document.getElementById("boton");
let input = document.getElementById("input");

// Eventos de los botones
boton.addEventListener("click", cambiarTexto);
input.addEventListener("click", cambiarTextoAtributo);

// Funcion que alterna el texto del boton entre "Iniciar" y "Detener"
function cambiarTexto(event) {
    if(event.target.textContent == "Iniciar") {
        event.target.textContent = "Detener";
    }
    else {
        event.target.textContent = "Iniciar";
    }
}

// Funcion que cambia alterna el contenido del atributo "value" del input
function cambiarTextoAtributo(event) {
    if(event.target.getAttribute("value") == "Iniciar") {
        event.target.setAttribute("value", "Detener"); 
    }
    else {
        event.target.setAttribute("value", "Iniciar");
    }
}