function launchWalkoutAnimation() {
  const dogElement = document.createElement("div");
  dogElement.className = "dog";
  const fieldContainer = document.getElementById("game-container");
  fieldContainer.appendChild(dogElement);

  dogElement.addEventListener(
    "animationend",
    () => {
      dogElement.classList.add("found");
    },
    { once: true }
  );

  dogElement.addEventListener(
    "animationend",
    () => {
      setTimeout(() => {
        dogElement.classList.add("jump");
      }, 1000);
    },
    { once: true }
  );

  dogElement.addEventListener(
    "animationend",
    () => {
      setTimeout(() => {
        dogElement.remove();
      }, 1800);
    },
    { once: true }
  );
}
