// Cojo referencias a todos los elementos del HTML
let ancho1 = document.getElementById("ancho1");
let ancho2 = document.getElementById("ancho2");
let alto1 = document.getElementById("alto1");
let alto2 = document.getElementById("alto2");
let top1 = document.getElementById("top1");
let top2 = document.getElementById("top2");
let left1 = document.getElementById("left1");
let left2 = document.getElementById("left2");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

let formulario = document.getElementById("formulario");
let botonCrear = document.getElementById("botonCrear");
let botonReiniciar = document.getElementById("botonReiniciar");

let cuadrados = document.getElementById("cuadrados");

// Variable que va a controlar el cuadrado seleccionado
let seleccionado = null;

// Constante para controlar la cantidad de desplazamiento de los cuadrados
const movimiento = 20;

// Evento click del boton de "Crear cuadrados"
botonCrear.addEventListener("click", (event)=> {
    event.preventDefault();

    // Compruebo que todos los campos del primer fieldset sean correctos
    error1.innerHTML = "";
    if(isNaN(parseInt(ancho1.value)) || ancho1.value <= 0) {
        error1.innerHTML += "<p>El ancho tiene que ser mayor a 0</p>"
    }
    if(isNaN(parseInt(alto1.value)) || alto1.value <= 0) {
        error1.innerHTML += "<p>El alto tiene que ser mayor a 0</p>"
    }
    if(isNaN(parseInt(top1.value)) || top1.value < 0) {
        error1.innerHTML += "<p>El top tiene que ser mayor o igual a 0</p>"
    }
    if(isNaN(parseInt(left1.value)) || left1.value < 0) {
        error1.innerHTML += "<p>El left tiene que ser mayor o igual a 0</p>"
    }

    // Compruebo que todos los campos del segundo fieldset sean correctos
    error2.innerHTML = "";
    if(isNaN(parseInt(ancho2.value)) || ancho2.value <= 0) {
        error2.innerHTML += "<p>El ancho tiene que ser mayor a 0</p>"
    }
    if(isNaN(parseInt(alto2.value)) || alto2.value <= 0) {
        error2.innerHTML += "<p>El alto tiene que ser mayor a 0</p>"
    }
    if(isNaN(parseInt(top2.value)) || top2.value < 0) {
        error2.innerHTML += "<p>El top tiene que ser mayor o igual a 0</p>"
    }
    if(isNaN(parseInt(left2.value)) || left2.value < 0) {
        error2.innerHTML += "<p>El left tiene que ser mayor o igual a 0</p>"
    }

    // En caso de que algun campo del primer fieldset este mal lo muestro
    if(error1.innerHTML != "") {
        error1.style.display = "block";
    }
    else {
        error1.style.display = "none";
    }

    // En caso de que algun campo del segundo fieldset este mal lo muestro
    if(error2.innerHTML != "") {
        error2.style.display = "block";
    }
    else {
        error2.style.display = "none";
    }

    // Si todo esta correcto, llamo a la funcion crearCuadrados
    if(error1.innerHTML == "" && error2.innerHTML == "") {
        crearCuadrados()
    }

});

// Funcion que se ejecuta cuando se pulsa el boton "Crear cuadrados" y todos los campos estan validados
function crearCuadrados() {
    // Oculto el formulario, muestro el boton para reiniciar y muestro el contenedor donde van a estar los cuadrados
    formulario.style.display = "none";
    botonReiniciar.style.display = "block";
    cuadrados.style.display = "block";

    // Creo el primer cuadrado con los valores del primer fieldset
    let cuadrado1 = document.createElement("div");
    cuadrado1.style.width = ancho1.value + "px";
    cuadrado1.style.height = alto1.value + "px";
    cuadrado1.style.left = left1.value + "px";
    cuadrado1.style.top = top1.value + "px";
    cuadrado1.style.backgroundColor = color1.value;
    cuadrado1.style.position = "absolute";
    cuadrado1.style.zIndex = 5;

    // Creo el segundo cuadrado con los valores del segundo fieldset
    let cuadrado2 = document.createElement("div");
    cuadrado2.style.width = ancho2.value + "px";
    cuadrado2.style.height = alto2.value + "px";
    cuadrado2.style.left = left2.value + "px";
    cuadrado2.style.top = top2.value + "px";
    cuadrado2.style.backgroundColor = color2.value;
    cuadrado2.style.position = "absolute";
    cuadrado2.style.zIndex = 5;

    // Añado los cuadros al contenedor de los cuadros y les añado un evento de tipo click que llama a la funcion seleccionar
    cuadrados.appendChild(cuadrado1);
    cuadrados.appendChild(cuadrado2);

    cuadrado1.addEventListener("click", seleccionar);
    cuadrado2.addEventListener("click", seleccionar);
}

