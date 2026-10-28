// Script con una funcion que devuelve el menu que se le pasa por valor

function dameMenu(num) {
switch (num) {
case 1:
return `1. Mostrar número de países
2. Mostrar listado de países 
3. Mostrar un intervalo de países
4. Añadir un país
5. Borrar un país
6. Consultar un país

0 u otro cosa. SALIR`;
case 2:
return `¿Cómo quieres ver los países?
1. Orden normal
2. Orden inverso
3. Orden alfabético

0 u otra cosa. SALIR`;
case 3:
return `Introduce el intervalo (inicio-fin)`;
case 4:
return `Introduce el país que quieres añadir`;
case 5:
return `Introduce dónde lo quieres añadir
1. Inicio
2. Final

0 u otra cosa. SALIR`;
case 6:
return `De dónde lo quieres eliminar
1. Inicio
2. Final

0 u otra cosa. SALIR`;
case 7:
return `Cómo lo quieres consultar
1. Posisicón
2. Nombre

0 u otra cosa. SALIR`;
case 8:
return `Introduce la posición del país que quieras saber`;
case 9:
return `Introduce el país del que quieras saber su posición`;
}
}
