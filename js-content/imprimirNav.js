let cartaDePlatos = [
    {
        "id": 0,
        "img": "Img/Imagenes comida/imagenes restaurant-01.jpg",
        "nombre": "Chicken Veggi Salad",
        "precio": 4.99,
        "descripcion":"Tomate, lechuga, calabacín, cebolla y pollo a la plancha.",
        "cantidad": 0,
        "categoria": "Dinner"
    },
    {
        "id": 1,
        "img": "Img/Imagenes comida/imagenes restaurant-02.jpg",
        "nombre": "Mutton Curry",
        "precio": 7.99,
        "descripcion":"Curry con cebolleta y carne de vaca.",
        "cantidad": 0,
        "categoria": "Dinner"
    },
    {
        "id": 2,
        "img": "Img/Imagenes comida/imagenes restaurant-03.jpg",
        "nombre": "French Fries",
        "precio": 2.99,
        "descripcion":"Patatas muy crujientes y alargadas con salsa brava.",
        "cantidad": 0,
        "categoria": "Fast Food"
    },
    {
        "id": 3,
        "img": "Img/Imagenes comida/batido-mango-m.jpeg",
        "nombre": "Batido de Mango",
        "precio": 1.99,
        "descripcion":"Mango, leche y hielo picado.",
        "cantidad": 0,
        "categoria": "Drinks"
    },
    {
        "id": 4,
        "img": "Img/Imagenes comida/imagenes restaurant-04.jpeg",
        "nombre": "Desayuno cargado",
        "precio": 3.99,
        "descripcion":"Tomate, chorizo, lomo, campiñones, habas, huevo frito y pan.",
        "cantidad": 0,
        "categoria": "Breakfast"
    },
    {
        "id": 5,
        "img": "Img/Imagenes comida/imagenes restaurant-05.jpeg",
        "nombre": "Bocadillo de lomo y queso",
        "precio": 1.99,
        "descripcion":"Lomo, queso, cilantro.",
        "cantidad": 0,
        "categoria": "Breakfast"
    },
    {
        "id": 6,
        "img": "Img/Imagenes comida/imagenes restaurant-06.jpeg",
        "nombre": "Cake du chocolat",
        "precio": 3.99,
        "descripcion":"Chocolate, chocolate negro y nata.",
        "cantidad": 0,
        "categoria": "Desserts"
    },
    {
        "id": 7,
        "img": "Img/Imagenes comida/imagenes restaurant-07.jpeg",
        "nombre": "Hamburguesa con queso",
        "precio": 3.99,
        "descripcion":"Carne de vaca, lechuga, quese cheddar y pan con sésamo.",
        "cantidad": 0,
        "categoria": "Fast Food"
    }];

//Imprimir todos los platos

let localizacion = ".platos";

function imprimir (listaObjetos, localizacion){
    let mainPlatos = document.querySelector(localizacion);
    let plato= "";

    listaObjetos.forEach(function (objeto){
        plato += `
        <div class="plato-individual">
            <div class="img-plato">
                <img class="plato-comida" src= "${objeto.img}" alt="${objeto.nombre}">
            </div>
            <div class="plato-contenido">
                <h2 class="nombre-plato">${objeto.nombre}</h2>
                <h3 class="precio-plato"><span>${objeto.precio}</span> €</h3>
                <p class="descripcion-plato">${objeto.descripcion}</p>
            </div>
            <div class="nombreYcontador">
                <div class="contador">
                    <button class="menos" class= "pulse" onclick="quitarPlato(this, ${objeto.id})" >
                        <h1 class="signo-">-</h1>
                    </button>
    
                    <input class="numeroContador" value=${objeto.cantidad}></input>
    
                    <button class="mas pulse" class= "pulse" onclick="añadirPlato(this, ${objeto.id})">
                        <h2 class="signo+">+</h2>
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    mainPlatos.innerHTML = plato;
}
imprimir(cartaDePlatos, localizacion);

//Filtrar los platos

function impFiltros(filtro){
    let arrayFiltrado = [];

    cartaDePlatos.forEach(function(objeto){
        if (objeto.categoria == filtro) {
            arrayFiltrado.push(objeto)
        }
    })

    imprimir(arrayFiltrado, localizacion);
}

function impTop(){
    imprimir(cartaDePlatos, localizacion)
}


// Funciones suma resta y display plato carrito

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

    let encontrados = cartaDePlatos.filter(plato => plato.cantidad > 0)
    displayCarrito.push(encontrados)
    console.log(encontrados)
}

//Funcion Diplay Carrito





//imprimir(displayCarrito, ".platosCarrito")

//Funcion Resta

function quitarPlato(botonResta, iD) {
    let padreBotonResta = botonResta.parentNode;
    let contador = padreBotonResta.querySelector(".numeroContador");
    
    if (cartaDePlatos[iD].cantidad > 0){
        cartaDePlatos[iD].cantidad = cartaDePlatos[iD].cantidad - 1;

        contador.value = cartaDePlatos[iD].cantidad;
    }     

}