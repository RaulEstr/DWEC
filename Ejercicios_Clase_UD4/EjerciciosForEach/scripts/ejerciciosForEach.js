console.log("------------------------------------------------------")
console.log("EJERCICIO 1")
let arr1_1 = [1,2,3,4,5,6,7,8,9];
console.log(arr1_1);
arr1_1.forEach(element => {
    console.log(element);
});


console.log("------------------------------------------------------")
console.log("EJERCICIO 2")
let arr2_1 = ["Ana", "Carlos", "Lucía", "Javier", "María", "Pablo", "Laura", "Diego", "Sofía", "Álvaro"];
console.log(arr2_1);
arr2_1.forEach(element => {
    console.log(element.toUpperCase());
});


console.log("------------------------------------------------------")
console.log("EJERCICIO 3")
function suma(arr) {
    let suma = 0;
    arr.forEach(element => {
        suma += element;
    });
    return suma;
}
let arr3_1 = [1,2,3,4,5,6,7,8,9];
console.log(arr3_1);
console.log(suma([...arr3_1]));


console.log("------------------------------------------------------")
console.log("EJERCICIO 4")
let arr4_1 = ["Azul", "Rojo", "Verde", "Rojo", "Amaraillo", "Rosa", "rojo", "Blanco", "Negro"];
let cuantas = 0;
let queColor = "rojo";
arr4_1.forEach(element => {
    if(element.toLowerCase() == queColor) {
        cuantas++;
    }
});
console.log(arr4_1);
console.log("Aparece el color " + queColor + " " + cuantas + " veces");


console.log("------------------------------------------------------")
console.log("EJERCICIO 5")
let arr5_1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let arr5_2 = [];
arr5_1.forEach(element => {
    if(element > 10) {
        arr5_2.push(element);
    }
});
console.log(arr5_1);
console.log(arr5_2);


console.log("------------------------------------------------------")
console.log(`EJERCICIO 6`)
let arr6_1 = [1,2,3,4,5,6,7,8,9];
let arr6_2 = [];
arr6_1.forEach(element => {
    arr6_2.unshift(element);
});
console.log(arr6_1);
console.log(arr6_2);


console.log("------------------------------------------------------")
console.log("EJERCICIO 7")
let arr7_1 = [1,2,3,4,5,20,6,7,8,9];
let max = 0;
arr7_1.forEach(element => {
    if(element > max) {
        max = element;
    }
});
console.log(arr7_1);
console.log(max);


console.log("------------------------------------------------------")
console.log("EJERCICIO 8")
let arr8_1 = [1,2,3,4,5,6,7,8,9];
let arr8_2 = [];
arr8_1.forEach(element => {
    arr8_2.push(element);
    arr8_2.push("-");
});
arr8_2.pop();

console.log(arr8_1);
console.log(arr8_2);