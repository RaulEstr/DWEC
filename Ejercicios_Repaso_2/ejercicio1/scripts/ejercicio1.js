let pass = document.getElementById("pass");
let capa = document.getElementById("capa");

pass.addEventListener("input", ()=> {
    console.log(pass.value)
    let longitud = pass.value.length;
    let regexMayus = /[A-Z]/;
    let regexNum = /[0-9]/;
    let regexSimbolo = /[-+.\?¿&$]/;

    let ul = document.createElement("ul");
    let nivel = 0;
    if(longitud >= 8) {
        nivel++;
    }
    else {
        let li = document.createElement("li");
        li.textContent = "La contraseña tiene que se mayor a 8 caracteres";
        ul.appendChild(li);
    }

    if(regexMayus.test(pass.value)) {
        nivel++;
    }
    else {
        let li = document.createElement("li");
        li.textContent = "La contraseña tiene que tener una mayúscula";
        ul.appendChild(li);
    }

    if(regexNum.test(pass.value)) {
        nivel++;
    }
    else {
        let li = document.createElement("li");
        li.textContent = "La contraseña tiene que tener al menos un número";
        ul.appendChild(li);
    }

    if(regexSimbolo.test(pass.value)) {
        nivel++;
    }
    else {
        let li = document.createElement("li");
        li.textContent = "La contraseña tiene al menos un caracter especial (-+.?¿&$)";
        ul.appendChild(li);
    }

    if(nivel <= 2) {
        capa.style.backgroundColor = "red";
        capa.innerHTML = "😢 Contrseña débil"
        capa.appendChild(ul);
    }
    else if(nivel == 3) {
        capa.style.backgroundColor = "yellow";
        capa.innerHTML = "😐 Contraseña media";
        capa.appendChild(ul);
    }
    else if(nivel == 4) {
        capa.style.backgroundColor = "green";
        capa.innerHTML = "😁 Contrseña fuerte"
    }

    if(longitud == 0) {
        capa.style.backgroundColor = "white";
        capa.innerHTML = "";
    }
});