
//INVITADOS
let invitados = parseInt(prompt("¿Qué cantidad de personas asitirán a la reunión?"));
let abstemios = parseInt(prompt("¿Cuántas personas no toman alcohol?"));


//CÁLCULO BEBEDORES
let bebedores = (invitados - abstemios);


// //BEBIDAS
class bebida {
    //INFO DE LAS BEBIDAS
    constructor(nombre, precio, presentación, bebidaConAlcohol, consumoPromedio, litrosBotella) {
        this.nombre = nombre;
        this.precio = precio;
        this.presentación = presentación;
        this.bebidaConAlcohol = bebidaConAlcohol;
        this.consumoPromedio = consumoPromedio;
        this.litrosBotella = litrosBotella;
        this.bebidaLtTotal = 0;
        this.bebidaPrecioTotal = 0;
        this.calculoLitros();
        this.calculoPrecio();
    }

    descripciónCorta = () => {
        return (this.nombre + " $" + this.precio + " por " + this.presentación);
    }

    //CALCULO DE LITROS POR BEBIDA (SEGÚN TIPO DE INVITADOS)
    calculoLitros = () => {
        if (this.bebidaConAlcohol == true) {
            this.bebidaLtTotal = this.litrosBotella * this.consumoPromedio * bebedores;
        } else {
            this.bebidaLtTotal = this.litrosBotella * this.consumoPromedio * abstemios;
        }
    }

    //CALCULO PRECIO POR BEBIDA
    calculoPrecio = () => {
        this.bebidaPrecioTotal = (this.bebidaLtTotal / this.litrosBotella) * this.precio;
    }
}


//BEBIDAS DISPONIBLES EN EL STORE

const CERVEZA = new bebida("Cerveza", 2500, "1 lt.", true, 3, 1);
const VINO = new bebida("Vino", 3500, "750 ml.", true, 3, 0.75);
const AGUA = new bebida("Agua", 1000, "1 lt.", false, 3, 1);
const COCACOLA = new bebida("Coca-Cola", 2000, "1 lt.", false, 3, 1);


//ELEGIR BEBIDAS
let bebidaElegidas = "";
const CARRITO = [];

function validar(a, b){
    if (a.find((item) => item === b) === undefined) {
        a.push(b);    
    } else {
        alert("Producto ya seleccionado");
    }
}

while (bebidaElegidas != "5") {
    bebidaElegidas = prompt("Ingresá el número de la bebida que querés ofrecer en tu fiesta\n 1. "
        + CERVEZA.nombre + "\n 2. "
        + VINO.nombre + "\n 3. "
        + AGUA.nombre + "\n 4. "
        + COCACOLA.nombre
        + "\n 5. Terminar y ver gasto total."
    );

    switch (bebidaElegidas) {
        case "1":
            validar(CARRITO, CERVEZA);
            break;
        case "2":
            validar(CARRITO, VINO);
            break;
        case "3":
            CARRITO.push(AGUA);
            break;
        case "4":
            CARRITO.push(COCACOLA);
            break;
        case "5":
            break;
        default:
            alert("El dato ingresado es inválido.\nPor favor elegí un número del 1 al 5.");
            break;
    }
}

// TOTALIZADOR
let salida = "";
let precioTotal = 0;

CARRITO.forEach(item => {
    precioTotal += item.bebidaPrecioTotal;
});

CARRITO.forEach(item => {
    salida += item.bebidaLtTotal + "lts. de " + item.nombre + " - $" + item.bebidaPrecioTotal + "\n";
});

alert("Para tu fiesta de " + invitados + " invitados (" + abstemios + " abstemios) tenés que comprar:\n"
    + salida
    + "Gasto total = " + precioTotal
);