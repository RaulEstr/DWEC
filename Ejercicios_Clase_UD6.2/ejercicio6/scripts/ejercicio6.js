let boton = document.getElementById("boton");
let contra1Input = document.getElementById("contra1");
let contra2Input = document.getElementById("contra2");
let check = document.getElementById("check");
// let texto = document.getElementById("texto");

contra1Input.addEventListener("input", comprobarContra)
contra2Input.addEventListener("input", comprobarContra);
boton.addEventListener("click", enviar);
texto.addEventListener("mouseenter", ver);
texto.addEventListener("mouseleave", noVer);
// check.addEventListener("change", alternarVer);

function comprobarContra() {
    if(contra1Input.value != contra2Input.value) {
        texto.textContent = "Las contraseñas no coinciden";
        texto.style.color = "red";
    }
    else {
        texto.textContent = "Las contraseñas coinciden";
        texto.style.color = "green";
    }
}

function enviar(event) {
    event.preventDefault();
    if(contra1Input.value == contra2Input.value) {
        alert("Las contraseñas coinciden");
    }
    else {
        alert("Las contraseñas no coinciden");
    }
}

// function alternarVer() {
//     if(contra1Input.getAttribute("type") == "password") {
//         contra1Input.setAttribute("type", "text");
//         contra2Input.setAttribute("type", "text");
//     }
//     else {
//         contra1Input.setAttribute("type", "password");
//         contra2Input.setAttribute("type", "password");
//     }
// }

function ver() {
    contra1Input.setAttribute("type", "text");
    contra2Input.setAttribute("type", "text");
}
function noVer() {
    contra1Input.setAttribute("type", "password");
    contra2Input.setAttribute("type", "password");
}