"use strict";

// TODO: Implementar la lógica del taller 5.
let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);

function calcular(event){
    event.preventDefault();

    let primero = document.getElementById("primero").value;
    let segundo = document.getElementById("segundo").value;
    let operacion = document.getElementById("operacion").value;

    resultado.classList.remove("exito");

    if(primero === "" || segundo === ""){
        resultado.innerText = "Escribe los dos números.";
        return;
    }
    else if(operacion === ""){
        resultado.innerText = "Selecciona una operación.";
        return;
    }

    let num1 = parseFloat(primero);
    let num2 = parseFloat(segundo);
    let total;

    switch(operacion){
        case "suma":
            total = num1 + num2;
            break;

        case "resta":
            total = num1 - num2;
            break;

        case "multiplicacion":
            total = num1 * num2;
            break;

        case "division":
            if(num2 === 0){
                resultado.innerText = "No es posible dividir entre cero.";
                return;
            }

            total = num1 / num2;
            break;
    }

    resultado.innerText = `Resultado: ${total}`;
    resultado.classList.add("exito");
}