// gallery.js

const images = [
  {
    filename: "Cheers.jpg",
    caption: "Cheers — Friends sharing various cocktails over card games at a local restaurant in Spain."
  },
  {
    filename: "Church-gathering.jpg",
    caption: "Church-gathering — Dozens of people flood the streets with live music near a local church in Barcelona."
  },
  {
    filename: "Familias.jpg",
    caption: "Familias — A stunning view of one side of Basílica de la Sagrada Família in Barcelona, still under construction."
  },
  {
    filename: "Food-Market.jpg",
    caption: "Food-Market — Local market with fresh fruit and vegetables sold directly from the storefront."
  },
  {
    filename: "Ibiza-boat.jpg",
    caption: "Ibiza-boat — Crystal clear waters of Ibiza with people swimming near the rocks."
  },
  {
    filename: "Making-Paella.jpg",
    caption: "Making-Paella — Two people stirring a large pot of paella during a cooking class."
  },
  {
    filename: "Museum-art.jpg",
    caption: "Museum-art — Spanish WWII propaganda art displayed in a museum."
  },
  {
    filename: "Sunset-ibiza.jpg",
    caption: "Sunset-ibiza — A beautiful sunset on the rocky coast of Ibiza with blue waters and a palm tree."
  },
  {
    filename: "Tapas-bar.jpg",
    caption: "Tapas-bar — Small tapas bar in Barcelona with flowers on the table and hanging from the ceiling."
  },
  {
    filename: "View-of-city.jpg",
    caption: "View-of-city — View of all of Barcelona from a hill, with a large cloud looming overhead."
  }
];

let current = 0;

const imgElement = document.getElementById("gallery-image");
const captionElement = document.getElementById("caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateGallery() {
  const { filename, caption } = images[current];
  imgElement.src = `img/spain/${filename}`;
  imgElement.alt = caption;
  captionElement.textContent = caption;
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateGallery();
});
