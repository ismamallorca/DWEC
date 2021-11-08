const setPalabras = new Set();
var arrayPalabras = [];
var palabra;
var pal;

palabra = prompt('Escribe una palabra (o nada si deseas acabar)');

while (palabra != null && palabra != "") {
    setPalabras.add(palabra);
    palabra = prompt('Escribe una palabra (o nada si deseas acabar');
}

arrayPalabras = [...setPalabras];

arrayPalabras.sort((a, b) => (b.localeCompare(a, 'es')));

arrayPalabras.forEach(function (pal) {
    document.write(`<p>${pal}</p>`);
});