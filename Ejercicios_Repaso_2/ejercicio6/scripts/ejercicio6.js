// Referencias a los botones y al cuadrado
let arriba = document.getElementById("arriba");
let abajo = document.getElementById("abajo");
let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let detener = document.getElementById("detener");
let cuadrado = document.getElementById("cuadrado");

// Constantes para controlar el movimiento y variable que cambia la direccion
const tiempo = 1;
const desplazamiento = 1;

// ID del intervalo y direccion en formato numero (1,2,3,4)
let intervalID = 0;
let direccion = 1;

// Eventos de botones 
arriba.addEventListener("click", moverArriba);
abajo.addEventListener("click", moverAbajo)
izquierda.addEventListener("click", moverIzquierda)
derecha.addEventListener("click", moverDerecha)
detener.addEventListener("click", parar);

// Evento de teclado para mover con las flechas y parar con el espacio
document.addEventListener("keydown", (event)=> {
    switch (event.key) {
        case "ArrowUp":
            moverArriba();
            break;
        case "ArrowDown":
            moverAbajo();
            break;
        case "ArrowLeft":
            moverIzquierda();
            break;
        case "ArrowRight":
            moverDerecha();
            break;
        case " ":
            parar();
            break;
    }
})

// Funciones que empiezan el movimiento si no lo esta ya y cambian la direccion
function moverArriba() {
    if(intervalID == 0) {
        intervalID = setInterval(mover, tiempo);
    }
    direccion = 1;
}
function moverAbajo() {
    if(intervalID == 0) {
        intervalID = setInterval(mover, tiempo);
    }
    direccion = 2;
}
function moverIzquierda() {
    if(intervalID == 0) {
        intervalID = setInterval(mover, tiempo);
    }
    direccion = 3;
}
function moverDerecha() {
    if(intervalID == 0) {
        intervalID = setInterval(mover, tiempo);
    }
    direccion = 4;
}

// Funcion que para el movimiento
function parar() {
    clearInterval(intervalID);
    intervalID = 0; 
}

// Funcion que mueve el cuadrado dependieno de la direccion
function mover(){
    switch (direccion) {
        case 1:
            cuadrado.style.top = parseInt(cuadrado.style.top) - desplazamiento + "px";
            break;
        case 2:
            cuadrado.style.top = parseInt(cuadrado.style.top) + desplazamiento + "px";
            break;
        case 3:
            cuadrado.style.left = parseInt(cuadrado.style.left) - desplazamiento + "px";
            break;
        case 4:
            cuadrado.style.left = parseInt(cuadrado.style.left) + desplazamiento + "px";
            break;
        default:
            break;
    }
}

