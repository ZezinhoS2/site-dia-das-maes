const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.5;

// Toca a música após o primeiro clique do usuário
document.addEventListener("DOMContentLoaded", () => {
  const iniciarMusica = () => {
    bgMusic.play().catch(() => console.log("Autoplay bloqueado"));
    document.body.removeEventListener("click", iniciarMusica);
  };
  document.body.addEventListener("click", iniciarMusica);
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
  "Poema 1: Mãe, seu amor é o sol que aquece meu coração.",
  "Poema 2: Em cada gesto seu, encontro paz.",
  "Poema 3: Sua força me inspira todos os dias.",
  "Poema 4: Seu sorriso é meu porto seguro.",
  "Poema 5: Obrigado por nunca desistir de mim.",
  "Poema 6: Mãe, seu carinho me moldou.",
  "Poema 7: Sua voz é a melodia da minha vida.",
  "Poema 8: Seu amor é infinito como o céu.",
  "Poema 9: Cada momento com você é precioso.",
  "Poema 10: Você é meu exemplo de amor e coragem.",
  "Poema 11: Te amo mais do que palavras podem dizer."
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
