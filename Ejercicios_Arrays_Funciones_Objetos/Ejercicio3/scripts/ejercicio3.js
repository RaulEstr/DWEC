let discos = [];

function Disco() {
    this.nombre = "";
    this.autor = "";
    this.anio = "";
    this.genero = "";
    this.localizacion = 0;
    this.prestado = false;

    this.rellenar=function(nombre, autor, anio, genero, localizacion) {
        this.nombre = nombre;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
        this.localizacion = localizacion;
    }

    this.cambiarLocalizacion=function(nuevaLocalizacion) {
        this.localizacion = nuevaLocalizacion;
    }

    this.alternarPrestado=function() {
        this.prestado = !this.prestado;
    }

    // A este metodo le he puesto que reciba una variable que será el elemento HTML en el que mostrará la información
    this.mostrarInfo=function(donde) {
        let cadena = "<p>";
        cadena += "Disco: " + this.nombre + "<br>";
        cadena += "Autor: " + this.autor + "<br>";
        cadena += "Del año: " + this.anio + "<br>";
        cadena += "Género: " + this.genero + "<br>";
        cadena += "Está en la estantería: " + this.localizacion + "<br>"
        if(this.prestado) {
            cadena += "Está prestado";
        }
        else {
            cadena += "No está prestado";
        }
        cadena += "</p>"

        donde.innerHTML += cadena;
    }
}

// Funcion que recoge los datos introducidos en el primer formulario y crea un disco. Muestra mensaje de error si falta algun dato
function aniadir() {
    let nombre = document.getElementById("nombre").value;
    let autor = document.getElementById("autor").value;
    let anio = document.getElementById("anio").value;
    let genero = document.getElementById("genero").value;
    let localizacion = document.getElementById("localizacion").value;
    let error = document.getElementById("error1");

    let disco = new Disco();
    disco.rellenar(nombre, autor, anio, genero, localizacion);
    
    if(nombre == "" || autor == "" || anio == "" || localizacion == "") {
        error.innerHTML = "No se ha podido añadir el disco, faltan datos";
    }
    else {
        discos.push(disco);
        mostrar();
        error.innerHTML = "";
    }
}

// Funcion que recoge los datos introducidos en el segundo formulario y actualiza la localizacion del disco introducido
// Si no introduce datos o el disco que ha introducido no existe, muestra error
function cambiarEstanteria() {
    let nombre = document.getElementById("nombre2").value;
    let estanteria = document.getElementById("nuevaLocalizacion").value;
    let error = document.getElementById("error2");

    if(nombre == "" || estanteria == "") {
        error.innerHTML = "Faltan datos para cambiar un disco de estantería";
    }
    else {
        let cambiado = false;
        discos.forEach(disco => {
            if(disco.nombre == nombre) {
                cambiado = true;
                disco.cambiarLocalizacion(estanteria);
                mostrar();
                error.innerHTML = "";
            }
        });
        if(!cambiado) {
            error.innerHTML = "El disco que has introducido no existe";
        }
    }
}

// Funcion que alterna el estado del disco introducido en el tercer formulario
// Si no introduce datos o el disco que ha introducido no existe, muestra error
function cambiarPrestado() {
    let nombre = document.getElementById("nombre3").value;
    let error = document.getElementById("error3");

    if(nombre == "") {
        error.innerHTML = "Faltan datos para cambiar el estado de prestado del disco";
    }
    else {
        let cambiado = false;
        discos.forEach(disco => {
            if(disco.nombre == nombre) {
                cambiado = true;
                disco.alternarPrestado();
                mostrar();
                error.innerHTML = "";
            }
        });
        if(!cambiado) {
            error.innerHTML = "El disco que has introducido no existe";
        }
    }
}

// Funcion que se llama al añadir o modificar datos de un disco
function mostrar() {
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "";
    if(discos.length == 0) {
        contenido.innerHTML = "Todavía no se han introducido discos";
    }
    else {
        discos.forEach(disco => {
            disco.mostrarInfo(contenido);
        });
    }
}