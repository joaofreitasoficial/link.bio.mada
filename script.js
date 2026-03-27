document.addEventListener('DOMContentLoaded', () => {
    // Adicionar animação suave ao carregar (opcional se não quiser depender apenas do CSS)
    const container = document.querySelector('.container');
    
    // Efeito de clique nos cards de link para feedback tátil visual
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transition = 'all 0.1s ease';
            card.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            // O CSS hover assumirá o controle após o mouseup se ainda estiver sobre o elemento
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });

    // Revelar elementos conforme o scroll (útil se a página crescer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    linkCards.forEach(card => {
        // Se quisermos usar o observer para cards que aparecem depois
        // observer.observe(card);
    });

    // Carousel Logic - MADA Portfolio
    const track = document.getElementById('portfolioTrack');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dotsContainer = document.getElementById('portfolioDots');
        
        let currentSlideIndex = 0;

        // Build Dots
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentSlideIndex = index;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            });
        }
        
        function updateCarousel() {
            // Desloca a trilha horizontalmente de acordo com a foto atual
            track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            
            // Controle dos Dots
            if (dotsContainer) {
                Array.from(dotsContainer.children).forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlideIndex);
                });
            }

            // Controle visual suave dos botões
            if (currentSlideIndex === 0) {
                prevButton.style.opacity = '0.3';
                prevButton.style.pointerEvents = 'none';
            } else {
                prevButton.style.opacity = '1';
                prevButton.style.pointerEvents = 'auto';
            }
            
            if (currentSlideIndex === slides.length - 1) {
                nextButton.style.opacity = '0.3';
                nextButton.style.pointerEvents = 'none';
            } else {
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            }
        }

        // Setup Inicial
        updateCarousel();

        // Eventos de Navegação pelas Setinhas
        nextButton.addEventListener('click', () => {
            if (currentSlideIndex < slides.length - 1) {
                currentSlideIndex++;
                updateCarousel();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                updateCarousel();
            }
        });
        
        // Touch Swipe Logic (Arrastar no Celular)
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});

        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});

        function handleSwipe() {
            if (touchEndX < touchStartX - 40) { // Arrastou pra esquerda (Proximo)
                if (currentSlideIndex < slides.length - 1) {
                    currentSlideIndex++;
                    updateCarousel();
                }
            }
            if (touchEndX > touchStartX + 40) { // Arrastou pra direita (Anterior)
                if (currentSlideIndex > 0) {
                    currentSlideIndex--;
                    updateCarousel();
                }
            }
        }
    }

    console.log('Premium Link in Bio MADA Cerimonial - Inicializado');
});
