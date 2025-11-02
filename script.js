// DOM Elements
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById('closeSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const mainContent = document.getElementById('mainContent');
const navButtons = document.querySelectorAll('.nav-btn');
const navLinks = document.querySelectorAll('.nav-links a, .nav-menu a'); // Tambah .nav-menu a
const contentSections = document.querySelectorAll('.content-section');

// Toggle Sidebar untuk mobile
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close sidebar when clicking on overlay
sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Navigation functionality (sama seperti sebelumnya)
function showSection(sectionId) {
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        
        const offset = 20;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Add event listeners to semua navigation
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        showSection(section);
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        
        // Close sidebar jika di mobile
        if (window.innerWidth < 992) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        if (section === 'about') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
        } else {
            showSection(section);
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Intensitas berbeda untuk tipe element
    
    // Tools items - intensitas 40
    document.querySelectorAll('.tool-item, .profile-img').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 5;  // Intensitas 40 untuk tools
            const rotateX = (centerY - y) / 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
    
    // Certificate items - intensitas 80 (lebih subtle)
    document.querySelectorAll('.certificate-item').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 200;
            const rotateX = (centerY - y) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(3px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
    
    // Skill categories & project cards - intensitas medium 50
    document.querySelectorAll('.skill-category, .project-card, .timeline-content').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 50;
            const rotateX = (centerY - y) / 50;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });

    document.querySelectorAll('.project-card, .timeline-content').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 20;
            const rotateX = (centerY - y) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
});

// Glass Ripple
document.querySelectorAll('.tool-item, .nav-btn, .skill-item, .project-card, .certificate-item, .timeline-content').forEach(tool => {
    tool.addEventListener('click', function(e) {
        const existingRipples = this.querySelectorAll('.glass-ripple-effect');
        existingRipples.forEach(ripple => ripple.remove());
        
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.className = 'glass-ripple-effect';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode === this) {
                ripple.remove();
            }
        }, 800);
    });
});

// Certificate Modal Functionality
function initCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    
    // Add click event to all certificate images
    document.querySelectorAll('.cert-img').forEach(img => {
        img.addEventListener('click', function() {
            const fullImageSrc = this.getAttribute('data-full-image');
            const altText = this.getAttribute('alt');
            
            modal.style.display = "block";
            modalImg.src = fullImageSrc;
            modalCaption.innerHTML = altText;
        });
    });
    
    // Close modal when clicking X
    document.querySelector('.close').addEventListener('click', closeModal);
    
    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    document.getElementById('certificateModal').style.display = "none";
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCertificateModal();
});

// Smooth scroll untuk footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Close semua sections dulu
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            targetSection.classList.add('active');
            
            // Scroll ke section
            const offset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Switcher Functionality
const themes = ['default', 'dark', 'summer', 'autumn', 'spring', 'winter'];
let currentThemeIndex = 0;

function switchTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    
    // Remove existing theme class
    document.body.classList.remove('theme-default', 'theme-dark', 'theme-summer', 'theme-autumn', 'theme-spring', 'theme-winter');
    
    // Add new theme class
    document.body.classList.add(`theme-${theme}`);
    
    // Update theme in localStorage
    localStorage.setItem('selectedTheme', theme);
}

function applyTheme(theme) {
    document.body.classList.remove('theme-default', 'theme-dark', 'theme-summer', 'theme-autumn', 'theme-spring', 'theme-winter');
    document.body.classList.add(`theme-${theme}`);
    currentThemeIndex = themes.indexOf(theme);
}

// Event listeners untuk theme buttons
document.getElementById('themeBtn')?.addEventListener('click', switchTheme);
document.getElementById('themeSidebarBtn')?.addEventListener('click', function() {
    switchTheme();
    // Close sidebar setelah ganti theme di mobile
    if (window.innerWidth < 992) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Load saved theme dari localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    applyTheme(savedTheme);
});