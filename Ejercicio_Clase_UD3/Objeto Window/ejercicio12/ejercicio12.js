//abro una ventana
let ventana=window.open("","","width=250,height=150")
//Creo la funcion para actualizar la web
function actualizar(){
    //ha pulsado boton, voy a acceder al valor del input
    let inputUrl=document.getElementById("url").value;
    console.log(inputUrl);

    //Compruebo si ha escrito https:// o http://
    if(!inputUrl.match("https://") || !inputUrl.match("http://") ){
        inputUrl="http://"+inputUrl;
    }

    ventana.location=inputUrl;
}