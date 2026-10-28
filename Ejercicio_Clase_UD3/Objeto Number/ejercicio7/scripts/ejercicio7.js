let num = parseFloat(prompt("Introduce un numero"));

if(isNaN(num)) {
    document.write("No has introducido un numero");
}
else {
    document.write("El exponencial de " + num + " es " + num.toExponential() + "<br>");
    document.write("El numero con 4 decimales de " + num + " es " + num.toFixed(4) + "<br>");
    document.write("El binario de " + num + " es " + num.toString(2) + "<br>");
    document.write("El octal de " + num + " es " + num.toString(8) + "<br>");
    document.write("El hexadecimal de " + num + " es " + num.toString(16));
}