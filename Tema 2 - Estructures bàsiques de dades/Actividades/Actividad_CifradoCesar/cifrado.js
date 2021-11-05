// Declaración de variables
var texto, clave;
var cifra;
var textoCifrado = '';

texto = prompt('Escribe el texto que quieres cifrar');
do {
    clave = prompt('Escribe la clave (un número entero)');
    if (isNaN(Number(clave))) {
        alert('No has escrito un número');
    }
} while (isNaN(Number(clave)));

clave = parseInt(clave);

for (i = 0; i < texto.length; i++) {
    cifra = texto.charCodeAt(i) + clave;
    document.write(String.fromCharCode(cifra));
}