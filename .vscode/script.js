document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('banner-title').textContent = data.title;
            document.getElementById('banner-description').textContent = data.description;
        })
        .catch(error => console.error('Erro ao carregar os dados do banner:', error));
});
