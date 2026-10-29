// Referencia al formulario y a los dos botones
let formu = document.getElementById("formu");
let botonEnviar = formu["enviar"];

// Eventos de los botones
botonEnviar.addEventListener("click", enviar);

// Funcion que muestra por pantalla los values de los checkboxes seleccionados
function enviar(event) {
    event.preventDefault();

    let nombre = formu["nombre"].value;
    let apellido = formu["apellido"].value;
    let email = formu["email"].value;
    let nacim = formu["nacimiento"].value;

    if(nombre.trim() == "" || apellido.trim() == "" || email.trim() == "" || nacim == "") {
        alert("Faltan datos")
    }
    else {
        alert("Nombre: " + nombre + "\nApellidos: " + apellido + "\nEmail: " + email + "\nFecha de nacimiento: " + nacim);
    }
    
}

