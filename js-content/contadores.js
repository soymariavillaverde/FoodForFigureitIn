// Funciones suma resta y display block y none platos carrito  -----------------------------------
let carrito = []; //imprimir(carrito, ".platosCarrito"); boton naranjaaa
//Funcio Suma añadir a carrito                                     
function añadirPlato(botonSuma, iD) {
    upDateContador(botonSuma, siExisteEnCarritoSum( encontrarObj(iD) ) )
    imprimirFactura(impriTotalFactura(),".navfootercarrito");
}
function encontrarObj(iD){
    let objFound = cartaDePlatos.find(plato => plato.id == iD);
    return objFound
}
function siExisteEnCarritoSum(objExiste){ // si no esta en el carrito suma y añade
    if (carrito.includes(objExiste) == false){
        objExiste.cantidad++;
        carrito.push(objExiste)
    }else {                              // si, si esta en el carrito solo suma
        objExiste.cantidad++;
    }
    return objExiste.cantidad
}
function upDateContador(elementHTML, objValueCantidad){
    let padreElementHTML = elementHTML.parentNode;
    let contador = padreElementHTML.querySelector(".numeroContador");

    contador.value = objValueCantidad;
}
function siExisteEnCarritoRest(objExiste){ 
    if (carrito.includes(objExiste) == true){ // si es verdad que esta en el carrito y es >0 restara
        if (objExiste.cantidad > 0) {
            objExiste.cantidad--;
        }
        if (objExiste.cantidad == 0) {       // si la cantidad es 0 se eliminara del carrito
            let index = carrito.indexOf(objExiste)
            //console.log(index)
            //console.log(carrito)
            carrito.splice(index, 1);
            //console.log(carrito)
            imprimir(carrito, ".platosCarrito")
        }
    }
    return objExiste.cantidad
}
//Funcion Resta
function quitarPlato(botonResta, iD) {
    upDateContador(botonResta, siExisteEnCarritoRest( encontrarObj(iD) ) );
    imprimirFactura(impriTotalFactura(),".navfootercarrito");
}
//Boton vaciar carrito --------------------------------------------------------------------------
function vaciarCarrito(){
    carrito = [];
    imprimir(carrito,".platosCarrito");
    lll = [{"subTotal":0, "tasasIMP":0, "delivery":0, "total":0}]
    imprimirFactura(lll,".navfootercarrito");
}