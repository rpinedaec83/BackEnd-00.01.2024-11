console.log('Hello, world!');
// let nombre = 'Miguel';
// nombre=33;
let nombre: string ;
nombre = 'Miguel';
let edad: number;
edad = 33;
let casado: boolean;
casado = false;
let fecha: Date;
fecha = new Date();
let sueldo: number;
sueldo = 12.34;
let medicina: any;
medicina = 'IBUPROFENO';
medicina = 12.34;
medicina = true;
let nombres: string[] = ['Miguel', 'Daniel', 'Santiago'];
nombres.push('Miguel');
console.log('nombres', nombres);

let apellido:[string, string] = ['Eguez', "Pineda"];

let hobbies:readonly string[] = ['Correr', 'Dormir', 'Comer'];

// define our tuple
let ourTuple2: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple2 = [5,false, 'Coding God was mistaken'];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };


  function multiply(a: number, b: number): number {
    return a * b;
  }

  let result:number = multiply(3, 3);

  console.log(result);