"use strict";

let formulario = document.getElementById("formularioDividir");
formulario.addEventListener("submit", dividir);

function dividir(event) {
    event.preventDefault();

    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);

    if (numero2 === 0) {
        alert("No se puede dividir entre cero.");
        return;
    }

    alert(`División: ${numero1 / numero2}`);
}