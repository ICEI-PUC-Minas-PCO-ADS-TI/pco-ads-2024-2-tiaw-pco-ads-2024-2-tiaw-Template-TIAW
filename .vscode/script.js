let divBanner = document.getElementById("banner")
let divTxt = document.getElementById("txt")

fetch("settings.json").then((response) => {
    response.json().then((dados) => {
    let index = 0;
    console.log(dados.banners.length)
    
    const trocarImg= () => {
 
        index = (index + 1) % dados.banners.length;
        divTxt.innerHTML = `<p id="txtBanner"> "${dados.banners[index].descricao}" </p>`
        divBanner.innerHTML = `<img id="imgBanner" src="${dados.banners[index].imagem}" alt="600px" height="600px">`
        
    }
        setInterval(trocarImg, 3000);
        })
    })