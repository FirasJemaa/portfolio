//alert('Le site est en cours de construction, merci de votre compréhension !');

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

// BTN scroll top
window.addEventListener('scroll', TopScroll);
function TopScroll() {
  let BtnScrollTop = document.getElementById('topButton');

  if (window.scrollY > 200) {
    BtnScrollTop.style.visibility = "visible";
  } else {
    BtnScrollTop.style.visibility = "hidden";
  }
};

document
  .getElementById('topButton')
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

/* Circle */
let certification = document.getElementById('certification');
//apparaitre la deuxieme class certification
certification.addEventListener('mouseenter', () => {
  let counter = 0;
  let pourcentage = 0;
  let number = document.getElementsByClassName('number');
  // pour chaque number on fait : 
  for (let i = 0; i < number.length; i++) {
    // On récupère le nombre de pourcentage et on l'incrémente et échappé au signe %
    pourcentage = parseInt(number[i].innerHTML);
    console.log(pourcentage);
    let count = setInterval(() => {
      if (counter < pourcentage) {
        counter++;
        number[i].innerText = counter + '%';
      } else {
        clearInterval(count);
      }
    }, 1000);
  }
});