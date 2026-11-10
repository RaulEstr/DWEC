let capa = document.getElementById("capa");
let tabla = document.getElementById("tabla");

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");

let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    
    let fila = document.createElement("tr");
    tabla.appendChild(fila);

    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    fila.appendChild(col1);
    fila.appendChild(col2);
    fila.appendChild(col3);

    col1.innerHTML = nombre.value;
    col2.innerHTML = email.value;
    col3.innerHTML = telefono.value;

    document.forms[0].reset();

    let btnEliminar = document.createElement("input");
    btnEliminar.setAttribute("type", "submit");
    btnEliminar.setAttribute("value", "❌");
    fila.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", (event)=> {
        event.preventDefault();
        let padre = fila.parentNode;
        padre.removeChild(fila);
    });


    let btnEditar = document.createElement("input");
    btnEditar.setAttribute("type", "submit");
    btnEditar.setAttribute("value", "✏️");
    fila.appendChild(btnEditar);

    btnEditar.addEventListener("click", (event)=> {
        event.preventDefault();
    })
})