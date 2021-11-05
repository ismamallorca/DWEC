let numero;
for (let i=0;i<500;i++){
    numero = parseInt(Math.random()*10001) + 1;
    document.write(`<p> ${numero}&nbsp;&nbsp${par(numero)}` )
}