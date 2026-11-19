// Cojo las referencias a los elementos de la página
let capa = document.getElementById("capa");
let imagen = document.getElementById("imagen");
let victoria = document.getElementById("victoria");
let reset = document.getElementById("reset");

// Variable que va a controlar el intervalo
let intervalID = 0;

// Inicio del juego
prepararMover();

// Evento que ejecuta el intervalo de movimiento de la imagen
imagen.addEventListener("mouseenter", prepararMover);

// Función que crea el intervalo que mueve la imagen
function prepararMover() {
    if(intervalID == 0) {
        intervalID = setInterval(mover, 100);
    }
}

// Funcion que mueve la imagen a posicion aleatoria de la pantalla
function mover() {
    clearInterval(intervalID);
    intervalID = 0;

    let nuevoX = Math.floor(Math.random() * screen.availWidth - parseInt(capa.style.width));
    let nuevoY = Math.floor(Math.random() * screen.availHeight - parseInt(capa.style.height));

    if(nuevoX < 0) {
        nuevoX = 0;
    }

    if(nuevoY < 0) {
        nuevoY = 0;
    }

    capa.style.left = nuevoX + "px";
    capa.style.top = nuevoY + "px";
}

// Funcion si se logra hacer click en la imagen, para el intervalo y muestra la capa de victoria
imagen.addEventListener("click", (event) => {
    clearInterval(intervalID);
    intervalID = 0;
    victoria.style.display = "block";
    imagen.removeEventListener("mouseenter", prepararMover);
})

// Funcion del boton de reset, oculta la capa de victoria y vuelve a habilitar el movimiento de la imagen
reset.addEventListener("click", (event) => {
    event.preventDefault();
    victoria.style.display = "none";
    imagen.addEventListener("mouseenter", prepararMover);
});