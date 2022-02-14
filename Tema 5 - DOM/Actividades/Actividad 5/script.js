
function crearTablaColores(tablaColores,numColores){

    // Valor input numColores
    let filas = document.getElementById(numColores).value

    // Condicional debe ser un numero entre 1 y 20
    if(!isNaN(filas) && filas >= 1 && filas <=20){

        // Elemento tabla
        let tabla = document.getElementById(tablaColores)

        // Numero de columnas
        let columnas = tabla.rows[0].cells.length;

        // Agregamos las nuevas filas
        tabla.appendChild(crearTabla(filas,columnas))

        // Variable (Array con los colores aleatorios)
        let colores = RandomColors(filas);

        // Introducir los valores en la tabla que hemos creado
        introducirDatosTabla(tabla,colores)

    }

    // Deshabilita la celda Num.Colores
    document.getElementById(numColores).setAttribute("disabled", "disabled")

    vaciarInputs()

}

function crearTabla(numFila,NumColumna){

    // Creamos el tbody
    let tbody = document.createElement("TBODY")

    //Bucle para rellenar el tbody
    for(let i = 0; i < numFila; i++){

        // Creamos el tr
        let tr = document.createElement("TR")

        // Bucle que rellena el tr (segun el numero de columnas)
        for(let x = 0; x < NumColumna;x++){

            // Creamos el td
            let td = document.createElement("TD")

            // Agregamos el td al tr
            tr.appendChild(td)

        }
        
        // Agregamos el tr al tbody
        tbody.appendChild(tr);

    }

    // Devuelve el tbody con las celdas y columnas vacias
    return tbody;

}

function RandomColors(numFila){

    // Iniciar array
    let randomColors = new Array

    // Bucle tantos colores como filas tenga la tabla
    for(let i = 0; i < numFila;i++){

        // Valores random del 0 al 255
        rojo = Math.floor(Math.random() * 256)
        verde = Math.floor(Math.random() * 256)
        azul = Math.floor(Math.random() * 256)

        // Rellenamos con los valores random que acabamos de obtener
        randomColors[i] = [rojo,verde,azul]

    }

    // Devuelve el array de colores random
    return randomColors;


}

function introducirDatosTabla(tabla,datos){

    // Le resto 1 porque la primera fila no la debemos contar
    let filas = tabla.rows.length - 1;

    // Bucle que recorre las filas
    for (let i = 0; i < filas;i++){

        // Numero de celdas que hay en la fila
        let columnas = tabla.rows[i].cells.length

        //Bucle que recorre las columnas de la fila
        for(let x = 0; x < columnas;x++){

            // Condicional: Si no es la ultima columna rellena cada celda con el numero adecuado
            if ((columnas - 1) != x){

                //Ponemos i + 1 (la primera fila no cuenta)
                tabla.rows[i +1].cells[x].innerHTML = datos[i][x]

            // Sino pone el color de fondo
            }else{

                //Ponemos i + 1 (la primera fila no cuenta)
                tabla.rows[i + 1].cells[x].style.backgroundColor =
                "rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ")"

            }

        }

    }


}

function permutarFilas(tablaColores,fila1,fila2){

    // Elemento tabla
    let tabla = document.getElementById(tablaColores)

    // Valor input fila1
    let numFila1 = document.getElementById(fila1).value

    // Valor input fila2
    let numFila2 = document.getElementById(fila2).value

    // Numero de filas totales
    let numFilas = tabla.rows.length;

    /* 
        Condicional:
            -Deben ser numeros
            -Numeros diferenteslet color2 = tabla.rows[numFila2]
            -Debe estar creada la tabla
    */
    if (!isNaN(numFila1) && !isNaN(numFila2) && numFila1 != numFila2 && numFilas > 1){
        /* 
            Condicional:
                -Numero1 entre 1 y maximo de filas
                -Numero2 entre 1 y maximo de filas
        */
        if(numFila1 >= 1 && numFila1 < numFilas && numFila2 >= 1 && numFila2 < numFilas){

            // Elemento tbody es 0 si añades un thead a la primera fila sino seria 1
            let tbody = tabla.getElementsByTagName("tbody")[0]

            // Fila 1
            let color1 = tabla.rows[numFila1]

            // Fila 2
            let color2 = tabla.rows[numFila2]

            // Posicion 1
            let pos1 = tbody.childNodes[numFila1]

            // Posicion 2
            let pos2 = tbody.childNodes[numFila2]

            // Insertar fila 1 en posicion 2
            tbody.insertBefore(color1,pos2)

            // Insertar fila 2 en posicion 1
            tbody.insertBefore(color2,pos1)
        }
    }

    vaciarInputs()

}

function cambiarFondo(tablaColores,filaFondo){

    // Elemento tabla
    let tabla = document.getElementById(tablaColores)

    // Valor input filaFondo
    let fila = document.getElementById(filaFondo).value

    // Numero de filas
    let numFilas = tabla.rows.length;

    // Condicional: Debe ser un numero entre 1 y maximo de filas
    if(!isNaN(fila) && fila >= 1 && fila < numFilas && numFilas > 1){

        // Numero de columnas (-1 es pork los arrays cuentan la posicion 0 y el length no)
        let columna = tabla.rows[fila].cells.length - 1;

        // Valor rgb de la fila
        let estilo = tabla.rows[fila].cells[columna].style.backgroundColor;

        // Ponemos el color de fondo
        document.body.style.backgroundColor = estilo;

    }

    vaciarInputs()

}

function vaciarInputs(){
    inputs=document.getElementsByTagName("INPUT")
    for (let i=0;i<inputs.length;i++){
        if (inputs[i].type=="text"){
            inputs[i].value=null;
        }
    }
}