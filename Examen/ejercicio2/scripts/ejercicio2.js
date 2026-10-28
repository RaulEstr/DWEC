// Variables globales de la pagina
let ventana;
let jugadores = [];

// Clase jugador con atributos "nombre", "puntacion" y metodo "informacion()" que devuelve un string con ambos atributos
function Jugador(nombre, puntuacion) {
    this.nombre = nombre;
    this.puntuacion = puntuacion;
    
    this.informacion=function() {
        return "Nombre: " + this.nombre + ", puntuación: " + this.puntuacion;
    }
}

// Funcion que se va a ejecutar cuando se pulsa el boton "Guardar jugador" de la pagina
function guardar() {

    // Variables de los datos introducidos
    let nombre = (document.getElementById("nombre").value).trim();
    let puntuacion = parseInt(document.getElementById("puntuacion").value);
    let nombreLinea = document.getElementById("nombreLinea");
    let puntuacionLinea = document.getElementById("puntuacionLinea");
    nombreLinea.innerHTML = "";
    puntuacionLinea.innerHTML = "";
    
    let aniadir = true;
    // Compruebo que el nombre introducido no esta vacio y que el nombre no exista entre los ya introducidos
    if(nombre == "") {
        aniadir = false;
        nombreLinea.innerHTML = "<p>Tienes que introducir un nombre</p>";
    }
    else {
        jugadores.forEach(jugador => {
            if(jugador.nombre.toLowerCase() == nombre.toLowerCase()) {
                nombreLinea.innerHTML = "<p>El nombre del jugador ya existe</p>";
                aniadir = false;
            }
        });
    }

    // Compruebo que la puntuacion sea un numero y que este entre los valores 1 y 5
    if(isNaN(puntuacion)) {
        puntuacionLinea.innerHTML = "<p>Tienes que introducir un numero</p>"
        aniadir = false;
    } else if(puntuacion < 1 || puntuacion > 5) {
        puntuacionLinea.innerHTML = "<p>La puntuacion tiene que ser entre 1 y 5</p>"
        aniadir = false;
    }

    // Si los datos estan correctos añado un nuevo Jugador al array
    if(aniadir) {
        jugadores.push(new Jugador(nombre, puntuacion));
    }
}

// Funcion que se va a ejecutar al pulsar el boton "Ver jugadores" de la pagina
function verJugadores() {

    // Compruebo que la ventana exista o este cerrada para abrirla
    if(!ventana || ventana.closed) {
        ventana = window.open("","","width=650,height=480");
        ventana.document.write("<h1>Jugadores registrados</h1>");

        // Compruebo la cantidad de jugadores para mostrar un mensaje o la lista de los jugadores
        if(jugadores.length == 0) {
            ventana.document.write("<p>Todavía no hay jugadores registrador</p>");
        }
        else {
            // Muestro en modo lista desordenada cada jugador utilizando su funcion informacion()
            ventana.document.write("<ul>");
            jugadores.forEach(jugador => {
                ventana.document.write("<li>"+jugador.informacion()+"</li>");
            });
            ventana.document.write("</ul>");
        }
        ventana.document.write("<button onclick=\"window.close()\">Cerrar</button>")
    }
    else {
        alert("La ventana ya está abierta");
    }
}

