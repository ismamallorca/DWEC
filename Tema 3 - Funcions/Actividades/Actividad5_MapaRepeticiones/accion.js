const arrayPalabras = [];
let mapa;

var palabra = prompt('Escribe una palabra (o nada si deseas acabar)');
while (palabra != null && palabra != '') {
    arrayPalabras.push(palabra);
    palabra = prompt('Escribe una palabra (o nada si deseas acabar)');
}

arrayPalabras.sort((a, b) => (a.localeCompare(b, 'es')));

mapa = mapaRepeticiones(arrayPalabras);

for([palabra, cont] of mapa) {
    document.write(`<p>${palabra}: ${cont} repeticiones`);
}