function fibonacci(x) {
    if (x == 0) return 0;
    else {
        if (x == 1) return 1;
        else return fibonacci (x - 1) + fibonacci (x - 2);
    }
}

function fibonacci2(x) {
    let acumulador1 = 0;
    let acumulador2 = 1;
    let resultado = 1;

    if ( x == 0) return 0;
    else {
        if (x==1) return 1;
        else {
            for (let i=2;i<=x;i++) {
                [acumulador1,acumulador2] = [acumulador2,resultado];
                resultado = acumulador1 + acumulador2;
            }
            
        return resultado;
        }
    }
}