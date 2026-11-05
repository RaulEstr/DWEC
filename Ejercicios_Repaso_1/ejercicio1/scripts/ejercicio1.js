let capa = document.getElementById("capa");

let nombre = document.getElementById("nombre");
let password = document.getElementById("password");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");

let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    
    let ul = document.createElement("ul");
    if(!/^[a-zA-Z]+&/.test(nombre.value)) {
        let li = document.createElement("li");
        li.textContent = "El nombre unicamente puede contener letras";
        ul.appendChild(li);
    }
    
    if(!/^[0-9]{9}&/.test(telefono.value)) {
        let li = document.createElement("li");
        li.textContent = "El telefono tienne que ser exactamente 9 digitos";
        ul.appendChild(li);
    }

    if(password.value.length < 8) {
        let li = document.createElement("li");
        li.textContent = "La cotnraseña debe tener 8 o mas caracteres";
        ul.appendChild(li);
    }

    if(!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        let li = document.createElement("li");
        li.textContent = "Email no valido";
        ul.appendChild(li);
    }

    if(ul.childNodes.length == 0) {
        let p = document.createElement("p");
        p.textContent = "Formulario enviado correctamente";
        capa.innerHTML = "";
        capa.appendChild(p);
    }
    else {
        capa.innerHTML = "";
        capa.appendChild(ul);
    }

    capa.style.display = "block";
})