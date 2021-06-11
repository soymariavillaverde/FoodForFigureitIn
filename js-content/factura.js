/* Hacer un queryselectorAll de los platos para tener una lista
    hacer una lista de los platos del carrito
    una funcion que con Onclick detecte si suma añada ese plato al carrito
    una funcion que con Onclick detecte si resta quite ese plato del carrito
    otra funcion que detecte que el plato que esta en el carrito tenga un valor >0 y haga block
    otra funcion que detecte que el plato que esta en el carrito tenga un valor ==0 y haga none

    funcion de vaciar carrito
*/ 
function cantidadXprecio(num){
    cartaDePlatos.forEach(function(objeto){
        num += objeto.cantidad * objeto.precio;
    })
    return num
};
function impuestos(numI){
    numI = numI * 0.21;
    return numI
};
function deliveryFree(num){
    let deliVery = "";
    if (num > 50) {
        deliVery += "Free";
    }else{
        deliVery = num * 0.05;
        deliVery = deliVery.toFixed(2)
    }
    return deliVery
};
function totalAPagar(num1, num2, deli){
    let numTotal = 0;
    if (deli == "Free") {
        numTotal += num1 + num2;
    } else {
        numTotal += num1 + num2 + num1*0.05;
    }
    return numTotal
};
function impriTotalFactura(){
    let subTotal = 0;
    let tasasIMP = 0;
    let delivery = "";
    let total = 0;
    
    subTotal += cantidadXprecio(subTotal);
    //console.log(subTotal)
    
    tasasIMP += impuestos(subTotal);
    //console.log(tasasIMP)

    delivery = deliveryFree(subTotal);
    //console.log(delivery)

    total += totalAPagar(subTotal, tasasIMP, delivery);
    //console.log(total)
    
    ll = [{"subTotal":subTotal, "tasasIMP":tasasIMP, "delivery":delivery, "total":total}]
    //console.log(ll)
    return ll
}
function imprimirFactura (listaCuentasFactura, localizacion){
    let mainPlatos = document.querySelector(localizacion);
    let factura= "";
    listaCuentasFactura.forEach(function (elemento){
        factura = `
        <div class="factura">
            <div class="concepto-factura">
                <p class="p-basico-factura">Subtotal</p>
                <p class="p-basico-factura"><span>${elemento.subTotal.toFixed(2)}</span> €</p>
            </div>
            <div class="concepto-factura">
                <p class="p-basico-factura">Tax & Fees</p>
                <p class="p-basico-factura"><span>${elemento.tasasIMP.toFixed(2)}</span> €</p>
            </div>
            <div class="concepto-factura">
                <p class="p-basico-factura">Delivery</p>
                <p class="p-basico-factura"><span>${elemento.delivery}</span> €</p>
            </div>
            <div class="concepto-factura">
                <p class="p-negrita-factura">Total</p>
                <p class="p-negrita-factura"><span>${elemento.total.toFixed(2)}</span> €</p>
            </div>

            <button class="enviar-pedido">
                <a class="texto-enviar">Enviar pedido</a>
            </button>
        </div>
        `;
    });
    mainPlatos.innerHTML = factura;
}