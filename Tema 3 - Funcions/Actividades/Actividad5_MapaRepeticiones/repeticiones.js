function mapaRepeticiones(array) {
    if (!(array instanceof Array)) {
        return null;
    } else {
        let mapa = new Map();

        for (let clave of array) {
            if (mapa.get(clave) != undefined) {
                mapa.set(clave, mapa.get(clave) + 1);
            } else {
                mapa.set(clave, 1);
            }
        }

        return mapa;
    }
}