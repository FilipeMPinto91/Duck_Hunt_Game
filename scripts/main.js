const crosshairContainer = document.getElementById("crosshair");
const pistolShootContainer = document.getElementById("gun-shoot");
const bodyContainer = document.body;

const bullet1 = document.querySelector(".bullet1");
const bullet2 = document.querySelector(".bullet2");
const bullet3 = document.querySelector(".bullet3");
const gameContainer = document.getElementById("game-container");
let flyOutCounter = 0;
let maxRounds = 5;
let maxWaves = 3;
let totalDucksKilled = 0;

let roundsCounter = 1;
let maxFlyOut = 3;
let flyOut = 1;
let ducksPerFlyOut = 2;

let maxMissedDucksToLose = 3;
let missedDucks = 0;
let ducksKilledFlyOut = 0;

let isEnableShooting = false;
let isGameOver = false;
let isFlyOutFinished = false;
let isRoundFinished = false;
let flyOutTimeOut;

function play() {
    hideMainMenu();
    startGame();
}

function startGame() {
    isGameOver = false;
    const gameOverElement = document.getElementById("game-over");
    gameOverElement.style.display = "none";
    launchApplication();
    displayGameStartingTimer(3);
    displayRoundNumber(1);
    showBullets();
    launchWalkoutAnimation();
    setTimeout(() => {
        startNewRound();
    }, 4000);
}

function startNewRound() {
    isRoundFinished = false;
    isFlyOutFinished = false;
    flyOut = 1;
    ducksPerFlyOut = 2;
    missedDucks = 0;
    bulletCounter = 3;
    showBullets();
    refreshScore();
    displayRoundNumber();
    startFlyOut();
}

function startFlyOut() {
    isFlyOutFinished = false;
    bulletCounter = 3;
    showBullets();
    clearTimeout(roundsCounter);
    setCountdownToFlyOutEnd();
    updateFlyOutAndRounds();
    checkBulletsAndUpdate();
    checkDucksKilledAndUpdate();
    displayFlyOutTimer(10);

    for (let i = 0; i < ducksPerFlyOut; i++) {
        animateDuck(roundsCounter);
    }
}

function finishFlyOut() {
    clearTimeout(flyOutTimeOut);

    if (missedDucks >= maxMissedDucksToLose) {
        deleteAllDucks();
        clearTimeout(flyOutTimeOut);
        displayGameOver(totalDucksKilled * 100);
        return;
    }

    if (timeOutCounter === 3) {
        roundsCounter++;
        timeOutCounter = 1;
        startNewRound();
    } else {
        timeOutCounter++;
        startFlyOut();
    }
    updateFlyOutAndRounds;
    ducksKilledFlyOut = 0;
}

function setCountdownToFlyOutEnd() {
    if (!isGameOver) {
        clearTimeout(flyOutTimeOut);
        let timeToFlyOut = 10000;

        flyOutTimeOut = setTimeout(() => {
            if (!isFlyOutFinished) {
                isFlyOutFinished = true;
                finishFlyOut();
            }
        }, timeToFlyOut);
    }
}

function checkBulletsAndUpdate() {
    if (bulletCounter < 0 && ducksKilledFlyOut < 2 && !isFlyOutFinished) {
        isFlyOutFinished = true;
        clearTimeout(flyOutTimeOut);
        deleteAllDucks();
        setTimeout(() => finishFlyOut(), 1000);
    }
}

function checkDucksKilledAndUpdate() {
    if (ducksKilledFlyOut === 2 && !isFlyOutFinished) {
        isFlyOutFinished = true;
        ducksKilledFlyOut = 0;
        clearTimeout(flyOutTimeOut);
        setTimeout(finishWave, 1500);
    }
}

let gameStartingEndTimer;

function displayGameStartingTimer(seconds) {
    gameStartingEndTimer = Date.now() + seconds * 1000;

    const gameTimerContainer = document.getElementById("game-starting-timer");
    const timerElement = document.createElement("div");
    timerElement.setAttribute("id", "timer");
    timerElement.style.fontSize = "400%";
    gameTimerContainer.appendChild(timerElement);

    const updateTimer = () => {
        const currentTime = Date.now();
        const timeLeft = Math.ceil((gameStartingEndTimer - currentTime) / 1000);

        if (timeLeft > 0) {
            timerElement.textContent = `${timeLeft}`;
            setTimeout(updateTimer, 1000);
        } else {
            timerElement.textContent = "QUACK TIME!";
            setTimeout(() => timerElement.remove(), 1000);
        }
    };
    updateTimer();
}

let flyOutEndTimer;
const flyOutTimeContainer = document.getElementById("flyOut-time-left");
const timerElement = document.createElement("div");
flyOutTimeContainer.appendChild(timerElement);
timerElement.setAttribute("id", "flyOutTimer");

function displayFlyOutTimer(seconds) {
    flyOutEndTimer = Date.now() + seconds * 1000;
    const updateTimer = () => {
        const currentTime = Date.now();
        const timeLeft = Math.ceil((flyOutEndTimer - currentTime) / 1000);
        if (timeLeft > 0) {
            timerElement.textContent = `TIMER: ${timeLeft}`;
            setTimeout(updateTimer, 1000);
        } else {
            timerElement.textContent = "TIME'S UP!";
            setTimeout(() => timerElement.remove(), 1000);
        }
    };
    updateTimer();
}

function displayRoundNumber(roundCounter) {
    roundNumberContainer = document.getElementById("round-number-display");
    roundElement = document.createElement("div");
    roundElement.setAttribute("id", "round-element");
    roundElement.textContent = `ROUND ${roundCounter}`;
    roundNumberContainer.appendChild(roundElement);
    roundElement.addEventListener("animationend", () => {
        setTimeout(() => {
            roundElement.remove();
        }, 3000);
    });
}

function updateFlyOutAndRounds() {
    let flyOut = document.querySelector(".flyOut");
    let rounds = document.querySelector(".round-number");
    flyOut.innerHTML = `flyOut : ${flyOutCounter} / ${maxFlyOut} `;
    rounds.innerHTML = `Round : ${roundsCounter} /∞`;
}

function refreshScore() {
    let score = document.querySelector(".score");
    score.innerHTML = `SCORE :     ${totalDucksKilled * 100}`;
}

function showBullets() {
    const bulletCounter = document.getElementById("bullet-counter");
    const childDivs = bulletCounter.querySelectorAll("div");
    childDivs.forEach((div) => (div.style.display = "none"));
}

function hideMainMenu() {
    const mainMenu = document.querySelector(".main-menu-container");
    mainMenu.classList.add("hide-container");
}