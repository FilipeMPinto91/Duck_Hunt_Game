document.addEventListener(`DOMContentLoaded`,() => {
    const playButton = document.getElementById(`playButton`);
    playButton.addEventListener(`click`, startGame);
});    

const startGame = () => {
    playButton.style.display = `none`;
    startDuckGame();
} 

