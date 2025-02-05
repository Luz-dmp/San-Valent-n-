const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", function () {
    const x = Math.random() * window.innerWidth * 0.8; // Evita que se salga de la pantalla
    const y = Math.random() * window.innerHeight * 0.8;

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", function () {
    alert("¡Sabía que dirías que sí! ❤️ Te amo mucho 🥰");
});

noButton.addEventListener("click", function () {
    alert("Oh no... Pero Spiderman no se rinde. ¡Lo intentaré de nuevo! 🕷️");
});
