"use strict";

// TODO: Implementar la lógica del taller 2.
let formulario = document.getElementById("formTaller2");

formulario.addEventListener("submit", taller2);
function taller2(){
    event.preventDefault();
    let nota = parseFloat(document.getElementById("nota").value);

    if(isNaN(nota)){
        document.getElementById("resultado").innerText=`Ingrese la nota por favor.`
        return;
    }
    
    if(nota<0 || nota>5){
        document.getElementById("resultado").innerText="Nota inválida."
        return
    }
    let resultado = "Aprobado"
    let desempeño;
    if(nota>4.5){
        desempeño="exelente";
    }
    else if(nota>4){
        desempeño = "bueno"


    }
    else if(nota>3){
        desempeño = "aceptable"
    }
    else{
        desempeño = "insuficiente"
        resultado = "No aprobado"
    }
    document.getElementById("resultado").innerText = `${nota} - ${desempeño}: ${resultado}`

}