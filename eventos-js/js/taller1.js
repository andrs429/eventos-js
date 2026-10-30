"use strict";

// TODO: Implementar la lógica del taller 1.
let formulario = document.getElementById("formTaller1")
let resultado = document.getElementById("resultado")

formulario.addEventListener("submit", par_impar);

function par_impar(){
    event.preventDefault()
    let numero = parseFloat(document.getElementById("numero").value);
    if (isNaN(numero)|| numero === 0){
        resultado.innerText="Escribe un numero";
        return;
    }
    else if (numero % 1 !==0){
        resultado.innerText=`El numero debe ser entero`
    }
    else if (numero % 2==0){
        resultado.innerText=`El numero ${numero} es par`
    }
    else(
        resultado.innerText=`El numero ${numero} es impar`
    )
}