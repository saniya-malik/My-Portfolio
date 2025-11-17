/* Small JS: sets current year and adds a tiny parallax for the soft shapes on mouse move.
   No heavy libs used. Keeps everything lightweight and smooth.
*/
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax effect for soft shapes (subtle)
(function(){
  const hero = document.querySelector('.hero-right');
  const s1 = document.querySelector('.shape-1');
  const s2 = document.querySelector('.shape-2');

  if (!hero || !s1 || !s2) return;

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // subtle movements
    s1.style.transform = `translate3d(${x * 18}px, ${y * 18}px, 0)`;
    s2.style.transform = `translate3d(${x * -12}px, ${y * -12}px, 0)`;
  });

  hero.addEventListener('mouseleave', () => {
    s1.style.transform = '';
    s2.style.transform = '';
  });
})();
