const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.5;

// Toca a música automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  bgMusic.play().catch(() => console.log("Autoplay bloqueado"));
});

// Corações flutuantes
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = `${Math.random() * 15 + 20}px`;
  heart.textContent = "💖";
  document.getElementById("heartsContainer").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 800);

// Poemas e imagens
const poemas = [
  "Mãe, seu amor é o sol que aquece meu coração.",
  "Em cada gesto seu, encontro paz.",
  "Sua força me inspira todos os dias.",
  "Seu sorriso é meu porto seguro.",
  "Obrigado por nunca desistir de mim.",
  "Mãe, seu carinho me moldou.",
  "Sua voz é a melodia da minha vida.",
  "Seu amor é infinito como o céu.",
  "Cada momento com você é precioso.",
  "Você é meu exemplo de amor e coragem.",
  "Te amo mais do que palavras podem dizer."
];

const imagens = [
  "imagens/1.jpeg",
  "imagens/2.jpeg",
  "imagens/3.jpeg",
  "imagens/4.jpeg",
  "imagens/5.jpeg",
  "imagens/6.jpeg",
  "imagens/7.jpeg",
  "imagens/8.jpeg",
  "imagens/9.jpeg",
  "imagens/10.jpeg",
  "imagens/11.jpeg"
];

const carouselTrack = document.getElementById("carouselTrack");
const poemaElement = document.getElementById("poema");
let currentIndex = 0;

// Adiciona imagens ao carrossel
imagens.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = `Foto ${index + 1}`;
  img.addEventListener("click", () => mostrarPoema(index));
  carouselTrack.appendChild(img);
});

function mostrarPoema(index) {
  poemaElement.innerHTML = `<p>${poemas[index]}</p>`;
  poemaElement.style.opacity = "1";
}

function moverCarrossel(direcao) {
  const total = imagens.length;
  currentIndex = (currentIndex + direcao + total) % total;
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}vw)`;
  mostrarPoema(currentIndex);
}

// Mostrar o primeiro poema ao carregar
mostrarPoema(0);
