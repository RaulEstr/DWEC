function leerNum() {
    let num = parseInt(prompt("Introduce un numero, 0 para terminar"));
    if(isNaN(num)) {
        return 0;
    }
    else {
        return num;
    }
}

let arrNums = [];
let seguir = true;
while(seguir) {
    let num = leerNum();
    if(num == 0) {
        seguir = false;
    }
    else {
        arrNums.push(num);
    }
}

let cantPar = 0;
let cantImpar = 0;
for(let i = 0; i < arrNums.length; i++) {
    if(arrNums[i] % 2 == 0) {
        cantPar++;
    }
    else {
        cantImpar++;
    }
    document.write(arrNums[i] + ", ");
}
document.write("<br>");
document.write("Hay " + cantPar + " pares y " + cantImpar + " impares");