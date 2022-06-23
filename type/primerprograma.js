//tipos de datos: 
//String
var cadena = "que tal";
//numeros
var numero = 12;
//booleanos
var booleano = true;
//comodin
var cualquiera = "hola";
cualquiera = 15;
//Arrays
var lenguajes = ["PHP", "Js", "Ts"];
var years = [12, 15, 16];
//multiple tipo
var mixtos = "que tal";
mixtos = 15;
var mix = 15;
mix = "pepe";
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44; //let es usado en tipo de bloque
    var num2 = 55; //mientras var es de uso global
    console.log(num1_1, num2);
}
console.log(num1, num2);
// si se usara let estaria afectando solo dentro del codigo if
// si se usara el var afectaria a todas las variables 
// la salida es: 
// 44 55
// 10 55
function getNumero(numero) {
    return "El numero es: " + numero;
}
console.log(getNumero(5));
// salida:
// El numero es: 5
// las funciones se realizan igual que con javaScript 
// lo bueno es que en typeScript se puede colocar 
// los datos que quiere recibir o botar
function getNumber(numero) {
    return "El numero es: " + numero;
}
console.log(getNumber(5));
// salida:
// El numero es: 5

//La programacion orientada a objetos
var Camisa = /** @class */ (function () {
    function Camisa(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // un constructor es un metodo especial dentro de una clase
    // se usa para dar un valor inicial a las variables y es el 
    // primer metodo que se ejecuta al crearse la clase
    Camisa.prototype.setColor = function (color) {
        this.color = color;
    };
    return Camisa;
}());
var camiseta = new Camisa("Amarilla", "blusa", "nike", "s", 15);
camiseta.setColor("Rojo");
