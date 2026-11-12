
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

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver(function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px"
    });

    elementos.forEach(function(elemento) {
        elemento.classList.add("revelar");
        observador.observe(elemento);
    });

} else {

    elementos.forEach(function(elemento) {
        elemento.classList.add("visivel");
    });

}
