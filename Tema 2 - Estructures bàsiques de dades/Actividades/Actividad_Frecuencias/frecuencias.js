var numeros = [];

for (var i = 0; i < 10000; i++) {
    numeros.push(Math.floor(Math.random() * 10) + 1);
}
//Lista de números del 1 al 10
console.log(numeros);

//Creo una función para poder ordenar por Sort
function sortNumber(a, b) {
    return a - b;
}

//Ejecuto el Sort para realizar el ordenamiento
numeros.sort(sortNumber);

//console.log(numeros);

//Ciclo donde se evalúa el si el número actual se encuentra dentro del array, en caso de ser así te aumenta +1 en count
var numActual = null;
var count = 0;
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] != numActual) {
        if (count > 0) {
            console.log("Número " + numActual + " se repite: " + count + " veces");
        }
        numActual = numeros[i];
        count = 1;
    } else {
        count++;
    }
}
if (count > 0) {
    console.log("Número " + numActual + " se repite: " + count + " veces");
}