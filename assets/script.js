AOS.init({
    duration: 1000, // durée en millisecondes
    easing: 'ease', // pour utiliser le easing de base
    offset: 120, // décalage par rapport au point de déclenchement
});

let title = document.getElementById('title');

title.addEventListener('mouseenter', () => {
    title.style.transition = 'opacity 0.4s cubic-bezier(.5,.01,.5,1)'; // Définir la transition au survol
    title.style.opacity = '0'; // Faire disparaître le texte
    setTimeout(() => {
        title.innerText = 'Firase Jemaa'; // Changer le texte
        title.style.opacity = '1'; // Faire réapparaître le texte
    }, 300); // 400ms est la durée de la transition définie dans setTimeout
});

title.addEventListener('mouseleave', () => {
    title.style.transition = 'opacity 0.4s cubic-bezier(.5,.01,.5,1)'; // Définir la transition au survol
    title.style.opacity = '0'; // Faire disparaître le texte
    setTimeout(() => {
        title.innerText = 'FJ'; // Rétablir le texte original
        title.style.opacity = '1'; // Faire réapparaître le texte
    }, 300); // 400ms est la durée de la transition définie dans setTimeout
});

// Skills 
document.addEventListener('scroll', function () {
    const items = document.querySelectorAll('.list-item');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let activeIndex = -1;

    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            activeIndex = index;
        }
    });

    items.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});