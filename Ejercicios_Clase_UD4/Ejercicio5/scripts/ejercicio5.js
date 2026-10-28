function separarArray(cadena) {

    let texto = "";
    cadena.forEach((elemento, indice) => {
        if(indice == cadena.length - 1) {
            texto += elemento;
        }
        else{
            texto += elemento + " - ";
        }
        
    });
    return texto;

}

function separarArray2(cadena) {
    return cadena.join(" - ");
}

function separarArray3(cadena) {

    let texto = "";
    cadena.forEach((elemento) => {
        texto += elemento + "-";
    });

    let arr = texto.split("-");
    arr.pop();
    return arr.join(" - ");
}


let myArray = ["a", 5, "25234", 234, "asasd", "sdfhd2"];
document.write(separarArray(myArray));
document.write("<br>");
document.write(separarArray2(myArray));
document.write("<br>");
document.write(separarArray3(myArray));