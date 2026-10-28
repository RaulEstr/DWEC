let numRandom = Math.floor(Math.random() * 100) + 1;
let contenido = document.getElementById("contenido");

let intentos = 0;
function probar() {
    let valor = document.getElementById("num").value;
    intentos++;

    if(valor < numRandom) {
        contenido.innerHTML = "Mi numero es mayor";
    }
    if(valor > numRandom) {
        contenido.innerHTML = "Mi numero es menor";
    }
    if(valor == numRandom) {
        contenido.innerHTML = "Has acertado mi numero " + valor + " en " + intentos + " intentos";
    }
}

function reload() {
    location.reload();
}