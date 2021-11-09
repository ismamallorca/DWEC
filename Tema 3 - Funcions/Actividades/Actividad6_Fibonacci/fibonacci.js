
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const nTerms = prompt('Introduce un número.');

if (nTerms <= 0) {
    prompt('Introduce un número positivo.');
}
else {
    for (let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}