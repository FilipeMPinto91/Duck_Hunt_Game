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

function startNewRound() {
    ducksKilled = 0;
    bulletCounter = 3;
}

function endGame() {
    isGameOver = true;
    const gameOverElement = document.getElementById("game-over");
    gameOverElement.style.display = "block";
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = totalDucksKilled * 100;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    clearTimeout(flyOutTimeOut);

    setTimeout(() => {
        isGameOver = false;
        startGame();
    }, 2000);
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
        dogElement.classList.add("got-one");
    }
}

function dogLaugh() {
    let dogElement = document.createElement("div");
    let dogContainer = document.getElementById("game-container");
    dogElement.setAttribute("class", "laugh");
    dogContainer.appendChild(dogElement);
    dogElement.classList.add("laugh");
}
