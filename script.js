/* ============================================
   INBOX INFOTECH - LANDING PAGE JAVASCRIPT
   Handles all interactivity, animations, and UX
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== MOBILE NAV ====================
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    window.closeMobileNav = function() {
        if (hamburger && mobileNav) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    };

    // ==================== HEADER SCROLL ====================
    const header = document.getElementById('header');
    let lastScrollY = 0;

    function handleHeaderScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // ==================== ACTIVE NAV LINK ====================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header__nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // ==================== BACK TO TOP ====================
    const backToTop = document.getElementById('backToTop');

    function handleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleBackToTop, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==================== TECH STACK TABS ====================
    const techTabs = document.querySelectorAll('.tech-stack__tab');
    const techPanels = document.querySelectorAll('.tech-stack__panel');

    techTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            techTabs.forEach(t => t.classList.remove('tech-stack__tab--active'));
            tab.classList.add('tech-stack__tab--active');

            techPanels.forEach(panel => {
                panel.classList.remove('tech-stack__panel--active');
                if (panel.getAttribute('data-panel') === target) {
                    panel.classList.add('tech-stack__panel--active');
                }
            });
        });
    });

    // ==================== TESTIMONIAL DOTS ====================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonials__dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        // On mobile, highlight the active card
        testimonialCards.forEach((card, i) => {
            card.style.opacity = window.innerWidth >= 768 ? '1' : (i === index ? '1' : '0.5');
            card.style.transform = window.innerWidth >= 768 ? '' : (i === index ? 'scale(1)' : 'scale(0.95)');
        });

        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('testimonials__dot--active', i === index);
        });

        currentTestimonial = index;
    }

    testimonialDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
            resetTestimonialAutoplay();
        });
    });

    function autoplayTestimonials() {
        testimonialInterval = setInterval(() => {
            const next = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(next);
        }, 5000);
    }

    function resetTestimonialAutoplay() {
        clearInterval(testimonialInterval);
        autoplayTestimonials();
    }

    if (testimonialCards.length > 0) {
        autoplayTestimonials();
    }

    // ==================== SCROLL ANIMATIONS ====================
    const animateElements = document.querySelectorAll(
        '.service-card, .industry-card, .hiring-card, .process-step, ' +
        '.portfolio-card, .testimonial-card, .tech-item, .recognition__item, ' +
        '.stat-card, .team-preview__card'
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on sibling index
                const parent = entry.target.parentElement;
                const siblings = Array.from(parent.children);
                const siblingIndex = siblings.indexOf(entry.target);

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, siblingIndex * 80);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Section headers animation
    const sectionHeaders = document.querySelectorAll('.section-header');
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                headerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sectionHeaders.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        headerObserver.observe(el);
    });

    // ==================== ANIMATED COUNTERS ====================
    const statNumbers = document.querySelectorAll('.stat-card__number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const match = text.match(/(\d+)/);
            if (!match) return;

            const target = parseInt(match[1]);
            const suffix = text.replace(match[1], '');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 16);
        });

        countersAnimated = true;
    }

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                counterObserver.unobserve(statsSection);
            }
        }, { threshold: 0.3 });

        counterObserver.observe(statsSection);
    }

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPos = target.offsetTop - headerHeight - 10;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== NEWSLETTER FORM ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = contactForm.querySelector('.newsletter__input').value;
            if (email) {
                // Show success feedback
                const btn = contactForm.querySelector('.newsletter__btn');
                const originalText = btn.textContent;
                btn.textContent = '✓ Sent!';
                btn.style.background = 'linear-gradient(135deg, #16a34a, #22c55e)';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    contactForm.reset();
                }, 2500);
            }
        });
    }

    // ==================== PARALLAX SUBTLE ====================
    const heroVisual = document.querySelector('.hero__visual');
    if (heroVisual && window.innerWidth >= 1024) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;

            const floatingCards = document.querySelectorAll('.hero__floating-card');
            floatingCards.forEach((card, i) => {
                const factor = (i + 1) * 0.5;
                card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }

});