// Funcion que se llama al hacer click en un cuadrado
function seleccionar(event) {
    // Recorro los hijos que tiene el contenedor de cuadrados, si el hijo coincide con el cuadrado al que se le ha hecho click
    // Se guarda el hijo en la variable seleccionado, se le cambia su zIndex, se le pone un borde rojo y se activa el evento de documento al pulsar el teclado
    // Al otro cuadrado se le quita el borde y se le cambia el zIndex para que aparezca por debajo
    for(let i = 0; i < cuadrados.children.length; i++) {
        if(cuadrados.children[i] == event.target) {
            seleccionado = cuadrados.children[i];
            cuadrados.children[i].style.border = "3px solid red";
            cuadrados.children[i].style.zIndex = 6;
            document.addEventListener("keydown", mover);
        }
        else {
            cuadrados.children[i].style.border = "";
            cuadrados.children[i].style.zIndex = 4;
        }
    }
}

// Funcion que controla la tecla que se ha pulsado, si se pulsan las teclas de direccion el cuadrado seleccionado se mueve a la direccion de la flecha
// Tambien controla que se pulse la tecla Escape, con la cual se deselecciona el cuadrado
function mover(event) {
    if(seleccionado != null) {
        switch (event.key) {
        case "ArrowUp":
            if(parseInt(seleccionado.style.top) - movimiento < 0) {
                seleccionado.style.top = "0px";
            }
            else {
                seleccionado.style.top = parseInt(seleccionado.style.top) - movimiento + "px";
            }   
            break;
        case "ArrowDown":
            if(parseInt(seleccionado.style.top) + parseInt(seleccionado.style.height) + movimiento > screen.availHeight) {
                seleccionado.style.top = screen.availHeight - parseInt(seleccionado.style.height) + "px";
            }
            else {
                seleccionado.style.top = parseInt(seleccionado.style.top) + movimiento + "px";
            }
            
            break;
        case "ArrowLeft":
            if(parseInt(seleccionado.style.left) - movimiento < 0) {
                seleccionado.style.left = "0px";
            }
            else {
                seleccionado.style.left = parseInt(seleccionado.style.left) - movimiento + "px";
            }
            break;
        case "ArrowRight":
            if(parseInt(seleccionado.style.left) + parseInt(seleccionado.style.width) + movimiento > screen.availWidth) {
                seleccionado.style.left = screen.availWidth - parseInt(seleccionado.style.width) + "px";
            }
            else {
                seleccionado.style.left = parseInt(seleccionado.style.left) + movimiento + "px";
            }          
            break;
        case "Escape":
            seleccionado.style.border = "";
            seleccionado = null;
            document.removeEventListener("keydown", mover);
            break;
    }
    }
}

// Evento click del boton de reinicio, devuelve la ventana a su estado inicial
botonReiniciar.addEventListener("click", (event)=> {
    event.preventDefault();
    formulario.reset();
    formulario.style.display = "block";
    cuadrados.style.display = "none";
    botonReiniciar.style.display = "none";
    cuadrados.removeChild(cuadrados.children[0]);
    cuadrados.removeChild(cuadrados.children[0]);
    document.removeEventListener("keydown", mover);
});