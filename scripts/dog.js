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

function showDuck(numberOfDucksKilled) {
  let dogElement = document.createElement("div");
  let gameContainer = document.getElementById("game-container");
  dogElement.setAttribute("class", "dog2");
  gameContainer.appendChild(dogElement);
  if (numberOfDucksKilled === 1) {
    dogElement.classList.add("got-one");
  } else if (numberOfDucksKilled === 2) {
    dogElement.classList.add("got-two");
  } else {
    return;
  }
}

function dogLaugh() {
  let dogElement = document.createElement("div");
  let dogContainer = document.getElementById("game-container");
  dogElement.setAttribute("class", "laugh");
  dogContainer.appendChild(dogElement);
  dogElement.classList.add("laugh");
}
