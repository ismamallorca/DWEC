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

    this.imprimirTipoVia = function () {
        return "Tipo de vía: " + this.tipoVia;
    }

    this.imprimirNombreVia = function () {
        return "Nombre de la vía: " + this.nombreVia;
    }

    this.imprimirNumeroEdificio = function () {
        return "Número del edificio: " + this.numeroEdificio;
    }

    this.imprimirCodigoPostal = function () {
        return "Código postal: " + this.codigoPostal;
    }

    this.modificarTipoVia = function () {
        this.tipoVia = nuevoTipoVia;
    }

    this.modificarNombreVia = function () {
        this.nombreVia = nuevoNombreVia;
    }

    this.modificarNumeroEdificio = function () {
        this.numeroEdificio = nuevoNumeroEdificio;
    }

    this.modificarCodigoPostal = function () {
        this.codigoPostal = nuevoCodigoPostal;
    }
}

// Creamos la variable edificio2 guardando textualmente el archivo JSON
let edificio2 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;

// Convertimos el archivo JSON a un objeto y creamos un nuevo Edificio
edificio2 = JSON.parse(edificio2);
let nuevo_Edificio = new Edificio(edificio2["tipoVia"], edificio2["nombreVia"], edificio2["numeroEdificio"], edificio2["codigoPostal"]);

// Recorremos el mapaPropietariosEdificio del objeto edificio2 (JSON) y añadimos la planta
for (let i in edificio2["mapaPropietariosEdificio"]) {
    nuevo_Edificio.añadirPlanta(i);

    // Recorremos de nuevo el JSON únicamente las plantas y añadimos la puerta para asignarla a su posición
    for (let j in edificio2["mapaPropietariosEdificio"][i]) {
        nuevo_Edificio.añadirPuerta(i, j);

        // Al igual que el paso interior, recorremos el JSON en busca de los propietarios
        // para asignarlos a su planta y puerta correspondiente
        for (let k in edificio2["mapaPropietariosEdificio"][i][j]){
            nuevo_Edificio.añadirPropietario(edificio2["mapaPropietariosEdificio"][i][j][k], i, j);
        }
    }
}

let div = document.getElementById("resul");

let espacios = nuevo_Edificio.imprimirTodosPropietarios().split("\n").join("<br>");
let tabulaciones = espacios.split("\t").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")

// ----------------------- MOSTRAR DATOS POR PANTALLA -------------------------
div.innerHTML += "<p>" + nuevo_Edificio.imprimirTipoVia() + "</p>";
div.innerHTML += "<p>" + nuevo_Edificio.imprimirNombreVia() + "</p>";
div.innerHTML += "<p>" + nuevo_Edificio.imprimirNumeroEdificio() + "</p>";
div.innerHTML += "<p>" + nuevo_Edificio.imprimirCodigoPostal() + "</p>";
div.innerHTML += "<p>" + tabulaciones + "</p>";

// Mostramos un fondo aleatorio cada vez que se muestren los datos
for(i = 0; i < 2000; i++) {
    var a = Math.floor(Math.random() * 881);
    var b = Math.floor(Math.random() * 1000);
    var color = "#";

    for(j = 0; j < 6; j++) {
        color += Math.floor(Math.random() * 9);
    }
}

document.body.style.background = color;