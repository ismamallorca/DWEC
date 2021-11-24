function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    this.mapaPropietariosEdificio = new Map();
}

Edificio.prototype.añadirPlanta = function(numeroPlanta) {
    let planta_Map = new Map();
    this.mapaPropietariosEdificio.set(numeroPlanta, planta_Map);
}

Edificio.prototype.añadirPuerta = function(numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, []);
}

Edificio.prototype.añadirPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
}

Edificio.prototype.imprimirTodosPropietarios = function() {
    let llave_planta = this.mapaPropietariosEdificio.keys();
    let planta;
    let llave_puerta;
    let puerta;
    let propietario;
    let resul = "";

    for (let i = 0; i < this.mapaPropietariosEdificio.length; i++) {
        planta = llave_planta.next().value;
        llave_puerta = this.mapaPropietariosEdificio.get(planta).keys()
        resul += "Planta: " + planta + "\n";

        for (let j = 0; j < this.mapaPropietariosEdificio.get(planta).length; j++) {
            puerta = llave_puerta.next().value
            resul += "\t" + "Puerta: " + "\n";

            for(let k = 0; k < this.mapaPropietariosEdificio.get(planta).get(puerta).length; k++) {
                propietario = this.mapaPropietariosEdificio.get(planta).get(puerta);
                resul += "\t\t" + propietario[j] + "\n";
            }
        }
    }

    return resul;
}