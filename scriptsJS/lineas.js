var lineaArrastrandose = null;

document.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("linea-vertical")) {
    lineaArrastrandose = event.target;
    var offsetX =
      event.clientX - lineaArrastrandose.getBoundingClientRect().left;
    lineaArrastrandose.dataset.offsetX = offsetX;
  }
});

document.addEventListener("mousemove", function (event) {
  if (lineaArrastrandose !== null) {
    var offsetX = parseInt(lineaArrastrandose.dataset.offsetX);
    var mouseX = event.clientX;

    mouseX = Math.max(0, Math.min(window.innerWidth, mouseX - offsetX));
    lineaArrastrandose.style.left = mouseX + "px";
  }
});

document.addEventListener("mouseup", function (event) {
  lineaArrastrandose = null;
});

document.addEventListener("mouseleave", function (event) {
  lineaArrastrandose = null;
});
