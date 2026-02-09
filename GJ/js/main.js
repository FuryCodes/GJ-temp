// Main JavaScript - Ganga Jewellers

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // Mobile Navigation Toggle
    // ==========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // ==========================================
    // Hero Slider
    // ==========================================
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.hero-prev');
        const nextBtn = document.querySelector('.hero-next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(function(s) { s.classList.remove('active'); });
            dots.forEach(function(d) { d.classList.remove('active'); });

            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoSlide() {
            clearInterval(slideInterval);
            startAutoSlide();
        }

        if (prevBtn) prevBtn.addEventListener('click', function() { prevSlide(); resetAutoSlide(); });
        if (nextBtn) nextBtn.addEventListener('click', function() { nextSlide(); resetAutoSlide(); });

        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                showSlide(index);
                resetAutoSlide();
            });
        });

        startAutoSlide();
    }

    // ==========================================
    // Header Shadow on Scroll
    // ==========================================
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // Back to Top Button
    // ==========================================
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // Scroll Reveal Animation
    // ==========================================
    var revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function(el) {
            revealObserver.observe(el);
        });
    }

    // ==========================================
    // Smooth scroll for anchor links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ==========================================
    // Load Saved Content from localStorage
    // ==========================================
    loadSavedContent();
});

// Content persistence functions
function loadSavedContent() {
    var savedData = localStorage.getItem('gangajewellers_content');
    if (savedData) {
        try {
            var content = JSON.parse(savedData);
            Object.keys(content).forEach(function(key) {
                var elements = document.querySelectorAll('[data-content="' + key + '"]');
                elements.forEach(function(el) {
                    if (el.tagName === 'IMG') {
                        el.src = content[key];
                    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.value = content[key];
                    } else {
                        el.textContent = content[key];
                    }
                });
            });
        } catch (e) {
            // Silently fail if data is corrupted
        }
    }
}

function saveContent(key, value) {
    var savedData = {};
    var existing = localStorage.getItem('gangajewellers_content');
    if (existing) {
        try {
            savedData = JSON.parse(existing);
        } catch (e) {
            savedData = {};
        }
    }
    savedData[key] = value;
    localStorage.setItem('gangajewellers_content', JSON.stringify(savedData));
}
