let count = 1;
document.getElementById("radio1").checked = true;
let slide1 = document.getElementById("slide1")
let slide2 = document.getElementById("slide2")
let slide3 = document.getElementById("slide3")
             

setInterval( function(){
   nextImage();
}, 5000)


function nextImage(){
    count ++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

fetch("imagens.json").then((resposta) => {
    resposta.json().then((dados) => {

        slide1.innerHTML = `<img src="${dados[0].imagem}" alt="imagem1">`
        slide2.innerHTML = `<img src="${dados[1].imagem}" alt="imagem2">`
        slide3.innerHTML = `<img src="${dados[2].imagem}" alt="imagem3">`


    })
})