
var btnEncrip = document.querySelector(".boton-encriptar");
var btnDesencrp = document.querySelector(".boton-desencriptar")
botonInicio(btnEncrip);
botonInicio(btnDesencrp);


function botonInicio (boton){
    boton.addEventListener("click", function () {
        var input = document.querySelector(".text-encrip");
        var borrar = document.querySelector(".spam");
        var mostrar = document.querySelector("#idmostrar")
        if (borrar) {
            borrar.classList.add("nodeOut");
            mostrar.classList.remove("nodeOut");
            if(boton == btnEncrip){
                crearResultEn(input.value)
            }else{
                crearResultDes(input.value)
            }
            
        } else {
            crearResultDes(input.value)
            crearResultEn(input.value)
            
        }
        
    });

}
var btnCopy = document.querySelector(".btn-copy").addEventListener("click",copiar)

function copiar() {
    var enlace = document.getElementById("prcopiar");
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", enlace.innerHTML);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
    enlace.innerHTML = " ",
    alert("ya se ha copiado");
    location.reload()
}


