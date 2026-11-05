// Cojo la refencia del body
let body = document.body;

// Llamo a la funcion comprobarCtrlS cada vez que se pulsa una tecla
body.addEventListener("keydown", comprobarCtrlS);

// Funcion que comprueba que se ha pulsado en Control al mismo tiempo que la tecla S
// Tambien hago el preventDefault para que no abra el guardado por defecto que tienen los navegadores
function comprobarCtrlS(event) {
    event.preventDefault();
    if(event.ctrlKey && event.key.toLowerCase() == "s") {
        alert("¡Guardado!'");
    }
}