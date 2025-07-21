const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByTagName('img');
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // Auto-slide every 3 seconds (3000ms)
    setInterval(nextSlide, 3000);

    // Initialize
    showSlide(currentSlide);