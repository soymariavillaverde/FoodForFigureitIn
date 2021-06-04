function mostrarCarrito() {
    let x = document.querySelector(".carrito-compra");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
