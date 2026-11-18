export function setCookie(cname, cvalue, exdays){
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue +"; "+expires;
}

export function getCookie(cname){
    let name = cname + "="; //Crea variable con el texto del campo y =
    let ca = document.cookie.split(";"); //divide en trozos separados por ;
    for (let i=0;i<ca.length;i++){ //Recorre cada trozo de la cookie
        let c=ca[i];
        while (c.charAt(0)==" ") //borra espacios al principio de la cadena
            c=c.substring(1);
        if (c.indexOf(name)==0) //Si encuentra el campo buscado
            return c.substring(name.length, c.length)//lo devuelve
    }
    return "";
}

export function checkCookie() {
    let username = getCookie("username");
    if (username!="") {
        alert ("Bienvenido de nuevo, "+username);
    } 
    else {
        username=prompt("Introduzca su nombre");
        if(username != "" && username!=null)
            setCookie("username", username, 365);
    }
}
