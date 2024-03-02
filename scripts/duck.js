const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
const duckSprites = [];
const fallingDuckSprites = [];
let currentFrameIndex = 0;
const duckWidth = 70;
const duckHeight = 75;
let duckX = Math.random() * (canvas.width - duckWidth);
let duckY = Math.random() * (canvas.height - duckHeight);
let isDuckAlive = true;
let duckSpeedX = Math.random() * 10 -5;
let duckSpeedY = Math.random() * 10 -5;
let numberOfDucksKilled = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i =0; i < 3; i++ ) {
        const duckImg = new Image();
        duckImg.src = `assets/images/GreenDuckH${i}.png`;
        duckSprites.push(duckImg);
}

for (let i = 0; i < 4; i++) {
        const fallingDuckImg = new Image();
        fallingDuckImg.src = `assets/images/GreenDuckF${i}.png`
        fallingDuckSprites.push(fallingDuckImg);
}

const drawDuck = () => {
    //    const spawnX = canvas.width/2 - duckWidth/2;
    //    const spawnY = canvas.height/1.5 - duckHeight/2;

       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.drawImage(duckSprites[currentFrameIndex], duckX, duckY, duckWidth, duckHeight);
       currentFrameIndex = (currentFrameIndex + 1) % duckSprites.length;
}

const shoot = event => {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        if (mouseX >= duckX && mouseX <= duckX + duckWidth &&
            mouseY >= duckY && mouseY <= duckY + duckHeight && isDuckAlive) {
                isDuckAlive = false;

                animateFallingDuck();

                numberOfDucksKilled++;
                showDuck(numberOfDucksKilled);

                duckX = Math.random() * (canvas.width - duckWidth);
                duckY = Math.random() * (canvas.height - duckHeight);
                isDuckAlive = true;
            } else {
                dogLaugh();
            }
}

const updateDuckPosition = () => {
        duckX += duckSpeedX;
        duckY += duckSpeedY;
        if (duckX < 0 || duckX + duckWidth > canvas.width) {
            duckSpeedX *= -1;
        }
        if (duckY < 0 || duckY + duckHeight > canvas.height) {
            duckSpeedY *= -1;
        }
}

const animateDuck = () => {
    setTimeout(() => {
        updateDuckPosition();
        drawDuck();
        requestAnimationFrame(animateDuck);
    }, 100);
}

const animateFallingDuck = () => {
        let fallingDuckX = duckX;
        let fallingDuckY = duckY;

        const fallingDuckAnimation = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fallingDuckY += 5;

            ctx.drawImage(fallingDuckSprites[currentFrameIndex], fallingDuckX, fallingDuckY, duckWidth, duckHeight);
        
            if (fallingDuckY < canvas.height) {
                requestAnimationFrame(fallingDuckAnimation)
            }
        };

        fallingDuckAnimation();
}

setInterval(() => {
        duckSpeedX = Math.random() * 10 -5;
        duckSpeedY = Math.random() * 10 -5;
}, 5000);


canvas.addEventListener("click", shoot);

