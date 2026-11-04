
const interesses = [
    "💻 Programação",
    "🎮 Jogos",
    "🎵 Música",
    "📺 Animes",
    "🚀 Tecnologia"
];

const lista = document.getElementById("lista-interesses");

interesses.forEach(function(item) {
    const botao = document.createElement("button");

    botao.textContent = item;
    botao.classList.add("interesse");

    botao.addEventListener("click", function() {
        alert("Você também gosta de " + item + "?");
    });

    lista.appendChild(botao);
});

// Modo escuro

const tema = document.getElementById("tema");

tema.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        tema.textContent = "☀️";
    } else {
        tema.textContent = "🌙";
    }
});

// Ano automático

document.getElementById("ano").textContent = new Date().getFullYear();
