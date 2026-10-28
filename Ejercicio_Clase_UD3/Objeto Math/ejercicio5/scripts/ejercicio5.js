let texto = "Elige una opcion\n";
texto += "1. Potencia\n";
texto += "2. Raiz\n";
texto += "3. Redondeo\n";
texto += "4. Trigonometria";

let opcion = prompt(texto);
if(isNaN(opcion) || opcion < 1 || opcion > 4) {
    document.write("La opcion no es valida");
}
else {
    if (opcion == 1) {
        let base = prompt("Introduce la base");
        let exponente = prompt("Introduce el exponente");
        let potencia = Math.pow(base, exponente);
        document.write(base + "^" + exponente + " = " + potencia);
    }
    else if(opcion == 2) {
        let num = prompt("Introduce un numero");
        let raiz = Math.sqrt(num);
        document.write("La raiz cuadrada de " + num + " es " + raiz);
    }
    else if(opcion == 3) {
        let num = prompt("Introduce un numero con decimales");
        let redondeo = Math.round(num);
        document.write(num + " redondeado es " + redondeo);
    }
    else {
        let angulo = prompt("Introduce un angulo entre 0 y 360");
        let seno = Math.sin(angulo);
        let coseno = Math.cos(angulo);
        let tangente = Math.tan(angulo);
        document.write("Seno de " + angulo + " = " + seno + "<br>");
        document.write("Coseno de " + angulo + " = " + coseno + "<br>");
        document.write("Tangente de " + angulo + " = " + tangente);
    }
}