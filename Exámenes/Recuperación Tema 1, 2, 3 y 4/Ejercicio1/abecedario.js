const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();

var resultado1;
var resultado2;
var resultado3;

let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}

// Generar 20 letras aleatorias
let letras = new Array();
      for (let i = 0; i < 20; i++) {
        let letra = "&#" + Math.floor(Math.random() * 25 + 127344) + ";";
        letras[i] = letra;
        letra = resultado1;
      }
console.log(resultado1);

// Ordenar letras
letras.sort();
for (let i = 0; i < 20; i++) {
  resultado2 += letras[i];
}
console.log(resultado2);

// Letras sin repeticiones
for (let i = 0; i < 20; i++) {
    if(i == 0 || letras[i] != letras[i - 1]) {
        resultado3 += letras[i];
    }
}
console.log(resultado3);



