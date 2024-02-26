const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Image();
// background.src = `images/NES - Duck Hunt - Backgrounds.png`;
background.src = `images/Sprite.png`;


background.onload = () => {
    // ctx.drawImage(background, 0, 0, 250, 239, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 384, 6, 254, 238, 0, 0, canvas.width, canvas.height);
}






