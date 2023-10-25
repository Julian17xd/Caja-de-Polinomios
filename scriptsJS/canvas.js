var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function resizeCanvas() {
  c.width = window.innerWidth * 0.7;
  c.height = window.innerHeight;
  redraw();
}

function redraw() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.moveTo(c.width / 2, 0);
  ctx.lineTo(c.width / 2, c.height);
  ctx.stroke();
  ctx.moveTo(0, c.height / 2);
  ctx.lineTo(window.innerWidth, c.height / 2);
  ctx.stroke();
}

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
