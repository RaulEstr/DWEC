// Cojo la referencia del area y del mensaje
let area = document.getElementById("area");
let mensaje = document.getElementById("mensaje");

// Añado al area un evento para que ejecute la funcion moverTexto cada vez que se mueve el raton dentro
area.addEventListener("mousemove", moverTexto);

// Funcion que mueve y cambia el texto a las coordenadas del raton
function moverTexto(event) {
        mensaje.textContent = "X: " + event.clientX +" Y: " + event.clientY;

        mensaje.style.left = event.clientX + "px";
        mensaje.style.top =  event.clientY + "px";
}