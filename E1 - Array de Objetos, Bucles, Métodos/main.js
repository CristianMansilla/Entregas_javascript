/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso.  

Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 💸 */

let pizzas = [
    {id: 1, nombre: "Cuatro Estaciones", ingredientes: ["tomate", "mozzarella", "setas", "huevo duro", "aceitunas", "alcachofas", "salami", "jamón de york", "pimienta", "anchoa", "pimiento verde"], precio: 1800},
    {id: 2, nombre: "Margarita", ingredientes: ["tomate", "mozzarella", "albahaca fresca"], precio: 500},
    {id: 3, nombre: "Carbonara", ingredientes: ["yema de huevo", "huevo duro", "manteca de cerdo", "aceite", "pimienta negra", "bacon"], precio: 800},
    {id: 4, nombre: "Barbacoa", ingredientes: ["carne de ternera", "trozos de pollo", "cebolla", "tomate", "bacon", "mozzarella", "salsa barbacoa"], precio: 1000},
    {id: 5, nombre: "Calzone", ingredientes: ["champiñones", "carne picada", "queso fundido"], precio: 900},
    {id: 6, nombre: "Cuatro Quesos", ingredientes: ["mozzarella", "provolone", "parmesano", "emmental"], precio: 1200},
]


function imprimirArray(_pizza) {
    let idImpar;
    let menos600;

    console.log("Este restaurante ofrece las siguientes variedades de pizzas:");
    console.log(_pizza.map((name) => `${name.id}:${name.nombre} - $${name.precio}\nINGREDIENTES:${name.ingredientes}\n`).join("\n"));
    console.log("___________________________________");

    idImpar = _pizza.filter((item) => item.id%2 != 0);
    console.log("Las pizzas que tienen un ID IMPAR son:");
    console.log(idImpar.map((name) => `${name.id}:${name.nombre}`).join("\n"));

    console.log("-------------------------------------");
    menos600 = _pizza.filter((item) => item.precio < 600);
    console.log("La pizza que vale menos de $600 es:");
    console.log(menos600.map((name) => `${name.id}:${name.nombre}`).join("\n"));
    
}

imprimirArray(pizzas);