// Funcion que se ejecuta al pulsar el enlace "Seguir leyendo" de la pagina
function muestra() {
    // Cojo por IDs el elemento del texto oculto y el elemento del enlace
    textoOculto = document.getElementById("adicional");
    enlace = document.getElementById("enlace");

    // Cambio el class del elemento del texto oculto
    textoOculto.className = "visible";

    // Elimino en enlace
    padre = enlace.parentNode;
    padre.removeChild(enlace);
}