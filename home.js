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