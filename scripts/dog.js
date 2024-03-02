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

function showDuck(killedDucks) {
  let gameContainer = document.getElementById("game-container");
  let dogElement = document.createElement("div");
  dogElement.setAttribute("class", "got-one", "got-two");
  gameContainer.appendChild(dogElement);
  if (killedDucks === 1) {
    dogElement.classList.add("got-one");
  } else {
    dogElement.classList.add("got-two");
  }
}

function dogLaugh() {
  let dogElement = document.createElement("div");
  let dogContainer = document.getElementById("game-container");
  dogElement.setAttribute("class", "laugh");
  dogContainer.appendChild(dogElement);
  dogElement.classList.add("laugh");
}
