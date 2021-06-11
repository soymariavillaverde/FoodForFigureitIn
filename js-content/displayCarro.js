function mostrarCarrito() { /* Onclick en el boton naranja */
    let carro = document.querySelector(".carrito-compra"); /* selecciono todo el carro */
    let paginaPrincipal = document.getElementById("paginaPrincipal"); /* selecciono toda la pagina principal*/
    
    if (carro.style.display === 'none') { /* si el carro no se ve ... */
        carro.style.display = 'block'; /* mostrará el carro */
        
        paginaPrincipal.style.display = 'none'; /* ocultará la pagina principal*/
        
    } else {                           /* Si no ... */
        carro.style.display = 'none';  /* no lo muestra */
    }

    imprimir(carrito,".platosCarrito");
    imprimirFactura(impriTotalFactura(),".navfootercarrito");
};

function mostrarPrincipal() { /* onclick en el boton back del carrito, es lo mismo pero cambiando block por none */
    let carro = document.querySelector(".carrito-compra");
    let paginaPrincipal = document.getElementById("paginaPrincipal");

    if (carro.style.display === 'block') {
        carro.style.display = 'none';
        paginaPrincipal.style.display = 'block';
    } else {
        carro.style.display = 'block';
    }
}

