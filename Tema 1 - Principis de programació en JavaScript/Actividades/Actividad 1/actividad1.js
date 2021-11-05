/* Definición de variables */
var respuesta;

/* Solicitud del número al usuario */
respuesta = prompt("Escribe un número:");

/* Comprobación de la respuesta */
if (isNaN(Number(respuesta))) {
    alert("No has escrito un número");
} else {
    alert(`Has escrito el número ${respuesta}`);
}