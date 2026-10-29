let formu = document.getElementById("formu");

let edad = formu["edad"];
edad.addEventListener("input", comprobarEdad);

function comprobarEdad() {
    if(edad.value < 18) {
        edad.style.border = "1px solid red";
    }
    else {
        edad.style.border = ""
    }
}