
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


/* =====================================
   EFEITO DE DIGITAÇÃO
===================================== */

const digitacao = document.getElementById("digitacao");

if (digitacao) {

    const frases = [
        "Desenvolvedor Web",
        "Criador de sites",
        "Futuro Full Stack"
    ];

    let indiceFrase = 0;
    let indiceLetra = 0;
    let apagando = false;

    function escrever() {

        const fraseAtual = frases[indiceFrase];

        if (apagando) {

            indiceLetra--;

        } else {

            indiceLetra++;

        }

        digitacao.textContent = fraseAtual.substring(0, indiceLetra);

        let velocidade = apagando ? 45 : 85;

        if (!apagando && indiceLetra === fraseAtual.length) {

            velocidade = 1600;
            apagando = true;

        }

        else if (apagando && indiceLetra === 0) {

            apagando = false;

            indiceFrase++;

            if (indiceFrase >= frases.length) {
                indiceFrase = 0;
            }

            velocidade = 350;

        }

        setTimeout(escrever, velocidade);

    }

    escrever();

}
