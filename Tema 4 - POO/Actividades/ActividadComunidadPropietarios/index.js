import { Edificio } from "./edificios.js";

const edificio1 = new Edificio('calle', 'Marqués de la Fontsanta', 60, '07005');
console.log(edificio1);

edificio1.añadirPlanta('1A');
edificio1.añadirPlanta('1B');
console.log(edificio1);

edificio1.añadirPuerta('1A', '1');
edificio1.añadirPuerta('1A', '2');
edificio1.añadirPuerta('1B', '1');
edificio1.añadirPuerta('1B', '2');
console.log(edificio1);

edificio1.añadirPropietario('Belén Laserna Belenguer', '1A', '1');
edificio1.añadirPropietario('Pedro Jiménez Vázquez', '1A', '2');
edificio1.añadirPropietario('Ana María Rodríguez Figuerola', '1B', '1');
edificio1.añadirPropietario('Miguel López López', '1B', '2');
console.log(edificio1);

console.log(edificio1.imprimirTodosPropietarios());

edificio1.modificarTipoVia('avenida');
edificio1.modificarNombreVia('Marques de la Fontsanta');
edificio1.modificarNumeroEdificio('60A');
edificio1.modificarCodigoPostal('007005');

console.log(edificio1.imprimirTipoVia());
console.log(edificio1.imprimirNombreVia());
console.log(edificio1.imprimirNumeroEdificio());
console.log(edificio1.imprimirCodigoPostal());