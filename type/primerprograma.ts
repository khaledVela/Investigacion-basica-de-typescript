//tipos de datos: 
//String
let cadena: string = "que tal";
//numeros
let numero: number = 12;
//booleanos
let booleano: boolean=true;
//comodin
let cualquiera: any="hola";
cualquiera=15;
//Arrays
var lenguajes: Array<string>=["PHP","Js","Ts"];
let years: number[]=[12,15,16]
//multiple tipo
let mixtos: string | number = "que tal";
mixtos=15;
//personalizados
type mixto = string | number;
let mix:mixto=15;
mix="pepe";



var num1: number =10;
var num2: number =12;
if(num1==10){
    let num1=44; //let es usado en tipo de bloque
    var num2=55; //mientras var es de uso global

    console.log(num1, num2);
}
console.log(num1, num2);
// si se usara let estaria afectando solo dentro del codigo if
// si se usara el var afectaria a todas las variables 
// la salida es: 
// 44 55
// 10 55



function getNumero(numero){
    return "El numero es: "+numero;
}
console.log(getNumero(5))
// salida:
// El numero es: 5
// las funciones se realizan igual que con javaScript 

// lo bueno es que en typeScript se puede colocar 
// los datos que quiere recibir o botar
function getNumber(numero:number):string{
    return "El numero es: "+numero;
}
console.log(getNumber(5))
// salida:
// El numero es: 5



//La programacion orientada a objetos
class Camisa{
    public color:string;  
    //puede acceder a propiedad y metodo donde sea
    protected modelo:string;
    //atributos y metodos desde la clase y cualquier clase que se herede
    private marca:string;
    // son accesibles desde la clase
    public talla:string;
    public precio:number;

    constructor(color,modelo,marca,talla,precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio;
    }
    // un constructor es un metodo especial dentro de una clase
    // se usa para dar un valor inicial a las variables y es el 
    // primer metodo que se ejecuta al crearse la clase
    public setColor(color){
        this.color=color;
    }

}

var camiseta = new Camisa("Amarilla","blusa","nike","s",15);
camiseta.setColor("Rojo");



// para puder usar una clase en otra lo necesario es:
// colocar en la clase a exportar export al inicio
export class polera{
    public color:string;  
    public precio:number;

    constructor(color,precio){
        this.color=color;
        this.precio=precio;
    }
}
// colocar en la otra clase el import
class main{
    public camisa:Camisa;

    constructor(camisa){
        this.camisa=camisa;
    }
    getCamisa(){
        return this.camisa
    }
}



// la herencia es un mecanismo muy basico en el cual la clase 
// hija hereda las caracteristicas que tiene una clase padre
 class perro{
    public color:string;  
    public raza:string;

    constructor(color:string,raza:string){
        this.color=color;
        this.raza=raza;
    }
}
// iniciamos la clase hija
class chihuahua extends perro{
    public tamaño:number;
    setTamaño(tamaño:number){
        this.tamaño=tamaño;
    }
    getTamaño():number{
        return this.tamaño;
    }
}
var perrito=new chihuahua("cafe","chihuahua");
perrito.setTamaño(0.3);
console.log(perrito);



// un decorador es un patron de diseño que nos permite mediante unos metadatos 
// copiar una clase o mejorarlo
function estampar(logo: string){
    return function(target: Function) {
        target.prototype.estampacion = function():void{
            console.log("camiseta con logo de: "+logo);
        }
    }
}