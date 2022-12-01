/*
¡Volvemos a trabajar con nuestro array de Pizzas🍕 !:

Deberán realizar el siguiente desafio: 

👉 A cada Pizza, agregarle una imagen. 
👉 Crear un archivo HTML que contenga un contenedor en el cual se renderice una card en la que deberán renderizar el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). Además, deberán renderizar el mismo input de tipo number y botón de la entrega anterior.

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input.

🚨 Si el número ingresado no coincide con ningún id, renderizar un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar un mensaje de error diferente en el contenedor. 
🚨 En el contenedor se debe renderizar una única cosa , ya sea la pizza buscada y renderizada, o cualquiera de los errores(El error no se guarda en el LS).

¿Cuál es el desafío final?
Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página.
*/

let pizzas = [
    {id: 1, nombre: "Cuatro Estaciones", ingredientes: ["tomate", "mozzarella", "setas", "huevo duro", "aceitunas", "alcachofas", "salami", "jamón de york", "pimienta", "anchoa", "pimiento verde"], precio: 1800, imagen: "./img/cuatro_estaciones.jpg"},
    {id: 2, nombre: "Margarita", ingredientes: ["tomate", "mozzarella", "albahaca fresca"], precio: 500, imagen: "./img/margarita.jpg"},
    {id: 3, nombre: "Carbonara", ingredientes: ["yema de huevo", "huevo duro", "manteca de cerdo", "aceite", "pimienta negra", "bacon"], precio: 800, imagen: "./img/carbonara.webp"},
    {id: 4, nombre: "Barbacoa", ingredientes: ["carne de ternera", "trozos de pollo", "cebolla", "tomate", "bacon", "mozzarella", "salsa barbacoa"], precio: 1000, imagen: "./img/barbacoa.jpg"},
    {id: 5, nombre: "Calzone", ingredientes: ["champiñones", "carne picada", "queso fundido"], precio: 900, imagen: "./img/calzone.jpg"},
    {id: 6, nombre: "Cuatro Quesos", ingredientes: ["mozzarella", "provolone", "parmesano", "emmental"], precio: 1200, imagen: "./img/cuatro_quesos.jpg"},
]

let pitza = [];

recuperarLocalStorage();

const input = document.getElementById("input");
const botonBuscar = document.getElementById("boton");
const cards_container = document.querySelector(".cards_container");


botonBuscar.addEventListener("click", filtrar);
// input.addEventListener("keyup", filtrar);

function filtrar(){
    
    let datoInput = input.value;
    // console.log(datoInput);
    //El usuario ingresó una pizza?
    if(datoInput === ""){
        showError("Error no ingresó ninguna palabra");
        return;
    }
    crearHTML();

    sendLocalStorage();
}

function crearHTML(){
    cards_container.innerHTML = "";
    const texto = input.value.toLowerCase();
    for(let pi of pizzas){
        let nombre = pi.nombre.toLowerCase();
        
        //Si no encuentra el texto ingresado por teclado retorna -1
        if(nombre.indexOf(texto) != -1){
            createCard(pi);

            //Si la tarea ya existe en el array que no la guarde.
            /* if(pitza.some((item) => texto === item.nombre)){
                showError("La pizza ya existe");
                return;
            } */

            pitza = [...pitza, pi];
            // console.log(pitza);
        }
    }
    if(cards_container.innerHTML === ""){

        showError("Error palabra incorrecta");
    }

    //Reseteo el valor del input
    input.value = "";
}

function showError(error){
    let msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    cards_container.appendChild(msgError);

    //Timer de 3 segundos de duración del mensaje de error
    setTimeout(()=>{
        msgError.remove();
    }, 3000);
}

function sendLocalStorage(){
    localStorage.setItem("pizzas", JSON.stringify(pitza));
}

pitza = JSON.parse(localStorage.getItem("pizzas")) || [];

console.log(pitza);

function recuperarLocalStorage(){
    document.addEventListener("DOMContentLoaded", ()=>{
        //Parseamos para convertir el string a un objeto, para poder utilizar el foreach en la funcion de createHTML()
        pitza = JSON.parse(localStorage.getItem("pizzas")) || [];
        //crearHTML();
        if(pitza != []){
            pitza.forEach(pi => {
                createCard(pi);
                // pitza = [...pitza, pi];
            });
            
        }
        pitza = [];
        sendLocalStorage();
    });
    //Guardar el array en el local storage
    // sendLocalStorage();
}

function createCard(pi){
    const div = document.createElement("div");
    div.innerHTML = `
    <img src='${pi.imagen}'> 
    <h2>${pi.nombre}</h2> 
    <h3>INGREDIENTES:<br>${pi.ingredientes}</h3> 
    <div class='buy'>
        <h2>$${pi.precio}</h2>
        <a><i class="fa-solid fa-cart-arrow-down"></i></a>
    </div>`
    //Le asignamos una clase de CSS con los estilos
    div.classList.add("card");
    cards_container.appendChild(div);
}