
/* =================================
   MODO CLARO E ESCURO
================================= */

const tema = document.getElementById("tema");

tema.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        tema.textContent = "☀️";
        tema.setAttribute("aria-label", "Ativar tema claro");
    } else {
        tema.textContent = "🌙";
        tema.setAttribute("aria-label", "Ativar tema escuro");
    }

});


/* =================================
   ANO AUTOMÁTICO NO RODAPÉ
================================= */

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();
