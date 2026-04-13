document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(7, 9, 17, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(7, 9, 17, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.querySelector('.header__nav');
    
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            headerNav.style.display = headerNav.style.display === 'flex' ? 'none' : 'flex';
            headerNav.style.flexDirection = 'column';
            headerNav.style.position = 'absolute';
            headerNav.style.top = '70px';
            headerNav.style.left = '0';
            headerNav.style.width = '100%';
            headerNav.style.background = '#070911';
            headerNav.style.padding = '20px';
            headerNav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');

        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-content').style.maxHeight = null;
            });

            // If not active, open current
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth < 900 && headerNav.style.display === 'flex') {
                    headerNav.style.display = 'none';
                }
            }
        });
    });
});
