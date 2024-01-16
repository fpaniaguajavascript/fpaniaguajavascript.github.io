document.querySelector("#boton-calcular").addEventListener("click", function(){
    const altura = document.getElementById("altura").value;
    const peso = document.querySelector("#peso").value;  
    const imc = calcularIMC(peso, altura);
    document.querySelector("#resultado").innerHTML=imc.toFixed(1);
});

function calcularIMC(peso, altura){
    const imc = peso / (altura**2);
    return imc; 
}
