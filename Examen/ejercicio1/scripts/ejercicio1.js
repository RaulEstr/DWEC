// Funcion que se va a ejecutar al pulsar el boton "JUGAR" de la pagina
function adivinar() {
    // Variables de los datos introducidos
    let sup = parseInt(document.getElementById("limiteSup").value);
    let inf = parseInt(document.getElementById("limiteInf").value);
    let intentos = parseInt(document.getElementById("intentos").value);
    let info = document.getElementById("info");
    info.innerHTML = "";

    // Controlar que los datos sean numeros y sean correctos para el buen funcionamiento del programa
    // Si hay datos mal, muestra un mensaje en la pantalla y no empieza el juego
    let jugar = true;
    if(isNaN(sup) || isNaN(inf) || isNaN(intentos)) {
        info.innerHTML += "<p>Hay valores introducidos que no son numeros</p>";
        jugar = false;
    } 
    else {
        if(sup <= inf) {
            info.innerHTML += "<p>El limite superior tiene que ser mayor al inferior</p>";
            jugar = false;
        }
        if(intentos < 1) {
            info.innerHTML += "<p>Tienes que poner al menos 1 intento</p>";
            jugar = false;
        }
    }

    // Si los datos estan correctos, empieza el juego
    if(jugar) {
        // Genero el numero aleatorio entre el limite inferior y superior, ambos incluidos
        let numAdivinar = inf + Math.floor(Math.random() * (sup-inf + 1));

        // Bucle con la condicion de victoria y derrota
        let acertado = false;
        let contador = 1;
        while(!acertado && contador <= intentos) {
            // Pido un numero al usuario que valido que sea correcto
            let num = parseInt(prompt("Intento " + contador + " de " + intentos + ", introduce numero"));
            if(isNaN(num)) {
                alert("Tienes que introducir un numero valido, este intento no se contará");
            }
            else {
                // Comprobacion de victoria
                if(num == numAdivinar) {
                    acertado = true;
                }
                else {
                    // Si no es el ultimo intento, se le van a dar pistas
                    if(contador != intentos) {
                        if(num < numAdivinar) {
                            alert("El numero a adivinar es MAYOR");
                        }
                        else if(num > numAdivinar) {
                            alert("El numero a adivinar es MENOR");
                        }
                    }
                    contador++;
                }
            }
        }

        // Condicion final en la que le muestro si ha ganado o ha perdido
        if(acertado) {
            info.innerHTML = "<p>Has GANADO, el numero a adivinar era " + numAdivinar + " y lo has acertado en el intento " + contador + "</p>";
        }
        else {
            info.innerHTML = "<p>Has PERDIDO, el numero a adivinar era " + numAdivinar + "</p>";
        }
    }
}