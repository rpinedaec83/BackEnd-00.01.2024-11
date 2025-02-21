console.log("Inicio");

function calculadora(num1, num2, mycallback) {
  setTimeout(() => {
    mycallback( num1 + num2);
  }, 5000);
}

function mycallback(result) {
  document.getElementById("demo1").innerText = result;
  document.getElementById("demo2").innerText = "Listo...";
}

calculadora(5, 5, mycallback);
document.getElementById("demo2").innerText = "Calculando...";

let miPromesa = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
        resolve("Promesa resuelta");
      }, 3000);
   // throw new Error("Error en la promesa");
  }
  catch (error) {
    reject(error);
  }
    
}
);
miPromesa.then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
}
);  


async function miPromesaAsync() {   
    let promesa3 = new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
        req.onload = () => {
            if (req.status == 200) {
                setTimeout(() => {resolve(req.response);}, 3000);
                
            } else {
                reject("Error en la promesa");
            }
        };
        req.send();
    
});
    document.getElementById("demo3").innerText = "Cargando...";
    let resultado = await promesa3;
    document.getElementById("demo3").innerText = resultado;
    return resultado;

};
 
miPromesaAsync();;


console.log("Fin");