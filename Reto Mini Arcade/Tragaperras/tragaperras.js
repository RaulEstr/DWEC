// Variable que controla las jugadas que tiene disponibles
let monedas = 10;

// Funcion que se ejecuta cada vez que pulsa en el boton de "JUGAR"
function jugar() {
    monedas--;

    // Variables para pintar en el HTML
    let linea1 = document.getElementById("linea1");
    let linea2 = document.getElementById("linea2");
    let linea3 = document.getElementById("linea3");
    let pintarPuntuacion = document.getElementById("puntuacion");
    let pintarMonedas = document.getElementById("monedas");

    // Creo un array de 9 numeros aleatorios entre el 1 y el 6
    let nums = [];
    for(let i = 0; i < 9; i++) {
        nums.push(Math.floor(Math.random() * 5) + 1);
    }

    // Muestro el resultado por pantalla
    linea1.innerHTML = "" + nums[0] + " - " + nums[3] + " - " + nums[6];
    linea2.innerHTML = "" + nums[1] + " - " + nums[4] + " - " + nums[7];
    linea3.innerHTML = "" + nums[2] + " - " + nums[5] + " - " + nums[8];

    // Calculo el resultado de la ronda de la siguiente manera:
    // Miro si los numeros de las horizontales y diagonales
    // Si son todo iguales, sumo al valor de la ronda el numero * 3
    // Si en la horizontal o diagonal hay numeros disintos, no sumo nada
    let ronda = 0;

    // Horizontal1
    if(nums[0] == nums[3] && nums[0] == nums[6]) {
        ronda += nums[0] * 3;
    }

    // Horizontal2
    if(nums[1] == nums[4] && nums[1] == nums[7]) {
        ronda += nums[1] * 3;
    }

    // Horizontal3
    if(nums[2] == nums[5] && nums[2] == nums[8]) {
        ronda += nums[2] * 3;
    }

    // Diagonal1
    if(nums[0] == nums[4] && nums[0] == nums[8]) {
        ronda += nums[0] * 3;
    }

    // Diagonal2
    if(nums[2] == nums[4] && nums[2] == nums[6]) {
        ronda += nums[2] * 3;
    }

    // Le sumo el resultado a las monedas y le saco un mensaje dependiendo si ha consguido monedas o no
    monedas += ronda;
    if(ronda == 0) {
        pintarPuntuacion.innerHTML = "<p>¡No has conseguido ninguna moneda!</p>";
    }
    else {
        pintarPuntuacion.innerHTML = "<p>¡Has ganado <strong>" + ronda + "</strong> monedas!</p>";
    }
    
    pintarMonedas.innerHTML = "<h3>Monedas: " + monedas + "</h3>";

    // Si se queda sin monedas, el juego se cierra
    if(monedas == 0) {
        alert("HAS PERDIDO")
        cerrarVentana();
    }

    if(monedas >= 100) {
        alert("HAS GANADO")
        cerrarVentana();
    }
}

function cerrarVentana() {
    window.close();
}