function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    this.mapaPropietariosEdificio = new Map();
}

// Función para generar un mapa de la planta y después de añadirla, se coloca directamente al mapa
Edificio.prototype.añadirPlanta = function (numeroPlanta) {
    let map_Planta = new Map();
    this.mapaPropietariosEdificio.set(numeroPlanta, map_Planta);
}

// Función donde se añade una puerta recogiendo el valor del numeroPlanta y estableciéndola en un array
Edificio.prototype.añadirPuerta = function (numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, []);
}

// Función donde se añade un propietario recogiendo el valor del número de la planta y de la puerta. Después se "pushea" al array.
Edificio.prototype.añadirPropietario = function(nombrePropietario,numeroPlanta,numeroPuerta){
    this.mapaPropiertariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
}

Edificio.prototype.imprimirTodosPropietarios = function () {
    let resul = "";
    let llavePlanta;
    let llavePuerta;

    for (let i = 0; i < this.mapaPropietariosEdificio.length; i++) {
        // Creamos una variable planta con el método next donde regresará el objeto
        let planta = llavePlanta.next().value;
        // Con este método, obtenemos del mapaPropietariosEdificio el valor de la planta para luego mostrarla en pantalla
        llavePuerta = this.mapaPropietariosEdificio.get(planta).keys();
        resul += "Planta: " + planta + "\n";

        for (let j = 0; j < this.mapaPropietariosEdificio.get(planta).lenght; j++) {
            let puerta = llavePuerta.next().value;
            resul += "\tPuerta: " + puerta + "\n";

            for (let k = 0; k < this.mapaPropietariosEdificio.get(planta).get(puerta).length; k++) {
                let propietario = this.mapaPropietariosEdificio.get(planta).get(puerta);
                resul += "\t\t" + propietario[k] + "\n";
            }
        }
    }
    return resul;
}

Edificio.prototype.imprimirNombreVia = function() {
    return "Nombre de la vía: " + this.nombreVia;
}

Edificio.prototype.imprimirTipoVia = function() {
    return "Tipo de vía: " + this.tipoVia;
}

Edificio.prototype.imprimirNumeroEdificio = function() {
    return "Número del edificio: " + this.numeroEdificio;
}

Edificio.prototype.imprimirCodigoPostal = function() {
    return "Código postal: " + this.codigoPostal;
}

Edificio.prototype.modificarNombreVia = function(nombreVia) {
    this.nombreVia = nombreVia;
}

Edificio.prototype.modificarTipoVia = function(tipoVia) {
    this.tipoVia = tipoVia;
}

Edificio.prototype.modificarNumeroEdificio = function(numeroEdificio) {
    this.numeroEdificio = numeroEdificio;
}

Edificio.prototype.modificarCodigoPostal = function(codigoPostal) {
    this.codigoPostal = codigoPostal;
}

const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');
edificio1.añadirPlanta('1A');
edificio1.añadirPlanta('1B');
edificio1.añadirPuerta('1A','3');
edificio1.añadirPuerta('1A','2');
edificio1.añadirPuerta('1B','1');
edificio1.añadirPropietario('Belén Laserna Belenguer','1A','3');
edificio1.añadirPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.añadirPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.añadirPropietario('Miguel López López','1B','1');
console.log(edificio1)
console.log(edificio1.imprimirTodosPropietarios());