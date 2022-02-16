function crearTablaColores(tablaColores, numColores) {
    let filas = document.getElementById(numColores).value;

    // Creamos este condicional porque se nos pide que la tabla no puede tener menos de 1 fila ni más de 20.
    if (!isNaN(filas) && filas >= 1 && filas <= 20) {

        // Creamos el elemento tabla
        let tbl = document.getElementById(tablaColores);
        let cols = tbl.rows[0].cells.length;

        // Añadimos las filas al elemento tabla
        tbl.appendChild(crearTabla(filas, cols));

        // Creamos una variable "colores" donde se guarda un array de colores aleatorios
        let colores = RandomColors(filas);

        // Introducimos los datos en la tabla
        introducirDatosTbl(tbl, colores);
    }

    // Deshabilitamos la celda de "numColores"
    document.getElementById(numColores).setAttribute("disabled", "disabled");

    // Función para borrar los inputs al darle a un botón
    borrarDatos();
}

function crearTabla(numFila, numColumna) {
    let tbody = document.createElement("TBODY");

    // Creamos un bucle para introducir datos al tbody
    for (let i = 0; i < numFila; i++) {
        let tr = document.createElement("TR");
        for (let z = 0; z < numColumna; z++) {
            let td = document.createElement("TD");

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    return tbody;
}

function RandomColors(numFila) {
    let arrayColors = new Array;
    for (let i = 0; i < numFila; i++) {
        rojo = Math.floor(Math.random() * 256);
        verde = Math.floor(Math.random() * 256);
        azul = Math.floor(Math.random() * 256);

        arrayColors[i] = [rojo, verde, azul]
    }

    return arrayColors;
}

function introducirDatosTbl(tabla, datos) {
    let filas = tabla.rows.length - 1;
    for (let i = 0; i < filas; i++) {
        let cols = tabla.rows[i].cells.length;

        for (let z = 0; z < cols; z++) {
            if ((cols - 1) != z) {
                tabla.rows[i + 1].cells[z].innerHTML = datos[i][z]
            } else {
                tabla.rows[i + 1].cells[z].style.backgroundColor = "rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ")"
            }
        }
    }
}

function permutarFilas(tablaColores, fila1, fila2) {
    let tabla = document.getElementById(tablaColores);
    let Fila1 = document.getElementById(fila1).value;
    let Fila2 = document.getElementById(fila2).value;
    let numFilas = tabla.rows.length;

    if (!isNaN(Fila1) && !isNaN(Fila2) && Fila1 != Fila2 && numFilas > 1) {
        if (Fila1 >= 1 && Fila1 < numFilas && Fila2 >= 1 && Fila2 < numFilas) {
            let tbody = tabla.getElementsByTagName("tbody")[0]

            let prim_color = tabla.rows[Fila1]
            let segu_color = tabla.rows[Fila2]
            let prim_pos = tbody.childNodes[Fila1]
            let segu_pos = tbody.childNodes[Fila2]

            tbody.insertBefore(prim_color, segu_pos)
            tbody.insertBefore(segu_color, prim_pos)
        }
    }

    borrarDatos();
}

function cambiarFondo(tablaColores, filaFondo) {
    let tabla = document.getElementById(tablaColores)
    let fila = document.getElementById(filaFondo).value
    let numFilas = tabla.rows.length;

    if (!isNaN(fila) && fila >= 1 && fila < numFilas && numFilas > 1) {
        let col = tabla.rows[fila].cells.length - 1;
        let style = tabla.rows[fila].cells[col].style.backgroundColor;
        document.body.style.backgroundColor = style;
    }

    borrarDatos();
}

function borrarDatos() {
    datos = document.getElementsByTagName("input");
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].type == "text") {
            datos[i].value = null;
        }
    }
}