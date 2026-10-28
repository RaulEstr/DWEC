//Creo el menú
let texto="Elige una opción de formato: \n";
texto+="1: 17/02/2024\n";
texto+="2: Miércoles, 17 de febrero de 2024\n";
texto+="3: Wednesday, February 17, 2024";

//Pido una opcion al usuario
let opcion=Number(prompt(texto));

//compruebo la opcion
if(opcion==NaN || opcion<1 || opcion>3){
    console.log(opcion)
    //La respuesta no es correcta
    document.write("La opción introducida no es válida");
}else{
    //Creo la variable con la fecha de hoy
    let fecha=new Date();
    //creo una variable para guardar la respuesta
    let respuesta;

    const diasSemanaES = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
    ];

    const diasSemanaEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];

    const mesesEN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];

    const mesesES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
    ];
    //Segun la opcion del usuario [1,2,3] escribo de una forma o de otra
    switch (opcion){
        case 1:
            respuesta=fecha.toLocaleDateString();
        break;
        case 2:
            respuesta=diasSemanaES[fecha.getDay()];
            respuesta+=", ";
            respuesta+=fecha.getDate();
            respuesta+=" de ";
            respuesta+=mesesES[fecha.getMonth()];
            respuesta+=" de ";
            respuesta+=fecha.getFullYear();
        break;
        case 3:
            respuesta=fecha.toLocaleDateString();
        break;
        default:
            respuesta="Algo ha ido mal";

    }
    
    //Escribo la respuesta
    document.write(respuesta);
}