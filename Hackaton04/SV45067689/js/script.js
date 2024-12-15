

// Primera parte

//1 

const suma = (num1, num2)=> num1 + num2;

suma(2,2);

// 2
const potencia = (base, exponente)=> base ** exponente

potencia (2,3);

// 3

const sumaDecubos = (...numeros)=> numeros.reduce((sum, num) => sum + num ** 3);

console.log(sumaDecubos(1,5,9));

// 4

const area = (base, altura) => (base* altura)/2
area(3,2);

// 5

const calculadora = (num1, num2, operador)=>{

    switch(operador){
        case "suma":
        case "SUMA":
        case "+":
            return num1 + num2;
    
        case "resta":
        case "RESTA":
        case "/":
            return num1 - num2;

        case "multiplicacion":
        case "MULTIPLICACION":
        case "*":
            return num1 * num2;

        case "division":
        case "DIVISION":
        case "/":
            return num1 / num2;
    }
}


// PREGUNTAS:

// ¿Cómo defines una función? 

/* Una función es un conjunto de instrucciones que puede ralizar una acción 
se inicializa una funcion con la palabra reservada function seguido del nombre de la funcion. Ejm
La función puede tener o no valores pero debemos recuperar el valor de toda la funcion con la palabra clave return;

function suma(n1,n2){
    return n1 + n2;
} 
*/



// ¿Hasta cuantos argumentos puedes declarar en una función?


/*Lacantidad de argumentos varia segun el lenguaje de programación, pero especificamente para javaScript
una función puede recibir hasta 255 argumentos o valores
*/


// parte 2


// 1 .- concantener strings

const concantener = (nombre,apellido,edad)=> `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

concantener('sebastioam','Yabiki', 33);

// 2 

const sumaDeCubos = (...numeros) => {
    const cubos = numeros.map(e => e ** 3)
    const suma = cubos.reduce((a, v) => {
      return a + v
    })
    return suma
  }
  
  const sumaDeCubos2 = (...numeros) => numeros.reduce((sum, num) => sum + num ** 3, 0)
  
  console.log(sumaDeCubos(1,5,9));

  
//3

  const getTypeOfJavaScrip = value => typeof value;
  getTypeOfJavaScrip('Hola');
  getTypeOfJavaScrip(2323);
  getTypeOfJavaScrip(true);
  getTypeOfJavaScrip({});
  getTypeOfJavaScrip({});


// 4

const areaT = (base, altura) => (base * altura) / 2
areaT(3,2);
 

// 5

const lista = [1, 'Hola',2, true, 'como', 'estas']
const filterSetting = (array) => array.filter(item =typeof item == 'string')
filterSetting(lista);


// 6

const getMaxMin = array => array[Math.min(...array),
Math.max(...array)]
getMaxMin([1,2,3,4,5])

// 7 

const numberPhone = [1,2,3,4,5,6,7,8,9,0]
const formatPhoneNumber = nums =>
    `(${nums.slice(0,3).join("")})
${nums.slice(3,6).join("")}-${nums.slice(6).join("")}`
formatPhoneNumber(numberPhone);

// 8 

function findLargestNums(array) {
 return array.map(funciton (arr) => Math.max(...arr));
}

findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])


// 9

const charIndex = (str,char) => str.includes(char)?
[str.indexOf(char), str.lastIndexOf(char)]: undefined;
charIndex("hello", "l");
charIndex("circumlocution", "c");


// 10 

const toArray = obj => Object.entries(obj);

console.log(toArray({ a: 1, b: 2 }));

// 11

const list = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]

  

// 12

const students = [
    {name : "steve"},
    {name : "Mike"},
    {name : "John"},
]
const getstudents =  lis => lista.map(item => item.name)
getstudents(students)


// 13 nosotros


// 14

const squaresSum = n => array.from({length: n},(_,i) 
=> (i + 1) ** 2).reduce((a,b) => a + b, 0)
squaresSum(3);

// 15


const multiplyByLength = array => array.map(elemento => 
    elemento * array.length)

 multiplyByLength([2,3,1,0])

// 16.

const countdown = n => Array.from({length: n + 1}, (_, i) => n- i)
countdown(5)

// 17

const diffMaxMin = arr => Math.max(...arr) - Math.min(...arr)

diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])

// 18
const repeat = (elemento, time) => Array(time).fill(elemento)
repeat(13, 5)

// 19

String.prototype.vreplace = function(vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};

"apples and bananas".vreplace("u")

// 21

const findNemo = oracion => {
  const words = oracion.split(" ")
  const index = words.indexOf("Nemo")
  return index !== -1 ? `!Encontre a nemo en ${index + 1}` : "No se encontro a nemo"
}

findNemo("I am finding otra palbra nemo cada Nemo y Nemo !")

// 22

const capitalize = str => str.split(" ").map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(" ");

capitalize("hello world")