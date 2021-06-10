
/*let muchosPlatos = [
    {
        "id": 0,
        "img": "Img/Imagenes comida/imagenes restaurant-01.jpg",
        "nombre": "Chicken Veggi Salad",
        "precio": 4.99,
        "descripcion":"Tomate, lechuga, calabacín, cebolla y pollo a la plancha.",
        "cantidad": 0
    },
    {
        "id": 1,
        "img": "Img/Imagenes comida/imagenes restaurant-02.jpg",
        "nombre": "Mutton Curry",
        "precio": 7.99,
        "descripcion":"Curry con cebolleta y carne de vaca.",
        "cantidad": 0
    },
    {
        "id": 2,
        "img": "Img/Imagenes comida/imagenes restaurant-03.jpg",
        "nombre": "French Fries",
        "precio": 2.99,
        "descripcion":"Patatas muy crujientes y alargadas con salsa brava.",
        "cantidad": 0
    },
    {
        "id": 3,
        "img": "Img/Imagenes comida/batido-mango-m.jpeg",
        "nombre": "Batido de Mango",
        "precio": 1.99,
        "descripcion":"Mango, leche y hielo picado.",
        "cantidad": 0
    },
    {
        "id": 4,
        "img": "Img/Imagenes comida/imagenes restaurant-04.jpeg",
        "nombre": "Desayuno cargado",
        "precio": 3.99,
        "descripcion":"Tomate, chorizo, lomo, campiñones, habas, huevo frito y pan.",
        "cantidad": 0
    },
    {
        "id": 5,
        "img": "Img/Imagenes comida/imagenes restaurant-05.jpeg",
        "nombre": "Bocadillo de lomo y queso",
        "precio": 1.99,
        "descripcion":"Lomo, queso, cilantro.",
        "cantidad": 0
    },
    {
        "id": 6,
        "img": "Img/Imagenes comida/imagenes restaurant-06.jpg",
        "nombre": "Cake du chocolat",
        "precio": 3.99,
        "descripcion":"Chocolate, chocolate negro y nata.",
        "cantidad": 0
    },
    {
        "id": 7,
        "img": "Img/Imagenes comida/imagenes restaurant-07.jpg",
        "nombre": "Hamburguesa con queso",
        "precio": 3.99,
        "descripcion":"Carne de vaca, lechuga, quese cheddar y pan con sésamo.",
        "cantidad": 0
    }];

let contadorArray = cartaDePlatos.map(function(obj){
    return obj.cantidad 
});
//Funcio Suma 

let displayCarrito = [];
//imprimir(displayCarrito, ".platosCarrito")


function añadirPlato(botonSuma, iD) {
    let padreBotonSuma = botonSuma.parentNode;
    let contador = padreBotonSuma.querySelector(".numeroContador");
    
    cartaDePlatos[iD].cantidad = cartaDePlatos[iD].cantidad + 1;

    contador.value = cartaDePlatos[iD].cantidad;

}

//Funcion Diplay Carrito


displayCarrito = cartaDePlatos.filter(plato => plato.cantidad > 0)
console.log(displayCarrito)

imprimir(displayCarrito, ".platosCarrito")

//Funcion Resta

function quitarPlato(botonResta, id) {
    let padreBotonResta = botonResta.parentNode;
    let contador = padreBotonResta.querySelector(".numeroContador");
    
    if (contadorArray[id] > 0){
        contadorArray[id] = contadorArray[id] - 1;

        contador.value = contadorArray[id];
    }     

}
*/