let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let prioridad = document.getElementById("prioridad");
let submit = document.getElementById("submit");
let error = document.getElementById("error");
let tareas = document.getElementById("tareas");
let filtro = document.getElementById("filtro");

submit.addEventListener("click", (event) => {
    event.preventDefault();

    if(nombre.value.trim() == "") {
        error.textContent = "Hay campos vacios";
        error.style.display = "block";
    }
    else {
        error.textContent = "";
        error.style.display = "none";
        aniadirTarea(nombre.value.trim(), prioridad.value);
        formulario.reset();
    }
})

function aniadirTarea(texto, prio) {
    let tarjeta = document.createElement("div");
    tareas.appendChild(tarjeta);

    let h3 = document.createElement("h3");
    h3.textContent = texto;
    tarjeta.appendChild(h3);

    prio == "baja" ? 
        tarjeta.style.backgroundColor = "lightgreen": 
    prio == "media" ? 
        tarjeta.style.backgroundColor = "yellow":
        tarjeta.style.backgroundColor = "lightcoral";
    
    let btnArriba = document.createElement("button");
    btnArriba.textContent = "⬆️";
    tarjeta.appendChild(btnArriba);

    let btnAbajo = document.createElement("button");
    btnAbajo.textContent = "⬇️";
    tarjeta.appendChild(btnAbajo);

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    tarjeta.appendChild(btnEliminar);

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    tarjeta.appendChild(check);

    actualizarBotones();

    btnEliminar.addEventListener("click", (event)=> {
        event.preventDefault();
        let padre = tarjeta.parentElement;
        padre.removeChild(tarjeta);
    });

    check.addEventListener("change", (event)=> {
        if(check.checked) {
            h3.style.textDecoration = "line-through";
        }
        else {
            h3.style.textDecoration = "";
        }
    });

    btnAbajo.addEventListener("click", (event)=> {
        
    });

    // check.addEventListener("change", tachar);
}

function actualizarBotones() {
    
}

filtro.addEventListener("change", (event) => {
    let listaTareas = tareas.children;
    for(let i = 0; i < tareas.clientHeight; i++) {
        if(filtro.value == "todas") {
            listaTareas[i].style.display = "block";
        }
        else if(filtro.value == "completadas") {
            if(listaTareas[i].children[4].checked) {
                listaTareas[i].style.display = "block";
            }
            else {
                listaTareas[i].style.display = "none";
            }
        }
        else {
            if(listaTareas[i].children[4].checked) {
                listaTareas[i].style.display = "none";
            }
            else {
                listaTareas[i].style.display = "block";
            }
        }

    }
})

// function tachar(event) {
//     let padre = event.target.parentNode;
//     let textoTarea = padre.children[0];
//     if(event.target.checked) {
//         textoTarea.style.textDecoration = "line-through";
//     }
//     else {
//         textoTarea.style.textDecoration = "";
//     }
// }