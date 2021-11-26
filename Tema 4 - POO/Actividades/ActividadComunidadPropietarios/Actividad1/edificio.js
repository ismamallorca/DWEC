function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    this.mapaPropietariosEdificio = new Map();
}

Edificio.prototype.añadirPlanta = function(numeroPlanta) {
    let map_Planta = new Map();
    this.mapaPropietariosEdificio.set(numeroPlanta, map_Planta);
}

Edificio.prototype.añadirPuerta = function(numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, []);
}

Edificio.prototype.añadirPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
}

Edificio.prototype.imprimirTodosPropietarios = function() {
    let resultado = "";
    let llavePlanta;
    let llavePuerta;
    let propietario
    for(let i = 0; i < this.mapaPropietariosEdificio.lenght; i++) {
        // Creamos una variable planta con el método next donde regresará el objeto
        let planta = llavePlanta.next().value;
        llavePuerta = this.mapaPropietariosEdificio.get(planta).keys();
        resultado += "Planta: " + planta + "\n";
    }
}