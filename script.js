//Ingreso de usuario
let idUsuario = prompt("ingrese su nombre por favor")
alert(`Bienvenido ${idUsuario} a rotiseria La Barra`)
alert(`${idUsuario}, a continuacion, se le mostraran los Numeros de Identificacion de comida, elija uno por favor.`)


//Esta clase de Productos es la base para cargar los mismos.
class Productos {
    constructor (nombre, id, precio, tipo, stock) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.tipo = tipo
        this.stock = stock
    }

    vender (cantidad) {
        this.stock = this.stock - cantidad
    }
}

//Inicializo los arrays para las categorias de comidas.
const pizzas = []
const hamburguesas = []
const empanadas = []
const tartas = []

//Pizzas.
pizzas.push(new Productos("Pizza Tomate y Huevo", 1, 1050, "Especial TyH", 30))
pizzas.push(new Productos("Pizza Muzzarella a la piedra", 2, 900, "Muzza Piedra", 70))
pizzas.push(new Productos("Pizza Especial La Isla", 3, 1500, "Especial Barra", 100))
//Hamburguesas.
hamburguesas.push(new Productos("Hamburguesa Americana", 4, 1100, "Americana", 80))
hamburguesas.push(new Productos("Hamburguesa Monstruo Big", 5, 1500, "Monstruo Big", 80))
//Empanadas.
empanadas.push(new Productos("Empanada Vacio", 6, 220, "Empanada de Vacio", 200))
empanadas.push(new Productos("Empanada Verdura", 7, 200, "Empanada de Verdura", 200))
empanadas.push(new Productos("Empanada Pollo", 8, 200, "Empanada de Pollo", 200))
empanadas.push(new Productos("Empanada JyQ", 9, 200, "Empanada de Jamon y Queso", 200))
//Tartas.
tartas.push(new Productos("Tarta JyQ", 10, 500, "Tarta de JyQ", 50))
tartas.push(new Productos("Tarta sin TACC", 11, 500, "Tarta sin tacc", 50))

//Recorro los arrays para mostrar los productos al usuario.
for (const pizza of pizzas) {
    alert("ID (" + pizza.id + ") - " + pizza.nombre);
}

for (const hamburguesa of hamburguesas) {
    alert("ID (" + hamburguesa.id + ") - " + hamburguesa.nombre);
}

for (const empanada of empanadas) {
    alert ("ID (" + empanada.id + ") - " + empanada.nombre);
}

for (const tarta of tartas) {
    alert ("ID (" + tarta.id + ") - " + tarta.nombre);
}

//Funcion para calcular el precio final de la compra
function calcularPrecio (precioComida, cantidadComida, costoEnvio) {
    return ((precioComida * 1.21) * cantidadComida) + costoEnvio
}

//Solicito al usuario la identificación de la comida y la almaceno en una nueva variable con la comida seleccionada.
let comidaSeleccionada = parseInt(prompt("Ingrese el ID de la comida que desea pedir: "))
const pizzaBuscada = pizzas.find(pizza => pizzas.id === comidaSeleccionada)
const hamburguesaBuscada = hamburguesas.find(hamburguesa => hamburguesas.id === comidaSeleccionada)
const empanadaBuscada = empanadas.find(empanada => empanadas.id === comidaSeleccionada)
const tartaBuscada = tartas.find(tarta => tartas.id === comidaSeleccionada)

//Solicito al usuario la cantidad de comida.
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere de la comida seleccionada"))

//Costo de envio producto.
const envio = 200

//Salida de la consola indicando el precio final de la compra segun la comida elegida.
if (comidaSeleccionada <= 0) {
    alert("Ingresa un Id Valido, por favor")
} else if (comidaSeleccionada <= 6) {
    alert("El precio final de tu compra es: $" + calcularPrecio(pizzaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    pizzaBuscada.vender(cantidad)
} else if (comidaSeleccionada <=10) {
    alert("El precio final de tu compra es: $" + calcularPrecio(hamburguesaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    hamburguesaBuscada.vender(cantidad)
} else if (comidaSeleccionada <= 15) {
    alert("El precio final de tu compra es: $" + calcularPrecio(empanadaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    empanadaBuscada.vender(cantidad)
} else if (comidaSeleccionada <= 19) {
    alert("El precio final de tu compra es: $" + calcularPrecio(tartaBuscada.precio, cantidad, envio))
    alert("Espero que lo disfrutes, La isla.")
    tartaBuscada.vender(cantidad)
} else {
    alert ("Ingresa un ID valido, por favor.")
}