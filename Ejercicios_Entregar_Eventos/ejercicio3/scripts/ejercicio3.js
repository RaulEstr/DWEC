// Cojo la referencia al input
let texto = document.getElementById("texto");

// Llamo a la funcion mostrarInfo cada vez que levanta una tecla
texto.addEventListener("keyup", mostrarInfo);

// Creo un p y lo añado con la informacion de la tecla pulsada
function mostrarInfo(event) {
    let p = document.createElement("p");
    p.textContent = "Has pulsado la tecla: " + event.keyCode + " que corresponde a la tecla " + event.key;
    document.body.appendChild(p);
}
