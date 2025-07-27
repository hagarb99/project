
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation link highlighting
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        function updateActiveLink() {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[index].classList.add('active');
                }
            });
        }

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        
        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Skill bar animation
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                const rect = bar.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (rect.top < windowHeight && rect.bottom > 0) {
                    bar.style.width = width;
                }
            });
        }

        // Fade in animation for elements
        function fadeInElements() {
            const elements = document.querySelectorAll('.project-card, .skill-category, .contact-form');
            
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                    element.classList.add('fade-in');
                }
            });
        }

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simulate form submission
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            this.reset();
        });

        // Event listeners
        window.addEventListener('scroll', () => {
            updateActiveLink();
            updateNavbar();
            animateSkillBars();
            fadeInElements();
        });

        // Initial calls
        updateActiveLink();
        updateNavbar();
        animateSkillBars();
        fadeInElements();

        // Particle effect for hero section (optional enhancement)
        function createParticles() {
            const aboutSection = document.getElementById('about');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = 'rgba(255, 255, 255, 0.3)';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
                
                aboutSection.appendChild(particle);
            }
        }

        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);

        // Initialize particles
        createParticles();
    