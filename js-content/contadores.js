function añadirPlato(botonSuma) {
    let padreBotonSuma = botonSuma.parentNode;
    let contador = padreBotonSuma.querySelector(".numeroContador");
    
    let localizacion = document.getElementById('topCarrito');
    let visaAbueloSuma = padreBotonSuma.parentNode.parentNode;

    if (contador.value < 9){
        contador.value++
    }

    if (contador.value >0){
        localizacion.insertAdjacentElement("afterend",visaAbueloSuma);
    }

    if (contador.value == 11){      /* ejemplo en donde funciona el parseInt() */
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
