const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const boutonGauche = document.getElementById("arrow1");
const boutonDroit = document.getElementById("arrow2");
const dotsContainer = document.querySelector(".dots-container");

let index = 0;

const imageElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector(".tag-line");

function afficherSlide(index) {
  imageElement.src = slides[index].image;
  tagLineElement.innerHTML = slides[index].tagLine;
  updateDots(index);
}

function updateDots(index) {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function clicBoutonGauche() {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
  afficherSlide(index);
}

function clicBoutonDroit() {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
  afficherSlide(index);
}

// Création des points (bulles)
const dots = slides.map((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
  return dot;
});

afficherSlide(index);

boutonGauche.addEventListener("click", clicBoutonGauche);
boutonDroit.addEventListener("click", clicBoutonDroit);
