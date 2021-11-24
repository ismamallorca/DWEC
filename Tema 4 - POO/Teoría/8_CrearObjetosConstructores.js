/* ----------CREAR OBJETOS A TRAVÉS DE CONSTRUCTORES-----------*/
// Los constructores son métodos que sirven para generar nuevos
// objetos de un tipo en concreto en base a datos que se envían
// a esa función constructora.

// En JS todas las funciones tienen capacidad de devolver un objeto.
// También se dispone del método this (ya visto).
// Ambos elementos combinados con un operador new permite crear 
// nuevos objetos utilizando funciones constructoras

// El operador new genera nuevos objetos a partir de la función
// indicada.
// A este proceso se le conoce como instanciar objetos (generar
// ejemplares concretos).

// Función constructora
function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    this.mostrarCoordenadas = () => `(${this.x}, ${this.y})`;
}

let a = new Punto(10, 20);
let b = new Punto(-3, 6);

console.log(a.mostrarCoordenadas()); // Salida: (10, 20)
console.log(b.mostrarCoordenadas()); // Salida: (-3, 6)