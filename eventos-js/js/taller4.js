"use strict";

// TODO: Implementar la lógica del taller 4.
let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);

function validarRegistro(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("contrasena").value;
    let confirmar = document.getElementById("confirmarContrasena").value;

    resultado.classList.remove("exito");

    if(nombre.trim() === ""){
        resultado.innerText = "Escribe tu nombre.";
        return;
    }
    else if(edad === ""){
        resultado.innerText = "Escribe tu edad.";
        return;
    }

    let numeroEdad = Number(edad);

    if(isNaN(numeroEdad) || numeroEdad < 18 || numeroEdad > 100 || numeroEdad % 1 !== 0){
        resultado.innerText = "La edad debe ser un número entero entre 18 y 100.";
        return;
    }
    else if(correo === "" || !correo.includes("@") || !correo.includes(".")){
        resultado.innerText = "Escribe un correo válido.";
        return;
    }
    else if(clave === ""){
        resultado.innerText = "Escribe tu contraseña.";
        return;
    }
    else if(confirmar === ""){
        resultado.innerText = "Confirma tu contraseña.";
        return;
    }
    else if(clave !== confirmar){
        resultado.innerText = "Las contraseñas no coinciden.";
        return;
    }
    else{
        resultado.innerText = `Registro exitoso. Bienvenido(a), ${nombre}.`;
        resultado.classList.add("exito");
    }
}