document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });
  
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
        
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollToTop');
  const container = document.querySelector('.container');

  function updateScrollButtonPosition() {
    if (!container || !scrollBtn) return;

    const containerWidth = container.offsetWidth;
    const windowWidth = window.innerWidth;
    const sidePadding = (windowWidth - containerWidth) / 2;

    // On garde une marge minimale de 16px
    const right = Math.max(sidePadding, 16);
    scrollBtn.style.right = `${right}px`;
  }

  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  }

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleScrollButton);
  window.addEventListener('resize', updateScrollButtonPosition);

  updateScrollButtonPosition(); // au chargement
});
  });

  document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scrollTopBtn');
    const container = document.querySelector('.container');
  
    function updateScrollButtonPosition() {
      if (!container || !scrollBtn) return;
  
      const containerWidth = container.offsetWidth;
      const windowWidth = window.innerWidth;
      const sidePadding = (windowWidth - containerWidth) / 2;
      const right = Math.max(sidePadding, 15); // min 20px
      scrollBtn.style.right = `${right+20}px`;
    }
  
    function toggleScrollButton() {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }
  
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    window.addEventListener('scroll', toggleScrollButton);
    window.addEventListener('resize', updateScrollButtonPosition);
  
    updateScrollButtonPosition(); // appel initial
  });
  
  