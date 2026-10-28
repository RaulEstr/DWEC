function abrir(){
    //accedo a los datos
    let ancho=document.getElementById("ancho").value;
    let alto=document.getElementById("alto").value;

    //Tengo que preparar las opciones de mi nueva ventana
    let propiedades="width="+ancho+", height="+alto;
    console.log(propiedades)
    //abro la ventana
    let ventana=window.open("","",propiedades);
}
