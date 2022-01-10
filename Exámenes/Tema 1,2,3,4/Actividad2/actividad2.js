function Paciente(numeroRegistro, nombreCompleto, numeroSS, direccion) {
    this.numeroRegistro = numeroRegistro;
    this.nombreCompleto = nombreCompleto;
    this.numeroSS = numeroSS;
    this.direccion = direccion;

    this.imprimirNumeroRegistro = function() {
        return "Número de registro: " + this.numeroRegistro;
    }

    this.imprimirNombreCompleto = function() {
        return "Nombre completo: " + this.nombreCompleto;
    }

    this.imprimirNumeroSS = function() {
        return "Número de la SS: " + this.numeroSS;
    }

    this.imprimirDireccion = function() {
        return "Dirección: " + this.direccion;
    }

    this.modificarNumeroRegistro = function() {
        this.numeroRegistro = nuevoNumeroRegistro;
    }

    this.modificarNombreCompleto = function() {
        this.nombreCompleto = nuevoNombreCompleto;
    }

    this.modificarNumeroSS = function() {
        this.numeroSS = nuevoNumeroSS;
    }

    this.modificarDireccion = function() {
        this.direccion = nuevaDireccion;
    }
}

// --------------------------- AÑADIR DATOS DEL PACIENTE -------------------------
const paciente1 = new Paciente('08998053', 'Ismael González Bravo', '45458745S', 'Milana');
console.log(paciente1);

// Modificamos manualmente los datos del paciente.
paciente1.modificarNumeroRegistro('80454556');
console.log(paciente1.imprimirNumeroRegistro());

paciente1.modificarNombreCompleto('Daniel Mesa Bustard');
console.log(paciente1.imprimirNombreCompleto());

paciente1.modificarNumeroSS('36447892K');
console.log(paciente1.imprimirNumeroSS());

paciente1.modificarDireccion('Góndor');
console.log(paciente1.imprimirDireccion());