const trocarTemaEImagem = document.getElementById("btn-change-theme")
const nightModeBackground = document.querySelector("body")
const trocarImagemSol = document.querySelector(".image-sun")

trocarTemaEImagem.addEventListener("click", () => {
    const modoNoiteAtivo = nightModeBackground.classList.contains("night-mode")

    if (modoNoiteAtivo) {
        nightModeBackground.classList.remove("night-mode")

        trocarImagemSol.setAttribute("src", "./src/image/sun.png")
    } else {
        nightModeBackground.classList.add("night-mode")

        trocarImagemSol.setAttribute("src", "./src/image/moon.png")
    }
})



const listagemPokemon = document.querySelectorAll(".pokemon")

listagemPokemon.forEach((pokemon) => {
    pokemon.addEventListener("mouseenter", () => {
        const pokemonSelecionado = document.querySelector(".selected-player-1")

        pokemonSelecionado.classList.remove("selected-player-1")
        pokemon.classList.add("selected-player-1")
        
        const idSelecionado = pokemon.attributes.id.value
        if(idSelecionado === 'mewtwo') return;

        const imagePokemonGrande = document.getElementById("image-player-1")
        imagePokemonGrande.src = `./src/image/${idSelecionado}.png`
        
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = pokemon.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})