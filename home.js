document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.getElementById("back-to-top-btn");

    if (backToTopButton) {
        // Mostra o botão quando o usuário rolar 300px para baixo.
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        // Adiciona a funcionalidade de rolagem suave para o topo ao clicar.
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // --- LÓGICA PARA O BOTÃO DE TROCA DE TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função que verifica no armazenamento local (localStorage) se um tema foi salvo
    // e o aplica ao carregar a página.
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'vibrante') {
            body.classList.add('theme-vibrante');
            themeToggle.checked = true; // Sincroniza o estado do switch
        } else {
            body.classList.remove('theme-vibrante');
            themeToggle.checked = false;
        }
    };

    if (themeToggle) {
        // "Ouve" por mudanças no switch de tema (cliques).
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('theme-vibrante');
                localStorage.setItem('theme', 'vibrante'); // Salva a escolha no navegador.
            } else {
                body.classList.remove('theme-vibrante');
                localStorage.removeItem('theme'); // Remove a escolha para voltar ao padrão.
            }
        });
    }

    // Aplica o tema salvo assim que a página carrega.
    applySavedTheme();


    // --- EFEITO DE HOVER PARA OS LOGOS DOS PARCEIROS ---
    const parceiroLogos = document.querySelectorAll('.parceiro-logo-box img');
    parceiroLogos.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transition = 'transform 0.3s';
            img.style.transform = 'translateY(-10px)'; // Move a imagem para cima.
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translateY(0)'; // Retorna à posição original.
        });
    });


    // --- POP-UP PARA EXIBIR IMAGEM EM DESTAQUE AO CLICAR ---
    document.querySelectorAll('.imagem-destaque').forEach(img => {
        img.addEventListener('click', () => {
            // Cria um overlay (fundo escuro) dinamicamente.
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';

            // Cria o elemento da imagem ampliada.
            const popupImg = document.createElement('img');
            popupImg.src = img.src;
            popupImg.alt = img.alt;
            popupImg.style.maxWidth = '90vw';
            popupImg.style.maxHeight = '90vh';
            popupImg.style.boxShadow = '0 0 20px #000';

            // Adiciona a imagem ao overlay.
            overlay.appendChild(popupImg);

            // Permite fechar o pop-up clicando fora da imagem.
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });

            // Adiciona o pop-up completo ao corpo da página.
            document.body.appendChild(overlay);
        });
    });

});