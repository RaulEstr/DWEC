let paises = [
    "España","Francia","Italia","Alemania",
    "Portugal","México","Argentina","Brasil",
    "Chile","Perú","Colombia","Japón",
    "China","India","Canadá","Estados Unidos",
    "Australia","Egipto","Marruecos","Sudáfrica"
];
let contenedor = document.getElementById("contenedor");

// Primer prompt, no compruebo la respuesta porque de eso se encarga el default del switch
let respuesta = parseInt(prompt(dameMenu(1)));
switch (respuesta) {
    case 1:
        contenedor.innerHTML = "<p>Cantidad de países:</p><p>Hay " + cuantosHay(paises) + " países</p>";
    break;
    case 2:
        // Compruebo la primera respuesta, no la compruebo porque se eso se encarga el default del switch
        respuesta2 = parseInt(prompt(dameMenu(2)))
        switch (respuesta2) {
            case 1:
                contenedor.innerHTML = "<p>Lista de países:</p><p>" + mostrar(paises) + "</p>";
            break;
            case 2:
                contenedor.innerHTML = "<p>Lista de países en orden inverso:</p><p>" + mostrarInverso(paises) + "</p>";
            break;
            case 3:
                contenedor.innerHTML = "<p>Lista de países en orden alfabético:</p><p>" + mostrarOrdenado(paises) + "</p>";
            break;
            default:
                contenedor.innerHTML = "<p>No has seleccionado ninguna respuesta</p>";
        }
    break;
    case 3:
        let respuesta3 = prompt(dameMenu(3));
        let respuestaPartida = respuesta3.split("-");
        lista = paisesIntervalo(paises, ...respuestaPartida);
        if(lista == "") {
            contenedor.innerHTML = "<p>No hay países en el intervalo introducido</p>";
        }
        else {
            contenedor.innerHTML = "<p>Lista de países:</p><p>" + lista + "</p>";
        }
    break; 
    case 4:
        let pais = (prompt(dameMenu(4))).trim();
        if(pais.length == 0) {
            contenedor.innerHTML = "<p>No has introducido ningún país</p>";
        }
        else {
            let respuesta4 = prompt(dameMenu(5));
            if(respuesta4 < 1 || respuesta4 > 2 || isNaN(respuesta4)) {
                contenedor.innerHTML = "<p>No has seleccionado ninguna respuesta</p>";
            }
            else {
                if(respuesta4 == 1) {
                    aniadirInicio(paises, pais);
                }
                else {
                    aniadirFinal(paises, pais);
                }
                contenedor.innerHTML = "<p>País añadido, la lista queda así:</p><p>" + mostrar(paises) + "</p>";
            }
        }
    break; 
    case 5:
        let respuesta5 = prompt(dameMenu(6));
        if(respuesta5 < 1 || respuesta5 > 2 || isNaN(respuesta5)) {
            contenedor.innerHTML = "<p>No has seleccionado ninguna respuesta</p>";
        }
        else {
            let eliminado = "";
            if(respuesta5 == 1) {
                eliminado = borrarInicio(paises);
            }
            else {
                eliminado = borrarFinal(paises);
            }
            contenedor.innerHTML = "<p>Se ha eliminado el siguiente pais: </p><p>" + eliminado + "</p>";
        }
    break;
    case 6:
        let respuesta6 = prompt(dameMenu(7));
        if(respuesta6 < 1 || respuesta6 > 2 || isNaN(respuesta6)) {
            contenedor.innerHTML = "<p>No has seleccionado ninguna respuesta</p>";
        }
        else {
            if(respuesta6 == 1) {
                let posicion = parseInt(prompt(dameMenu(8)));
                let pais = paisEnPosicion(paises, posicion);
                if(typeof(pais) == "undefined") {
                    contenedor.innerHTML = "<p>No existe país en la posición "+ posicion + " </p>";   
                }
                else{
                    contenedor.innerHTML = "<p>El país de la posicion " + posicion + " es:</p><p>" + pais + "</p>";
                }
            }
            else {
                let pais = (prompt(dameMenu(9))).trim();
                if(pais.length == 0) {
                    contenedor.innerHTML = "<p>No has introducido ningún país</p>";
                }
                else {
                    let posicion = posicionDePais(paises, pais);
                    if(posicion == 0) {
                        contenedor.innerHTML = "<p>No existe el país " + pais + " </p>";   
                    }
                    else {
                        contenedor.innerHTML = "<p>La posición del país " + pais + " es:</p><p>" + posicion + "</p>";
                    }
                }
            }
        }
    break;
    default:
        contenedor.innerHTML = "<p>No has seleccionado ninguna respuesta</p>";
}