document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    const header = document.querySelector('header');

    // 1. Funcionalidade do Menu Hambúrguer
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Adiciona/remove a classe 'nav-open' no body
            // Isso controla a animação do botão e a exibição do menu via CSS
            body.classList.toggle('nav-open');
        });
    }

    // 2. Funcionalidade para o Header ficar opaco ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Se rolar mais de 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Fechar o menu mobile ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (body.classList.contains('nav-open')) {
                body.classList.remove('nav-open');
            }
        });
    });
});