let palabras = new Array( 'botella', 'zeta', 'androide', 'minuto');
palabras.sort();

// Primera forma
let palabrasEnString = palabras.join("-");
document.write(palabrasEnString);

document.write("<br>");

// Segunda forma
palabras.forEach((element, ind) => {
    if(ind == palabras.length - 1) {
        document.write(element);
    }
    else {
        document.write(element + "-");
    }
});