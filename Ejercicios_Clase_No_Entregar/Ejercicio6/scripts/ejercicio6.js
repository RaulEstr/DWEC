let num = 2;
let limite = 25;
let seguir;
let cont = 0;

do {
    while(num <= limite) {
        document.write(num + ", ");
        num += 2;
        cont++;

        if(cont == 5) {
            document.write("<br>")
            cont = 0;
        }
    }
    
    limite += 25;
    seguir = confirm("¿Quieres continuar?")

} while(seguir);