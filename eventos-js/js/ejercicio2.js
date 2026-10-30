"use strict";

// TODO: Implementar la lógica del ejercicio 2.
let botonRestar = document.getElementById("botonRestar");
botonRestar.addEventListener("click",resta);

function resta(event) {

    event.preventDefault();

    let valor1 = parseFloat(document.getElementById("num1").value);
    let valor2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("escribe los dos numeros");
        return;

    }else {
        let resultado = valor1 - valor2;
        alert(`Resta: ${resultado}`);
    }
}