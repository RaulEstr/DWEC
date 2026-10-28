//Primero creo la variable ventana porque tiene que ser accesible desde todas las funciones
let ventana;
//Voy a crear funciones para cada boton
//Abrir ventana
function abrirVentana() {
    //Esta es la funcion que se ejecuta al pulsar el primer boton
    let abrir=confirm("Seguro que quieres abrir?");

    //Compruebo si el usuario confirma la nueva ventana
    if(!abrir){
        //El usuario ha cancelado, así que termino la ejecución de la función
        return;
    }
    //A partir de aqui, el usuario ha confirmado la nueva ventana

    //ABRIR VENTANA
    ventana = window.open("","","width=200,height=80,top=500, left=500, toolbar=0, resizable=0, menubar=0, location=no");
    //Escribir en la ventana
    ventana.document.write("<h2>Hola</h2>");
    ventana.document.write("<button onClick='window.close()'>Cerrar</button>");
    
}

//Cerrar ventana
function cerrarVentana() {
    // Hasta que no se abre por primera vez, la ventana no está creada. Compruebo si se ha creado o no
    //Compruebo si la ventana se ha abierto antes
    if(!ventana){
        alert("Aún no has abierto ninguna ventana");
        return;
    }

    //La ventana se ha creado. Compruebo si está abierta en este momento
    if(ventana.closed){
        //La ventana está cerrada
        alert("La ventana está cerrada.");
    }else{
        //la ventana está abierta, la cierro
        ventana.close();
    }
}

//funcion para mover
function moverVentana(){
    // Hasta que no se abre por primera vez, la ventana no está creada. Compruebo si se ha creado o no
    //Compruebo si la ventana se ha abierto antes y si está abierta ahora mismo
    if(!ventana || ventana.closed){
        alert("Aún no has abierto ninguna ventana");
        return;
    }

    //La ventana está abierta, la muevo
    ventana.moveBy(10,10);
}

//funcion para aumentar
function aumentar(){
    // Hasta que no se abre por primera vez, la ventana no está creada. Compruebo si se ha creado o no
    //Compruebo si la ventana se ha abierto antes y si está abierta ahora mismo
    if(!ventana || ventana.closed){
        alert("Aún no has abierto ninguna ventana");
        return;
    }

    //La ventana está abierta, la muevo
    ventana.resizeTo(400,200);
}

//funcion para aumentar
function scroll(){
    // Hasta que no se abre por primera vez, la ventana no está creada. Compruebo si se ha creado o no
    //Compruebo si la ventana se ha abierto antes y si está abierta ahora mismo
    if(!ventana || ventana.closed){
        alert("Aún no has abierto ninguna ventana");
        return;
    }

    ventana.scrollBy(0,10);
}