// Cojo la referencia del cuadrado
let cuadrado = document.getElementById("cuadrado");

// Le añado un evento de tipo click que llama a la funcion mostrarCords
cuadrado.addEventListener("click", mostrarCords);

// Funcion que crea y añade en el body un elemento P cada vez que se hace click en el cuadrado
function mostrarCords(event) {
    let p = document.createElement("p");
    p.textContent = "Has hecho click en X: " + event.clientX + ", Y: " + event.clientY;
    document.body.appendChild(p);
}