/* MAPAS */
// Permiten crear estructuras de tipo clave-valor.
// Las claves no se pueden repetir y tienen asociado un valor.
// Las claves y los valores pueden ser de cualquier tipo.
// En un mismo mapa, no pueden haber dos claves repetidas, pero
// sí se puede repetir el valor.

// ------ DECLARAR MAPAS ------ //
const provincias = new Map();

// ------ ASIGNAR VALORES A MAPAS ------- //
// Método SET
// Permite asignar nuevos elementos al mapa.
// Requiere la clave del nuevo elemento y el valor con el que
// asociamos dicha clave.

const provincias = new Map();
provincias.set(1, 'Álava');
provincias.set(28, 'Madrid');
provincias.set(34, 'Palencia');
provincias.set(41, 'Sevilla');
console.log(provincias);
/* Salida: 
    Map(4) {
        1 => 'Álava',
        28 => 'Madrid',
        34 => 'Palencia',
        41 => 'Sevilla'
    }
*/

// Si volvemos a añadir un elemento con la misma clave, este
// sustituye al anterior ya que no pueden haber claves repetidas.

const provincias = new Map();
provincias.set(1,'Álava').set(28,'Madrid').set(34,'Palencia')
    .set(41,'Sevilla');
console.log(provincias);

/* Salida: 
    Map(4) {
        1 => 'Álava',
        28 => 'Madrid',
        34 => 'Palencia',
        41 => 'Sevilla'
    }
*/


// -------- USO DE ARRAYS PARA CREAR MAPAS ---------
const personas = new Map([[1, 'Jose'], [2, 'María'], [3, 'Elena']]);
console.log(personas); // Salida: Map(3) { 1 => 'Jose', 2 => 'María', 3 => 'Elena' }

// --------- OPERACIONES SOBRE MAPAS ----------
// MÉTODO GET
// Permite obtener los valores de un mapa a partir de una clave.
// Obtener el valor referente a una clave es una operación muy rápida.
const provincias = new Map();
provincias.set(1, 'Álava').set(28, 'Madrid').set(34, 'Palencia').set(41, 'Sevilla');
console.log(provincias.get(34)); // Salida: Palencia

// MÉTODO HAS
// Permite buscar una clave en el mapa
// Si se encuentra devuelve true y si no, devuelve false