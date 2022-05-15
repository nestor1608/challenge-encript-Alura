

function encriptar(textoEncrip){
    
    var matrizMultiple =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    for(var i =0; i < matrizMultiple.length;i++){
        if(textoEncrip.includes(matrizMultiple[i][0])){
            textoEncrip = textoEncrip.replaceAll(matrizMultiple[i][0],matrizMultiple[i][1]).toLowerCase();
        }
    }
    return textoEncrip;
}

function desencriptar(textoDesencrip){
    var matrizMultiple =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    for(var i =0; i < matrizMultiple.length;i++){
        if(textoDesencrip.includes(matrizMultiple[i][0])){
            textoDesencrip = textoDesencrip.replaceAll(matrizMultiple[i][1],matrizMultiple[i][0]);
        }
    }
    return textoDesencrip
}
function crearResultEn (texto){
    var output = document.createElement("li");
    output.id ="prcopiar"
    var ul = document.querySelector(".text-encriptado");
    ul.appendChild(output);
    output.textContent = encriptar(texto);
}


function crearResultDes (texto){
    var output = document.createElement("li");
    output.id ="prcopiar"
    var ul = document.querySelector(".text-encriptado");
    ul.appendChild(output);
    output.textContent = desencriptar(texto);
    

}
