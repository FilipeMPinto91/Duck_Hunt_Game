const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 600);
const CANVAS_WIDTH = (canvas.width = 600);

const dogImg = new Image();
dogImg.src = "./assets/images/duckhunt.png";
const spriteWidth = 575;
const spriteHeight = 523;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    dogImg,
    0,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  requestAnimationFrame(animate);
}
animate();
