function añadirPlato(botonSuma) {
    let padreBotonSuma = botonSuma.parentNode;
    let contador = padreBotonSuma.querySelector(".numeroContador");
    
    if (contador.value < 9){
        contador.value++
    }

    if (contador.value == 11){
        contador.value = parseInt(contador.value) * 10;
    }
}

function quitarPlato(botonResta) {
    let padreBotonResta = botonResta.parentNode;
    let contador = padreBotonResta.querySelector(".numeroContador");

    if (contador.value > 0) {
        contador.value--
    }
}