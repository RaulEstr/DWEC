// Funcion que se va a ejecutar el pulsar el boton "Jugar" de la ventana
function jugar() {
    // Genero el resultado aleatorio
    let opciones = ["Piedra", "Papel", "Tijera"];
    let random = Math.floor(Math.random() * 3);
    let opcionPC = opciones[random];

    // Recojo la opcion introducida por el usuario
    let opcionUsuario = document.getElementById("selector").value;
    
    // Empiezo a formar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.innerHTML += "<p>Opcion seleccionada: " + opcionUsuario + "</p>";
    resultado.innerHTML += "<p>Opcion del ordenador: " + opcionPC + "</p>";

    // Caso de empate
    if(opcionPC == opcionUsuario) {
        resultado.innerHTML += "<p>Empate</p>";
        return;
    }

    // Casos en los que el usuario pierde
    if(opcionPC == "Piedra" && opcionUsuario == "Tijera") {
        resultado.innerHTML += "<p>Has perdido</p>";
        return;
    }

    if(opcionPC == "Papel" && opcionUsuario == "Piedra") {
        resultado.innerHTML += "<p>Has perdido</p>";
        return;
    }

    if(opcionPC == "Tijera" && opcionUsuario == "Papel") {
        resultado.innerHTML += "<p>Has perdido</p>";
        return;
    }

    // Casos en los que el usuario gana
    if(opcionUsuario == "Piedra" && opcionPC == "Tijera") {
        resultado.innerHTML += "<p>Has Ganado</p>";
        return;
    }

    if(opcionUsuario == "Papel" && opcionPC == "Piedra") {
        resultado.innerHTML += "<p>Has Ganado</p>";
        return;
    }

    if(opcionUsuario == "Tijera" && opcionPC == "Papel") {
        resultado.innerHTML += "<p>Has Ganado</p>";
    }
}