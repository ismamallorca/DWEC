class Edificio {
    constructor(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
        this.tipoVia = tipoVia;
        this.nombreVia = nombreVia;
        this.numeroEdificio = numeroEdificio;
        this.codigoPostal = codigoPostal;
        this.mapaPropietariosEdificio = new Map();
    }

    añadirPlanta(numeroPlanta) {
        this.mapaPropietariosEdificio.set(numeroPlanta, this.numeroPlanta = new Map());
    }

    añadirPuerta(numeroPlanta, numeroPuerta) {
        this.numeroPlanta.set(numeroPlanta, numeroPuerta = []);
    }

    añadirPropietario(nombrePropietario, numeroPlanta, numeroPuerta) {
        
    }
}