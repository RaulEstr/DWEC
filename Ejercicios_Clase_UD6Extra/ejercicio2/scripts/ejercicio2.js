import {setCookie, getCookie} from "../../cookies.js"

let cantidad = getCookie("visitas");
if(cantidad == "") {
    cantidad = 1;
}

setCookie("cantidad", cantidad, 7);