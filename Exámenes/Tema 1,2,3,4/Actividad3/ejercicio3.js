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

let paciente2 = `{
    "numeroRegistro":"AAA024",
    "nombreCompleto":"Fernández M.",
    "numeroSS":"321790059",
    "direccion":"C/Recoletos, 50"
}`;

let paciente3 = `{
    "numeroRegistro":"BCD827",
    "nombreCompleto":"Ruiz P.",
    "numeroSS":"100973253",
    "direccion":"C/Esquerdo izquierdo, 103"
}`;

let paciente4 = `{
    "numeroRegistro":"YUN835",
    "nombreCompleto":"Benítez E.",
    "numeroSS":"154811767",
    "direccion":"Av. Argentina, 5"
}`;

// Convertimos cada JSON a un objeto y creamos un nuevo Paciente cada vez
paciente2 = JSON.parse(paciente2);
let nuevo_Paciente2 = new Paciente(paciente2["numeroRegistro"], paciente2["nombreCompleto"], paciente2["numeroSS"], paciente2["direccion"]);

paciente3 = JSON.parse(paciente3);
let nuevo_Paciente3 = new Paciente(paciente3["numeroRegistro"], paciente3["nombreCompleto"], paciente3["numeroSS"], paciente3["direccion"]);

paciente4 = JSON.parse(paciente4);
let nuevo_Paciente4 = new Paciente(paciente4["numeroRegistro"], paciente4["nombreCompleto"], paciente4["numeroSS"], paciente4["direccion"]);

let div = document.getElementById("resultado");

// --------------------------------- MOSTRAR DATOS POR PANTALLA --------------------------
// ------------- PACIENTE 2 ---------------
div.innerHTML += "<p>" + nuevo_Paciente2.imprimirNumeroRegistro() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente2.imprimirNombreCompleto() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente2.imprimirNumeroSS() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente2.imprimirDireccion() + "</p>";

// ------------- PACIENTE 3 ----------------
div.innerHTML += "<p>" + nuevo_Paciente3.imprimirNumeroRegistro() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente3.imprimirNombreCompleto() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente3.imprimirNumeroSS() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente3.imprimirDireccion() + "</p>";

// ------------- PACIENTE 4 ----------------ç
div.innerHTML += "<p>" + nuevo_Paciente4.imprimirNumeroRegistro() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente4.imprimirNombreCompleto() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente4.imprimirNumeroSS() + "</p>";
div.innerHTML += "<p>" + nuevo_Paciente4.imprimirDireccion() + "</p>";
var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPacientes = new Map();
var contadorPacientes = 0;
