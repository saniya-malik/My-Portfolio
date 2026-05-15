
document.getElementById('year').textContent = new Date().getFullYear();

// ====================== SCROLL REVEAL ANIMATION ======================
// Fade and slide up effect for elements when they enter viewport
(function() {
  const fadeElements = document.querySelectorAll(
    '.skill-card, .project-item, .about-grid, .hero-content, .hero-visual'
  );

  // Set initial styles
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
  });

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  // Observe each element
  fadeElements.forEach(el => observer.observe(el));
})();

// ====================== TOPBAR SHADOW ON SCROLL ======================
(function() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      topbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.04)';
    } else {
      topbar.style.boxShadow = 'none';
    }
  }, { passive: true });
})();

// ====================== MOBILE NAVIGATION TOGGLE ======================
(function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobileNav');
  
  if (!menuToggle || !mobileNav) return;

  // Toggle mobile menu
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = mobileNav.style.display === 'flex';
    mobileNav.style.display = isVisible ? 'none' : 'flex';
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
    });
  });

  // Close mobile menu on window resize (if screen becomes larger)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      mobileNav.style.display = 'none';
    }
  });
})();

// ====================== SMOOTH SCROLL FOR ANCHOR LINKS ======================
(function() {
  const allLinks = document.querySelectorAll('a[href^="#"]');
  
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
})();
(function() {
  // Simple highlight effect for project items on hover is handled in CSS,
  // but we add a subtle console greeting for professionalism
  console.log('✨ Saniya Malik Portfolio — Built with precision and care');
})();

// You can easily update project repository links here
const projectLinks = {
  'AI Personal Voice Assistant': 'https://github.com/saniya-malik/AI-assistant',
  // Add more project links as needed
};

// Optionally add click handlers to project arrows if you want them to link somewhere
document.querySelectorAll('.project-item').forEach(item => {
  const titleElem = item.querySelector('.project-mid h3');
  if (!titleElem) return;
  
  const title = titleElem.innerText.trim();
  if (projectLinks[title]) {
    const arrow = item.querySelector('.proj-arrow');
    if (arrow) {
      arrow.style.cursor = 'pointer';
      arrow.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(projectLinks[title], '_blank');
      });
      
      // Also make the whole project item clickable? 
      // For better UX, only if there's no existing link inside
      const existingLink = item.querySelector('.project-link');
      if (!existingLink) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
          window.open(projectLinks[title], '_blank');
        });
      }
    }
  }
});
