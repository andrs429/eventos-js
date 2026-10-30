let formulario = document.getElementById("formTaller3");
formulario.addEventListener("submit", taller3);

function taller3(event){
    event.preventDefault();
    let valores = [
        document.getElementById("num1").value,
        document.getElementById("num2").value,
        document.getElementById("num3").value
    ];

    if(valores.some(valor => valor === "")){
        document.getElementById("resultado").innerText="Ingrese los tres números."
        return;
    }

    let [num1, num2, num3] = valores.map(Number);

    if([num1, num2, num3].some(Number.isNaN)){
        document.getElementById("resultado").innerText="Ingrese números válidos."
        return;
    }
    else if(num1 > num2 && num1 > num3){
        document.getElementById("resultado").innerText="El numero en la poscición 1 es mayor."
        return;
    }
    else if(num2 > num1 && num2 > num3){
        document.getElementById("resultado").innerText="El numero en la poscición 2 es mayor"
        return;
    }
    else if (num3 > num1 && num3 > num2){
        document.getElementById("resultado").innerText="El numero en la poscición 3 es mayor"
        return;
    }
    else{
        document.getElementById("resultado").innerText="Hay un empate entre los numeros."
    }
}