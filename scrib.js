document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (next && prev) {
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);
        
        // Auto-play slider
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Initial slide display
    if(slides.length > 0) {
        showSlide(currentSlide);
    }
});
// Side navigation functionality
    const openNav = document.getElementById('hamburger-menu');
    const closeNav = document.getElementById('close-btn');
    const sideNav = document.getElementById('side-nav');

    if (openNav && closeNav && sideNav) {
        openNav.addEventListener('click', () => {
            sideNav.style.width = '250px';
        });

        closeNav.addEventListener('click', () => {
            sideNav.style.width = '0';
        });
    }

document.addEventListener("DOMContentLoaded", function () {
   
    const mapForm = document.getElementById("mapSearchForm");
    const mapInput = document.getElementById("mapQuery");
    const mapIframe = document.getElementById("mapIframe");

    if (mapForm && mapInput && mapIframe) {
        mapForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const query = mapInput.value.trim();
            if (query) {
                const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
                mapIframe.src = embedUrl;
            }
        });
    }
});


