// Declaración de variables
var texto, clave;
var cont = 0;
var cifra;

texto = prompt('Escribe el texto que quieres cifrar');

do {
    clave = prompt('Escribe la clave (una serie de números)');
    if (isNaN(Number(clave))) {
        alert('No has escrito un número');
    }
} while (isNaN(Number(clave)));

for (i = 0; i < texto.length; i++) {
    cifra = texto.charCodeAt(i) + Number(clave.charAt(cont));
    document.write(String.fromCharCode(cifra));
    cont++;
    if (cont == clave.length) {
        cont = 0;
    }
}