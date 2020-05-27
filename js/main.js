
const pi = 3.14;

printArea();

function printArea(){
    let radio = document.getElementById("valorRadio").value;

    let divResultArea = document.getElementById("divResultadoArea");
    let divResultPerimetro = document.getElementById("divResultadoPerimetro");

    //cálculo del área
    let area = pi * (radio ** 2);

     //cálculo del perímetro
     let perimetro = 2 * pi * radio;

    divResultArea.innerText ="Área: " + area ;
    divResultPerimetro.innerText = "Perímetro: "+  perimetro ;
}
