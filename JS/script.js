document.addEventListener("DOMContentLoaded", () => {
    
    // Evento 1: 'submit' no formulário de apoio
    const formApoio = document.querySelector("#form-apoio");
    if (formApoio) {
        formApoio.addEventListener("submit", enviarApoio);
    }

    // Evento 2: 'input' na caixa de mensagem de apoio (contador em tempo real)
    const campoMensagem = document.querySelector("#mensagem");
    if (campoMensagem) {
        campoMensagem.addEventListener("input", contarCaracteres);
    }

    // Evento 3: 'click' na foto dos jogadores
    const fotosJogadores = document.querySelectorAll(".foto");
    fotosJogadores.forEach(foto => {
        foto.addEventListener("click", destacarJogador);
    });

});

// Função 1: Processa o envio do formulário sem recarregar a página
function enviarApoio(event) {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    alert(`Obrigado pelo apoio, ${nome}! Sua mensagem foi enviada para a Seleção Brasileira.`);
    event.target.reset();
    
    const contador = document.querySelector("#contador-caracteres");
    if (contador) contador.innerText = "";
}

// Função 2: Exibe em tempo real a contagem de caracteres digitados
function contarCaracteres(event) {
    const quantidade = event.target.value.length;
    let contador = document.querySelector("#contador-caracteres");
    
    if (!contador) {
        contador = document.createElement("p");
        contador.id = "contador-caracteres";
        contador.style.fontSize = "12px";
        contador.style.color = "#005c2b";
        contador.style.fontWeight = "bold";
        event.target.parentNode.appendChild(contador);
    }
    
    contador.innerText = `Caracteres digitados: ${quantidade}`;
}

// Função 3: Exibe um destaque visual e aviso ao clicar na foto de um jogador
function destacarJogador(event) {
    const card = event.target.closest(".jogador");
    const nomeJogador = card ? card.querySelector(".nome").childNodes[0].textContent.trim() : "Jogador";
    
    // Efeito de zoom rápido
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform 0.2s";
    
    setTimeout(() => {
        event.target.style.transform = "scale(1)";
        alert(`Você selecionou a foto de ${nomeJogador}!`);
    }, 200);
}