document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Movimento do fundo (parallax mais lento)
    const fundo = document.querySelector(".fundo");
    if (fundo) {
        const offset = -scrollY * 0.3; // Ajuste o fator de parallax (0.3 para movimento mais perceptível)
        fundo.style.transform = `translateY(${offset}px)`;
    }

    // Movimento da imagem grande (parallax mais rápido)
    const imagemGrande = document.querySelector(".imagem-grande img");
    if (imagemGrande) {
        const offset = scrollY * 0.4; // Ajuste o fator de parallax (0.6 para movimento mais rápido)
        imagemGrande.style.transform = `translateY(${offset}px)`;
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Texto no canto inferior direito
    const versionText = document.createElement('div');
    versionText.id = 'site-version';
    versionText.textContent = 'Versão V0.0.1 Alpha';  // Versão atual
    document.body.appendChild(versionText);

    // Notificação de atualização
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.textContent = 'Atualiza a página/feche e reabra o app';
    document.body.appendChild(notification);

    // URL do arquivo raw do GitHub (altere conforme necessário)
    const githubRawUrl = '';

    // Função para verificar a versão do GitHub
    async function checkVersion() {
        try {
            const response = await fetch(githubRawUrl);
            const githubVersion = await response.text();

            // Versão que vem do arquivo raw no GitHub
            if (githubVersion.trim() !== '0.0.1') {  // Comparando com a versão do site
                // Se as versões não coincidirem, mostra a notificação
                notification.style.display = 'block';
            }
        } catch (error) {
            console.error('Erro ao verificar versão:', error);
        }
    }

    // Verificar versão ao carregar o site
    checkVersion();
});
