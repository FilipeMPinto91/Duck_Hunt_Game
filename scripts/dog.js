function launchWalkoutAnimation() {
  const dogElement = document.createElement("div");
  const fieldContainer = document.getElementById("field-container");
  dogElement.setAttribute("id", "dog1");
  fieldContainer.appendChild(dogElement);

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
  let dogElement = document.createElement("div");
  let dogContainer = document.getElementById("dog-container");
  dogElement.setAttribute("id", "dog2");
  dogContainer.appendChild(dogElement);
  if (killedDucks === 1) {
    dogElement.classList.add("gotOne");
  } else {
    dogElement.classList.add("gotTwo");
  }
}

function dogLaugh() {
  let dogElement = document.createElement("div");
  let dogContainer = document.getElementById("dog-container");
  dogElement.setAttribute("id", "dog2");
  dogContainer.appendChild(dogElement);
  dogElement.classList.add("laugh");
}

// Start the game
document.getElementById('launchWalkoutAnimationButton').click();
setTimeout(() => {
  document.getElementById('showDuckButton').click();
}, 2000); // Wait 2 seconds before showing the duck
setTimeout(() => {
  document.getElementById('dogLaughButton').click();
}, 4000); // Wait 4 seconds before making the dog laugh