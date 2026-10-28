let gasto = document.getElementById("gasto");
let cantidad = document.getElementById("cantidad");
let tipo = document.getElementById("tipo");
let contenedor = document.getElementById("contenedor");
let total = document.getElementById("total");

let ul = document.createElement("ul");
contenedor.appendChild(ul);

let gastoTotal = 0;
let gastoAlojamiento = 0;
let gastoAlimentacion = 0;
let gastoEntretenimiento = 0;
let gastoOtros = 0;

function aniadir() {
    event.preventDefault();

    // Recojo los valores introducidos
    let gastoIntroducido = gasto.value.trim();
    let cantidadIntroducida = parseFloat(cantidad.value.trim());
    let tipoIntroducido = tipo.value;
    
    // Compruebo que no esten vacios y sean numeros correctos (aunque el input lo he puesto con type="number")
    if(gastoIntroducido == "" || cantidadIntroducida == "" || isNaN(cantidadIntroducida)) {
        alert("Tienes que introducir los valores")
        return;
    }

    // Sumo los gastos por tipo
    gastoTotal += cantidadIntroducida;

    tipoIntroducido == "alojamiento" ? gastoAlojamiento += cantidadIntroducida 
    : tipoIntroducido == "alimentacion" ? gastoAlimentacion += cantidadIntroducida
    : tipoIntroducido == "entretenimiento" ? gastoEntretenimiento += cantidadIntroducida
    : gastoOtros += cantidadIntroducida;
    
    // Actualizo el valor del p
    total.innerHTML = "Gasto total: <b>" + gastoTotal + "</b>€";
    total.innerHTML += "<br> Gasto total alojamiento: " + gastoAlojamiento + "€";
    total.innerHTML += "<br> Gasto total alimentación: " + gastoAlimentacion + "€";
    total.innerHTML += "<br> Gasto total entretenimiento: " + gastoEntretenimiento + "€";
    total.innerHTML += "<br> Gasto total otros: " + gastoOtros + "€";
    
    // Creo el <li>, lo añado al ul y le pongo el valor
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = tipoIntroducido + ": " + gastoIntroducido  + ": " + cantidadIntroducida + "€";

    // Cambiar el estilo del <li> segun el tipo
    switch (tipoIntroducido) {
        case "alojamiento":
            li.style.color = "red";
            break;
        case "alimentacion":
            li.style.color = "blue";
            break;
        case "entretenimiento":
            li.style.color = "green";
            break;    
        default:
            li.style.color = "gray";
            break;
    }

    // Reseteo el form
    gasto.value = "";
    cantidad.value = "";
    tipo.value = "alojamiento";
}