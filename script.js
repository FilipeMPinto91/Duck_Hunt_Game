document.addEventListener(`DOMContentLoaded`,() => {
    const canvas = document.getElementById(`canvas1`);
    const ctx = canvas.getContext(`2d`);
    const ducks = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const duckImg = new Image();
    duckImg.src = `Images/duckGreen1.png`;

    const Duck = (x, y, width, height,) => ({
        x,
        y,
        width,
        height,
        alive: true
    });

    const drawDucks = () => {
        ducks.forEach(duck => {
            if (duck.alive) {
                ctx.drawImage(duckImg, duck.x, duck.y, duck.width, duck.height);
            }
        });
    };

    const createDuck = () => {
        const duckWidth = 80;
        const duckHeight = 50;
        const duckX = Math.random() * (canvas.width - duckWidth);
        const duckY = Math.random() * (canvas.height - duckHeight);
        const newDuck = Duck(duckX, duckY, duckWidth, duckHeight);
        ducks.push(newDuck);
    };

    const shoot = event => {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        ducks.forEach(duck => {
            if (mouseX >= duck.x && mouseX <= duck.x + duck.width &&
                mouseY >= duck.y && mouseY <= duck.y + duck.height && duck.alive) {
                duck.alive = false;
            }
        });
    };

    canvas.addEventListener("click", shoot);

    const update = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDucks();
        requestAnimationFrame(update);
    };

    (function gameloop() {
        createDuck();
        setTimeout(gameloop, 2000);
    })();

    update();
});
