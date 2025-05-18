 window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-example");
    const heroSection = document.getElementById("home");

    if (!navbar || !heroSection) return;

    const sectionBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= sectionBottom) {
      navbar.classList.add("nav-colored", "nav-scrolled");
    } else {
      navbar.classList.remove("nav-colored", "nav-scrolled");
    }
  });