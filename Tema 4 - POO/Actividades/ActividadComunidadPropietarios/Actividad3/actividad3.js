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

function solicitar() {
    let correcto = false;
    let tipoVia = prompt("Introduce el tipo de vía que desees: ");
    let nombreVia = prompt("Introduce el nombre de la vía: ");
    let numeroEdificio = prompt("Introduce el número del edificio que quieras");

    // Obligamos al usuario a introducir el CP SÓLO con números
    do {
        let codigoPostal = prompt("Introduce el código postal: ");
        if (Number(codigoPostal)) {
            correcto = true;
            var nuevoEdificio = new Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal)
        } else {
            alert("Formato incorrecto. Por favor, escribe el CP con únicamente números");
        }
    } while (!correcto)

    // Pedimos al usuario que introduzca planta, puerta y propietario
    // Creamos la variable stop para cancelar si el usuario así lo desea
    let stop = false;
    do {
        let nueva_planta = prompt("Introduce el número de una planta: ")
        if (nueva_planta === null) {
            stop = true
        } else {
            let nueva_puerta = prompt("Introduce el número de la puerta: ")
            if (nueva_puerta === null) {
                stop = true

                // Con el siguiente bucle comprobamos que la puerta que ha introducido
                // el usuario sea un número y que no sea negativo
            } else if (Number(nueva_puerta) && nueva_puerta >= 0) {
                let nuevo_propietario = prompt("Introduce el nombre de un propietario: ")
                if (nuevo_propietario === null) {
                    stop = true

                    // Añadimos todos los datos recogidos y avisamos al usuario
                    // que los datos han sido introducidos correctamente
                } else {
                    nuevoEdificio.añadirPlanta(nueva_planta);
                    nuevoEdificio.añadirPuerta(nueva_puerta);
                    nuevoEdificio.añadirPropietario(nuevo_propietario);
                    alert("Los datos han sido introducidos correctamente :)");
                }
            } else {
                alert("La puerta que has introducida no es correcta. Inténtalo de nuevo")
            }
        }
    } while (!stop)
    return nuevoEdificio;
}

// Insertamos los datos al div para mostrarlos por pantalla
let div = document.getElementById("resul");
let edificio3 = solicitar();

// Insertamos los saltos de línea y tabulaciones necesarios
let espacios = nuevo_Edificio.imprimirTodosPropietarios().split("\n").join("<br>");
let tabulaciones = espacios.split("\t").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")

// Mostramos por pantalla los datos
div.innerHTML += "<p>" + edificio3.imprimirTipoVia() + "</p>"
div.innerHTML += "<p>" + edificio3.imprimirNombreVia() + "</p>"
div.innerHTML += "<p>" + edificio3.imprimirNumeroEdificio() + "</p>"
div.innerHTML += "<p>" + edificio3.imprimirCodigoPostal() + "</p>"
div.innerHTML += "<p>" + tabulaciones + "</p>"

// Generamos el color aleatorio del fondo
for (i = 0; i < 2000; i++) {
    var a = Math.floor(Math.random() * 881);
    var b = Math.floor(Math.random() * 1000);
    var color = "#";

    for (j = 0; j < 6; j++) {
        color += Math.floor(Math.random() * 9);
    }
}

document.body.style.background = color;