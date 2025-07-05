
const challenges = [
  "🏄‍♂️ Fais semblant de surfer au milieu de la foule",
  "🌺 Offre un « aloha » et un check hawaïen à un·e inconnu·e",
  "📸 Prends un selfie avec la plus belle casquette du festival",
  "🍍 Crie « Vive les ananas ! » aussi fort que possible",
  "🎶 Chante le refrain d’un tube des Vieilles Charrues à un·e inconnu·e",
  "🌞 Fais un compliment à la personne la plus bronzée autour de toi",
  "🤙 Fais un “shaka” (🤙) à 5 personnes d’affilée",
  "🏖️ Trouve quelqu’un en tong et tape-lui gentiment dans la main"
];

function spinWheel() {
  const index = Math.floor(Math.random() * challenges.length);
  document.getElementById("result").innerText = challenges[index];
}

function resetWheel() {
  document.getElementById("result").innerText = "";
}
