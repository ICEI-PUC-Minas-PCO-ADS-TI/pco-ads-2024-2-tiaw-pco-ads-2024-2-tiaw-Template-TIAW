
let divBanner = document.getElementById("banner");
let divTxt = document.getElementById("txt");

fetch("teste.json").then((response) => {
    response.json().then((dados) => {
        let index = 0;
        console.log(dados.banners.length);
        
        const trocarImg = () => {
            index = (index + 1) % dados.banners.length;
            divTxt.innerHTML = `<h2 id="descricao">${dados.banners[index].descricao}</h2>`;
            divBanner.innerHTML = `
                <img id="imgBanner" src="${dados.banners[index].imagem}" alt="600px" height="600px">
                <div id="txt">
                    <h2 id="descricao">${dados.banners[index].descricao}</h2>
                </div>
            `;
        };
        
        setInterval(trocarImg, 3000);
    });
});