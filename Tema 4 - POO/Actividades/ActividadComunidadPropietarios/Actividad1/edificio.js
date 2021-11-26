function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia
    this.nombreVia = nombreVia
    this.numeroEdificio = numeroEdificio
    this.codigoPostal = codigoPostal
    this.mapaPropietariosEdificio = new Map()

    // Añadimos la planta asignando el número de planta y posteriormente creamos el mapa
    this.añadirPlanta = function (numeroPlanta) {
        this.mapaPropietariosEdificio.set(numeroPlanta, new Map())
    }

    // Añadimos la puerta obteniendo el valor del número de la planta y asignando al array el número de puerta
    this.añadirPuerta = function (numeroPlanta, numeroPuerta) {
        this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, [])
    }

    // Añadimos el propietario de forma distinta a la planta y la puerta: Creamos la variable planta para obtener el número de planta.
    // Después creamos la variable puerta para obtener el número de la puerta (después de haber obtenido el número de planta) para luego
    // "pushearlo" al array de las puertas.
    this.añadirPropietario = function (nombrePropietario, numeroPlanta, numeroPuerta) {
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta)
        let puerta = planta.get(numeroPuerta)
        puerta.push(nombrePropietario)
    }

    this.imprimirTodosPropietarios = function () {
        let k_planta = this.mapaPropietariosEdificio.keys();
        let result = "";

        // Creamos un bucle for para recorrer el array de mapaPropietariosEdificio para obtener la llave
        // de la planta y poder mostrarla en pantalla.

        // En los sucesivos arrays, el bucle hace lo mismo.
        for (let i = 0; i < this.mapaPropietariosEdificio.size; i++) {
            let planta = k_planta.next().value;
            let k_Puerta = this.mapaPropietariosEdificio.get(planta).keys()
            result += "Planta: " + planta + "\n";

            for (let j = 0; j < this.mapaPropietariosEdificio.get(planta).size; j++) {
                let puerta = k_Puerta.next().value
                result += "\t" + "Puerta: " + puerta + "\n";

                for (let k = 0; k < this.mapaPropietariosEdificio.get(planta).get(puerta).length; k++) {
                    let propietario = this.mapaPropietariosEdificio.get(planta).get(puerta);
                    result += "\t\t" + propietario[k] + "\n";
                }
            }
        }
        return result;
    }

    this.imprimirTipoVia = function() {
        return "Tipo de vía: " + this.tipoVia;
    }

    this.imprimirNombreVia = function() {
        return "Nombre de la vía: " + this.nombreVia;
    }

    this.imprimirNumeroEdificio = function() {
        return "Número del edificio: " + this.numeroEdificio;
    }

    this.imprimirCodigoPostal = function() {
        return "Código postal: " + this.codigoPostal;
    }

    this.modificarTipoVia = function() {
        this.tipoVia = nuevoTipoVia;
    }

    this.modificarNombreVia = function() {
        this.nombreVia = nuevoNombreVia;
    }

    this.modificarNumeroEdificio = function() {
        this.numeroEdificio = nuevoNumeroEdificio;
    }

    this.modificarCodigoPostal = function() {
        this.codigoPostal = nuevoCodigoPostal;
    }
}

// --------------------------- AÑADIR DATOS AL EDIFICIO -----------------------------------

const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');

// Añadimos las plantas
edificio1.añadirPlanta('1A');
edificio1.añadirPlanta('1B');

// Añadimos las puertas
edificio1.añadirPuerta('1A', '3');
edificio1.añadirPuerta('1A', '2');
edificio1.añadirPuerta('1B', '1');

// Añadimos a los propietarios
edificio1.añadirPropietario('Belén Laserna Belenguer', '1A', '3');
edificio1.añadirPropietario('Pedro Jimenez Vázquez', '1A', '3');
edificio1.añadirPropietario('Ana María Rodriguez Figuerola', '1A', '2');
edificio1.añadirPropietario('Miguel López López', '1B', '1');

// Mostramos por pantalla las plantas y las puertas con sus respectivas tabulaciones
console.log(edificio1)

// Mostramos por pantalla la información de los propietarios, añadiéndose así a las plantas y las puertas respectivamente
console.log(edificio1.imprimirTodosPropietarios());