// Script con las funciones del ejercicio
function cuantosHay(paises) {
    return paises.length;
}

function mostrar(paises) {
    return paises.join("-");
}

function mostrarInverso(paises){
    return paises.toReversed().join("-");
}

function mostrarOrdenado(paises) {
    return paises.toSorted().join("-");
}

function aniadirInicio(paises, pais) {
    paises.unshift(pais);
    return paises;
}

function aniadirFinal(paises, pais) {
    paises.push(pais);
    return paises;
}

function borrarInicio(paises) {
    return paises.shift();
}

function borrarFinal(paises) {
    return paises.pop();
}

function paisEnPosicion(paises, posicion) {
    return paises[posicion - 1];
}

function posicionDePais(paises, pais) {
    return paises.indexOf(pais) + 1;
}

function paisesIntervalo(paises, pos1, pos2) {
    let listaPaises = "";
    while(pos1 - 1 < paises.length && pos1 <= pos2) {
        if(pos1 - 1 >= 0) {
            listaPaises += paises[pos1 - 1] + "-";
        }  
        pos1++;
    }
    return listaPaises.substring(0, listaPaises.length - 1);
}