console.log("------------------------------------------------------")
console.log("EJERCICIO 1")
let arrej1_1 = [1,2,3];
let arrej1_2 = [4,5,6];
let arrej1_Mezcla = [...arrej1_1, ...arrej1_2];
console.log(arrej1_1);
console.log(arrej1_2);
console.log(arrej1_Mezcla);


console.log("------------------------------------------------------")
console.log("EJERCICIO 2")
let arrej2_1 = [10,20,30];
let arrej2_2 = [5, ...arrej2_1, 40];
console.log(arrej2_1);
console.log(arrej2_2);


console.log("------------------------------------------------------")
console.log("EJERCICIO 3")
let arrej3_1 = [10,20,30];
let arrej3_2 = [5, 40, ...arrej3_1];
console.log(arrej3_1);
console.log(arrej3_2);


console.log("------------------------------------------------------")
console.log("EJERCICIO 4")
function suma(a,b,c){
    return a+b+c;
}
let arrej4_1 = [3,7,2];
console.log(arrej4_1);
console.log(suma(...arrej4_1));


console.log("------------------------------------------------------")
console.log("EJERCICIO 5")
let arrej5_1 = ["A", "B", "C", "D", "E", "F"];
let arrej5_2 = [...arrej5_1.slice(0,3)];
console.log(arrej5_1);
console.log(arrej5_2);


console.log("------------------------------------------------------")
console.log("EJERCICIO 6")
let arrej6_1 = [1,2,3,4,5,6];
let arrej6_2 = [...arrej6_1.slice(0, arrej6_1.length / 2), 99, ...arrej6_1.slice(arrej6_1.length / 2)];
console.log(arrej6_1);
console.log(arrej6_2);


console.log("------------------------------------------------------")
console.log("EJERCICIO 7")
let arrej7_1 = [10,20,30,40];
let arrej7_2 = [...arrej7_1.slice(1)];
console.log(arrej7_1);
console.log(arrej7_2);


console.log("------------------------------------------------------")
console.log("EJERCICIO 8")
let arrej8_1 = [...[1,2], ...[1,2], 5, 6];
console.log(arrej8_1);