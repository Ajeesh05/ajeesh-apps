function startGame() {
  const box = document.getElementById("messageBox");
  box.style.visibility = "hidden";
}

/* Desktop: Space key */
document.addEventListener("keydown", function (evt) {
  if (evt.code === "Space") {
    startGame();
  }
});

/* Mobile: Tap anywhere */
document.addEventListener("touchstart", function () {
  startGame();
}, { once: true });

