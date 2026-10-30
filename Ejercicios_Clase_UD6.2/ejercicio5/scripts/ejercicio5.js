let formu = document.getElementById("formu");

let edad = formu["edad"];
edad.addEventListener("input", comprobarEdad);

let boton = document.getElementById("boton");
boton.addEventListener("click", comprobarEdad);

function comprobarEdad() {
    if(edad.value == "") {
        edad.style.border = "";
    }
    else if(edad.value < 18) {
        edad.style.border = "5px solid red";
        // edad.classList.toggle("rojo");
    }
    else {
        edad.style.border = "5px solid green";
        // edad.classList.toggle("rojo");
    }
}