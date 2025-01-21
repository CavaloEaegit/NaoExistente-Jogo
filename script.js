document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Movimento do fundo (mais lento)
    const fundo = document.querySelector(".fundo");
    if (fundo) {
        const offset = -scrollY * 0.3; // Ajuste o fator de parallax (0.3 para movimento mais perceptível)
        fundo.style.transform = `translateY(${offset}px)`;
    }

    // Movimento da imagem grande (mais rápido)
    const imagemGrande = document.querySelector(".imagem-grande img");
    if (imagemGrande) {
        const offset = scrollY * 0.4; // Ajuste o fator (0.6 para movimento mais rápido)
        imagemGrande.style.transform = `translateY(${offset}px)`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Texto no canto inferior direito
    const versionText = document.createElement('div');
    versionText.id = 'site-version';
    versionText.textContent = 'Versão V0.0.4 Alpha(do site)'; // Versão atual
    document.body.appendChild(versionText);

    // Notificação de atualização
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.style.display = 'none'; // Começa invisível
    notification.textContent = 'Atualiza a página/feche e reabra o app, caso a versão continuar a mesma, aguarde alguns minutos e atualiza denovo...';
    document.body.appendChild(notification);

    // URL do arquivo raw do GitHub (altere conforme necessário)
    const githubRawUrl = 'https://raw.githubusercontent.com/CavaloEaegit/NaoExistente-Jogo/refs/heads/main/Vsite.txt';

    // Função para verificar a versão do GitHub
    async function checkVersion() {
        try {
            const response = await fetch(githubRawUrl);
            const githubVersion = await response.text();

            // Verifica se a versão do GitHub é diferente da versão do site
            if (githubVersion.trim() !== '0.0.4') {
                notification.style.display = 'block'; // Mostra a notificação
            } else {
                notification.style.display = 'none'; // Oculta a notificação se estiver atualizado
            }
        } catch (error) {
            console.error('Erro ao verificar versão:', error);
        }
    }

    // Verificar versão a cada 1 segundo
    setInterval(checkVersion, 1000);
});