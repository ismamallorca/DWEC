document.write(`<p>1</p><p>2</p>`);

for (let i = 3; i < 1000; i += 2) {
    if (esPrimo(i)) document.write(`<p>${i}</p>`);
}