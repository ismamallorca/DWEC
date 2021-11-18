class Punto {
    constructor(CoordX, CoordY) {
        this.X = CoordX;
        this.Y = CoordY;
    }

    cambiar(NX, NY) {
        this.X = NX;
        this.Y = NY;
    }

    toString() {
        return "(" + this.X + "," + this.Y + ")";
    }

    copia() {
        return new Punto(this.X, this.Y);
    }

    suma(punto) {
        return new Punto(this.X + punto.X, this.Y + punto.Y);
    }

    calcularDistancia(punto) {
        let horizontal = (punto.X) - (this.X);
        let vertical = (punto.Y) - (this.Y);
        let elevadoX = Math.pow(horizontal, 2);
        let elevadoY = Math.pow(vertical, 2);
        let raiz = Math.sqrt(elevadoX + elevadoY);
        return raiz.toFixed(2);
    }
}

export {Punto};