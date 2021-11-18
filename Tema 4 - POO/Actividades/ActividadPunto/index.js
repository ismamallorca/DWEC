import {Punto} from "./punto.js";

var p = new Punto(1, 2);
console.log("p: " + p.toString())

var q = new Punto(6, -3);
console.log("q: " + q.toString());

p.cambiar(-5, 2);

var r = p.copia();
console.log("r: " + r.toString());
r.x = 9;

console.log("p: " + p.toString());
console.log("r: " + r.toString());

var s = p.suma(r);
console.log("s: " + s.toString());

console.log("Distancia entre los dos puntos: " + p.calcularDistancia(q));