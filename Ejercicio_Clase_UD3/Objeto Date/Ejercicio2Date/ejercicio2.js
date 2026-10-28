//pido el dia de cumple
let dia=parseInt(prompt("¿Qué día del mes naciste?"));
//compruebo que ha introducido un día
if(isNaN(dia)||dia>31){
    alert("no has introducido un día válido");
}else{
    //pido el mes de cumple
    let mes=parseInt(prompt("¿En qué mes naciste?"));
    //compruebo que ha introducido un día
    if(isNaN(mes)||mes>12){
        alert("no has introducido un mes válido");
    }else{

        console.log(dia);
        console.log(mes);
        //Para que el anio sea correcto, creo una variable Date en este instante
        let fecha=new Date();
        //Cambio dia y mes a los recibidos
        fecha.setMonth(mes-1);
        fecha.setDate(dia);

        document.write("Desde este año hasta el 2100 tu cumpleaños será domingo los siguientes años: <br>")

        for(let i=fecha.getFullYear(); i <=2100; i++){
            //Compruebo si el anio i el día+mes es domingo
            //DOMINGO => getDay()==0
            if(fecha.getDay()==0){
                //Es domingo
                document.write(fecha.getFullYear()+"<br>");
            }
            //Actualizo la fecha al anio siguiente
            fecha.setFullYear(fecha.getFullYear()+1)
        }
    }
}