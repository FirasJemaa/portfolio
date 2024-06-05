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
