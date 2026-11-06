let iniciar = document.getElementById("iniciar");
let detener = document.getElementById("detener");
let cuadrado = document.getElementById("cuadrado");

const tiempo = 1;
const desplazamiento = 1;
let direccion = "der";

let intervalID = 0;
iniciar.addEventListener("click", ()=> {
    if(intervalID == 0) {
        intervalID = setInterval(mover, tiempo);
    }
    
});

detener.addEventListener("click", ()=>{
    clearInterval(intervalID);
    intervalID = 0;
});

function mover(){
    if(direccion == "der") {
        cuadrado.style.left = parseInt(cuadrado.style.left) + desplazamiento + "px";
        if(parseInt(cuadrado.style.left) + parseInt(cuadrado.style.width) > screen.availWidth) {
            direccion = "izq";
        }
    }
    else {
        cuadrado.style.left = parseInt(cuadrado.style.left) - desplazamiento + "px";
        if(parseInt(cuadrado.style.left) == 0) {
            direccion = "der";
        }
    }
    
}

