// String, boolean, number ....
let x: number = 20;

x = 15;

console.log(x);

// inferencia e annotations
let y =  12;
// y = "teste"
let z: number = 12;

// tipos basicos
let firstName: string = "Tulio"
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "Flavio"

console.log(firstName);

// object
const myNumber: number [] = [1, 2, 3, 4];

console.log(myNumber);
console.log(myNumber.length);
// console.log(myNumber.toUpperCase()); não permite 
console.log(firstName.toUpperCase());
myNumber.push(5);
console.log(myNumber);

// tuplas -> tuple
let myTupla: [number, string, string[]] 

myTupla = [5, "teste", ["a","b"]]

// myTupla = [true, false, true]

// object liberals -> {prop: value}
const user: {name: string, age: number} = {
     name: "Tulio",
     age: 18
}

console.log(user);

console.log(user.name);

// user.job = "Programador"

// any
let a:any = 0;

a = "teste";
a = true;
a = []

// union type
let id: string | number = "10"

id = 200

// id = true;
// id = []

// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}

console.log(camisa)

// literal type
let teste: "algumvalor" | null;

// teste = "outrovalor"
teste = "algumvalor";
teste = null;

//funcoes
function sum(a: number,b: number){
   return a + b ;
}

console.log(sum(12,12));
//console.log(sum("12", true));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Tulio"));


function logger(msg: string): void{
    console.log(msg);
}

logger("teste !");

function greeting(name: string, greet?: string): void{
     if(greet){
        console.log(`Olá ${greet} ${name}`);
     } else {
        console.log(`Olá ${name}`);
     }
}

greeting("Tulio");
greeting("Flavio Tulio", "Sir");

// interface
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumber(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumber({n1:1,n2:2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 30
}

console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem tipos
function doSomething(info: number | boolean) {
    if(typeof info == "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
function showArrysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrysItems(a1);
showArrysItems(a2);

// classes
class User{
    private name
    private role
    private isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: Boolean) {
        if (canShow) {
            console.log(`idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}

const zeca = new User("Zeca", "Admin", true);

console.log(zeca);

zeca.showUserName();

zeca.showUserRole(false);

// interfaces em classes
interface IVehicle {
    brand: string;
    showBrand(): void
}

class Car implements IVehicle {

    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`À marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

// herança
class SuperCar extends Car {
   engine

   constructor(brand: string, wheels: number, engine: number) {
     super(brand, wheels);
     this.engine = engine;
   }

}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

// decorators
function BaseParemteres(){
   return function < T extends {new (...args:any[]):{}} >(constructor: T){
       return class extends constructor {
           id = Math.random()
           createdAt = new Date();       
        };
   };
  
}

@BaseParemteres()
class Person{
    name

    constructor(name: string){
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log(sam);
