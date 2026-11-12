
/* =====================================
   MODO CLARO E ESCURO
===================================== */

const tema = document.getElementById("tema");

if (tema) {
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
}


/* =====================================
   ANO AUTOMÁTICO
===================================== */

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


/* =====================================
   ANIMAÇÕES AO ROLAR A PÁGINA
===================================== */

const elementos = document.querySelectorAll(
    "section, .projeto-card, .lista-tecnologias > *"
);

elementos.forEach(function(elemento) {
    elemento.classList.add("revelar");
});

const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.12
});

elementos.forEach(function(elemento) {
    observador.observe(elemento);
});
