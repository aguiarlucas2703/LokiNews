document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.getElementById("back-to-top-btn");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- NOVA LÓGICA PARA O BOTÃO DE TROCA DE TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'vibrante') {
            body.classList.add('theme-vibrante');
            themeToggle.checked = true;
        } else {
            body.classList.remove('theme-vibrante');
            themeToggle.checked = false;
        }
    };

    // Adiciona o "ouvinte" para o clique no botão de tema
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('theme-vibrante');
                localStorage.setItem('theme', 'vibrante'); // Salva a escolha
            } else {
                body.classList.remove('theme-vibrante');
                localStorage.removeItem('theme'); // Remove a escolha
            }
        });
    }
    applySavedTheme();

});

// Isso faz as imagens dos parceiros "subirem" um pouco quando o mouse passa por cima
const parceiroLogos = document.querySelectorAll('.parceiro-logo-box img');
parceiroLogos.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transition = 'transform 0.3s';
        img.style.transform = 'translateY(-10px)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'translateY(0)';
    });
});

// Pop-up para exibir imagem em destaque ao clicar
document.querySelectorAll('.imagem-destaque').forEach(img => {
    img.addEventListener('click', () => {
        // Cria o overlay
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

        // Cria a imagem ampliada
        const popupImg = document.createElement('img');
        popupImg.src = img.src;
        popupImg.alt = img.alt;
        popupImg.style.maxWidth = '90vw';
        popupImg.style.maxHeight = '90vh';
        popupImg.style.boxShadow = '0 0 20px #000';

        // Adiciona a imagem ao overlay
        overlay.appendChild(popupImg);

        // Fecha ao clicar fora da imagem
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });

        document.body.appendChild(overlay);
    });
});

// Animaçãozinha para imagem do gpt 

