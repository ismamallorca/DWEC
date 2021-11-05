/* Declaración de constantes */
const incremento3 = 1.03;
const incremento10 = 1.10;
const incremento15 = 1.15;
/* Declaración de variables */
var nombre;
var apellidos;
var salario;
var edad;

/* Recogida de datos del usuario */
nombre = prompt("Escribe tu nombre: ");
apellidos = prompt("Escribe tus apellidos: ");
salario = prompt("Introduce tu salario: ");
edad = prompt("Indica tu edad: ");

/* Valoración y asignación del nuevo salario */
if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
    } else if (edad < 45) {
        salario *= incremento3;
    } else {
        salario *= incremento15;
    }
} else if (salario <= 2000) {
    if (edad <= 45) {
        salario *= incremento10;
    } else {
        salario *= incremento3;
    }
}

/* Muestra de los datos por pantalla */
document.write(`<p>Persona: ${nombre} ${apellidos} <br> Edad: ${edad} <br> Salario nuevo: ${salario}</p>`);