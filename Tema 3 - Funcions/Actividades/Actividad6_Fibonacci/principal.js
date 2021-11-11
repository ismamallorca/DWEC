var numero;
const sucesion = [];

numero = prompt('Indica el límite que deseas');

if (numero != "" && numero != null) {
    for (i = 0; i < numero; i++) {
        sucesion[i] = fibonacci(i);
    }

    document.write(`<h1> Sucesión de Fibonacci hasta la ` +
        `posición ${numero}</h1>`);
    document.write(`<h2>${sucesion}</h2>`);
} else {
    document.write('Se ha cancelado');
}