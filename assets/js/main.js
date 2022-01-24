/*var texto = document.querySelector("#texto").value;
var resultado = document.querySelector("#resultado").value;
textarea.focus();*/

function encriptar(){
    var texto = document.querySelector("#texto").value;
    var resultado = document.querySelector("#resultado");
    var myArray = texto.split("");
    for(var i=0; i<myArray.length; i++){
        switch (myArray[i]){
            case 'e':
                myArray[i] = 'enter';
                break;
            case 'i':
                myArray[i] = 'imes';
                break;
            case 'a':
                myArray[i] = 'ai';
                break;
            case 'o':
                myArray[i] = 'ober';
                break;
            case 'u':
                myArray[i] = 'ufat';
                break;
            default:
                break;
        }
    }
    var texto_resultado = myArray.join("");
    resultado.value = texto_resultado;
    /*var texto = myArray.toString();
    myArray = input.join("");
    myArray.replace(/,/g," ")*/
};

function desencriptar(){
    var texto = document.querySelector("#texto").value;
    var resultado = document.querySelector("#resultado");
    var textoA = texto.split("ai").join("a");
    var textoE = textoA.split("enter").join("e");
    var textoI = textoE.split("imes").join("i");
    var textoO = textoI.split("ober").join("o");
    var textoU = textoO.split("ufat").join("u");
    resultado.value = textoU;
};

function copiar(){

};

var btnEncriptar = document.querySelector(".btn.encriptar");
btnEncriptar.onclick = encriptar;

var btnDesencriptar = document.querySelector(".btn.desencriptar");
btnDesencriptar.onclick = desencriptar;
