// Objeto Cita con constructor de dos propiedades y metodo para devolver la informacion
function Cita(nombre, fecha) {
    this.nombre = nombre;
    this.fecha = new Date(fecha);

    this.infoCita=function() {
        return "Nombre de la cita: " + this.nombre + ", fecha: " + this.fecha.toLocaleDateString();
    }
}

// Funcion que se va a ejecutar al darle al boton de "Guardar cita" de la ventana
function guardar() {
    let nombre = (document.getElementById("nombre").value).trim();
    let fecha = document.getElementById("fecha").value;

    // Compruebo que el usuario ha rellenado todos los datos de la cita, si faltan datos se lo indico
    if(nombre == "" || fecha == "") {
        alert("Faltan datos");
    }
    else {
        // Creo la cita y la guardo en el array. Tambien vacio los campos del formulario
        let cita = new Cita(nombre, fecha);
        citas.push(cita);
        document.getElementById("nombre").value = "";
        document.getElementById("fecha").value = "";
        alert("Se ha guardado la cita"); 
    }
}

// Funcion que se va a ejecutar al darle al boton de "Ver citas" de la ventana
function ver() {
    let ventana = window.open("","","width=800,height=400");
    
    // Compruebo si existen citas
    if(citas.length == 0) {
        ventana.document.write("<p>No hay citas guardadas</p>")
    }
    else {
        // Recorro el array de citas mostrando por pantalla la info devuelta por la funcion
        citas.forEach(cita => {
            ventana.document.write("<p>" + cita.infoCita() + "</p>")
        });
    }
    ventana.document.write("<button onclick=\"window.close()\">Cerrar ventana</button>");
}

// Array en el que se van a ir guardando las citas
let citas = [];