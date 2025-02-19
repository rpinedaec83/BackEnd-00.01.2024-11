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