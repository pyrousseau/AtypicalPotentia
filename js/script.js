
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-item a[href^='#']");
  
    const removeActiveClasses = () => {
      navLinks.forEach(link => link.classList.remove("active"));
    };
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`.nav-item a[href="#${id}"]`);
            if (activeLink) {
              removeActiveClasses();
              activeLink.classList.add("active");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0
      }
    );
  
    sections.forEach(section => observer.observe(section));
  
    const handleInitialHighlight = () => {
      const scrollY = window.pageYOffset;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollY >= section.offsetTop - window.innerHeight / 2) {
          const id = section.getAttribute("id");
          const activeLink = document.querySelector(`.nav-item a[href="#${id}"]`);
          if (activeLink) {
            removeActiveClasses();
            activeLink.classList.add("active");
          }
          break;
        }
      }
    };
  
    window.addEventListener("load", handleInitialHighlight);
  });
  