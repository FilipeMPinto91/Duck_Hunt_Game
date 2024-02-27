document.addEventListener(`DOMContentLoaded`,() => {
    const canvas = document.getElementById(`canvas1`);
    const ctx = canvas.getContext(`2d`);
    const duckSprites = [];
    let currentFrameIndex = 0;
    const duckWidth = 80;
    const duckHeight = 50;
    let duckX = Math.random() * (canvas.width - duckWidth);
    let duckY = Math.random() * (canvas.height - duckHeight);
    let isDuckAlive = true;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD:script.js
    for (let i =0; i < 3; i++ ) {
        const duckImg = new Image();
        duckImg.src = `Images/GreenDuckH${i}.png`;
        duckSprites.push(duckImg);
    }
=======
    const duckImg = new Image();
    duckImg.src = './assets/images/duckGreen1.png';
>>>>>>> b908b6088ca5f14aa060bfcb6584b0e5e8605c6f:scripts/duck_green.js

    const drawDuck = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.drawImage(duckSprites[currentFrameIndex], duckX, duckY, duckWidth, duckHeight);
       currentFrameIndex = (currentFrameIndex + 1) % duckSprites.length;
    };

    const shoot = event => {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        if (mouseX >= duckX && mouseX <= duckX + duckWidth &&
            mouseY >= duckY && mouseY <= duckY + duckHeight && isDuckAlive) {
                isDuckAlive = false;

                duckX = Math.random() * (canvas.width - duckWidth);
                duckY = Math.random() * (canvas.height - duckHeight);
                isDuckAlive = true;
            }
    };

    canvas.addEventListener("click", shoot);

    const animateDuck = () => {
        setTimeout(() => {
            drawDuck();
            requestAnimationFrame(animateDuck);
        }, 100);
    }

    animateDuck();
});
