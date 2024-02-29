function launchWalkoutAnimation() {
  const dogElement = document.createElement("div");
  const gameContainer = document.getElementById("game-container");
  dogElement.setAttribute("class", "dog");
  gameContainer.appendChild(dogElement);

  dogElement.addEventListener("animationend", () => {
    dogElement.classList.add("found");
  });
  dogElement.addEventListener("animationend", () => {
    setTimeout(() => {
      dogElement.classList.add("jump");
    }, 1000);
  });
  dogElement.addEventListener("animationend", () => {
    setTimeout(() => {
      dogElement.remove();
    }, 1800);
  });
}
launchWalkoutAnimation();


