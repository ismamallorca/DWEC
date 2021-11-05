/* Declaración de variables */
var cantidad = 10000;
var codigo = 1;

/* Generación de los códigos */
for (let j = 1; j <= cantidad/10; j++) {
    document.write("<tr>");
    for (let k = 1; k <= 10; k++) {
        document.write(`<td>${codigo}</td><td> &#${codigo}</td>`);
        codigo++;
    }
    document.write("</tr>");
}