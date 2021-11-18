function Ordenador(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;
}

Ordenador.prototype.toString = function () {
    return (
        "Marca: " + this.marca + "\n" +
        "Modelo: " + this.modelo + "\n" +
        "RAM: " + this.ram + "GB" + "\n" +
        "Disco: " + this.disco + "GB" + "\n" +
        "Pulgadas: " + this.pulgadas + " pulgadas"
    )
}

function Portatil(marca, modelo, ram = 4, disco = 500, pulgadas = 15, autonomia = 7) {
    this.__proto__ = new Ordenador(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;
    this.toString = function () {
        return this.__proto__.toString() + "\n" + "Autonomia: " + this.autonomia;
    }
}



var ordenador1 = new Ordenador("HP", "OMEN", 16, 1000, 21);
var ordenador2 = new Ordenador("Legion-Q", "Tracker3");

var portatil1 = new Portatil("ASUS", "ROG Strix", 16, 512, 15.6, 12);
var portatil2 = new Portatil("Acer", "Nitro 5");

console.log(ordenador1.toString() + "\n");
/* Salida:
    Marca: HP
    Modelo: OMEN
    RAM: 16GB
    Disco: 1000GB
    Pulgadas: 21 pulgadas
 */
console.log(ordenador2.toString() + "\n");
/* Salida:
    Marca: Legion-Q
    Modelo: Tracker3
    RAM: 4GB
    Disco: 512GB
    Pulgadas: 17 pulgadas   
*/
console.log(portatil1.toString() + "\n");
/* Salida:
    Marca: ASUS
    Modelo: ROG Strix
    RAM: 16GB
    Disco: 512GB
    Pulgadas: 15.6 pulgadas
    Autonomia: 12
*/
console.log(portatil2.toString() + "\n");
/* Salida:
    Marca: Acer
    Modelo: Nitro 5
    RAM: 4GB
    Disco: 500GB
    Pulgadas: 15 pulgadas
    Autonomia: 7
*/