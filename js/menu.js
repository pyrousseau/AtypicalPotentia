document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger-toggle');
  const menu = document.getElementById('menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  let currentActiveId = null;
  let scrollingFromClick = false;

  // 🍔 Mobile toggle
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.contains('menu-visible');
      btn.classList.toggle('is-active');
      document.body.classList.toggle('menu-open');
      menu.classList.toggle('menu-visible', !isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          btn.classList.remove('is-active');
          document.body.classList.remove('menu-open');
          menu.classList.remove('menu-visible');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (
        window.innerWidth < 1024 &&
        menu.classList.contains('menu-visible') &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        menu.classList.remove('menu-visible');
        btn.classList.remove('is-active');
        document.body.classList.remove('menu-open');
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        btn.classList.remove('is-active');
        menu.classList.remove('menu-visible');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // 🧠 Intersection observer
  const linkObserver = new IntersectionObserver((entries) => {
    if (scrollingFromClick) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        currentActiveId = id;
        updateActiveLink(id);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => linkObserver.observe(section));

  // ✅ Gestion clic sur lien (mobile et desktop)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      const id = href && href.startsWith('#') ? href.substring(1) : null;

      if (id) {
        scrollingFromClick = true;
        currentActiveId = id;
        updateActiveLink(id);

        setTimeout(() => {
          scrollingFromClick = false;
        }, 1000);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
         // ⏱️ désactivation temporaire de l'observer après clic
      }
    });
  });

  // 🔁 Scroll auto après resize
 //  let resizeTimeout = null;
 //  window.addEventListener('resize', () => {
 //    if (resizeTimeout) clearTimeout(resizeTimeout);
 //    resizeTimeout = setTimeout(() => {
 //      if (currentActiveId) {
 //        const el = document.getElementById(currentActiveId);
 //        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
 //      }
 //    }, 300);
 //  });

  // 🔁 Update les classes actives
  function updateActiveLink(id) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${id}`);
    });
  }
});
