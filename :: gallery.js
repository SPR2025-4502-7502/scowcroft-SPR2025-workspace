const images = [
  {
    src: "img/spain/Cheers.jpg",
    caption: "Cheers — Friends sharing various cocktails over card games at a local restaurant in Spain."
  },
  {
    src: "img/spain/Church-gathering.jpg",
    caption: "Church-gathering — Dozens of people flood the streets with live music near a local church in Barcelona."
  },
  {
    src: "img/spain/Familias.jpg",
    caption: "Familias — A stunning view of one side of Basílica de la Sagrada Família in Barcelona."
  },
  {
    src: "img/spain/Food-Market.jpg",
    caption: "Food-Market — Local market with fresh fruit and vegetables."
  },
  {
    src: "img/spain/Ibiza-boat.jpg",
    caption: "Ibiza-boat — Crystal clear waters of Ibiza with people swimming."
  },
  {
    src: "img/spain/Making-Paella.jpg",
    caption: "Making-Paella — Two people stirring a large pot of paella during a cooking class."
  },
  {
    src: "img/spain/Museum-art.jpg",
    caption: "Museum-art — WWII propaganda artwork in a museum."
  },
  {
    src: "img/spain/Sunset-ibiza.jpg",
    caption: "Sunset-ibiza — Sunset on the rocky coast of Ibiza with palm tree."
  },
  {
    src: "img/spain/Tapas-bar.jpg",
    caption: "Tapas-bar — Small tapas bar in Barcelona with floral decor."
  },
  {
    src: "img/spain/View-of-city.jpg",
    caption: "View-of-city — View of all of Barcelona from a hill."
  }
];

let currentIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const caption = document.getElementById("caption");

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});

function updateGallery() {
  galleryImage.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].caption;
}


