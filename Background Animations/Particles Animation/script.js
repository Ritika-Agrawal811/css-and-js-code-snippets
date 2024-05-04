const canvas = document.getElementById("particlesBackground");

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const c = canvas.getContext("2d");

const colors = ["#A020F0", "#5CACEE", "#0FDDAF", "#00688B"];

function Circle(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.startX = x - 15;
  this.endX = x + 15;
  this.startY = y - 15;
  this.endY = y + 15;
  this.dx = Math.random() - 0.5;
  this.dy = Math.random() - 0.5;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = color;
    c.fill();
  };

  this.update = function () {
    if (
      this.x > this.endX ||
      this.y > this.endY ||
      this.x < this.startX ||
      this.y < this.startY
    ) {
      this.dx = -this.dx;
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

const circlesArray = [];

for (let i = 0; i < 150; i++) {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const r = Math.random() * 8;
  const index = Math.floor(Math.random() * colors.length);

  const circle = new Circle(x, y, r, colors[index]);

  circlesArray.push(circle);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let circle of circlesArray) {
    circle.update();
  }
}

animate();
