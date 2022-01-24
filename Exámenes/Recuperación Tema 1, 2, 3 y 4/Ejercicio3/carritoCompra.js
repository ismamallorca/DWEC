function CarritoCompra() {
    this.carrito = new Array();

    
    function localizarItemCarrito(producto) {
        
    }   

    this.introducirItemCarrito =function (producto, cantidad) {
            this.carrito.push(new Array(producto, cantidad));
    }

    
    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = localizarItemCarrito(producto);

        // AÑADIR CÓDIGO AQUÍ
    }

}
