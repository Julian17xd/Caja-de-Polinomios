var elementoArrastrado;

function arrastre(event) {
  event.dataTransfer.setData("text", event.target.id);
  elementoArrastrado = event.target;
}

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var target = event.target;

  var clon = document.getElementById(data);

  if (clon) {
    if (clon.classList.contains("cuadrado")) {
      clon.style.left = event.clientX - clon.offsetWidth / 2 + "px";
      clon.style.top = event.clientY - clon.offsetHeight / 2 + "px";
    } else {
      var nuevoClon = clon.cloneNode(true);
      nuevoClon.id = "cuadrado" + Math.random().toString(16).slice(2);
      nuevoClon.classList.add("cuadrado");
      nuevoClon.style.position = "absolute";
      nuevoClon.style.left = event.clientX - nuevoClon.offsetWidth / 2 + "px";
      nuevoClon.style.top = event.clientY - nuevoClon.offsetHeight / 2 + "px";
      nuevoClon.draggable = true;
      nuevoClon.ondragstart = arrastre;
      document.body.appendChild(nuevoClon);
    }
  }
});

var cuadradoArrastrandose = null;
var offsetX, offsetY;

document.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("cuadrado")) {
    cuadradoArrastrandose = event.target;
    offsetX = event.clientX - cuadradoArrastrandose.getBoundingClientRect().left;
    offsetY = event.clientY - cuadradoArrastrandose.getBoundingClientRect().top;
  }
});

document.addEventListener("mousemove", function (event) {
  if (cuadradoArrastrandose !== null) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    cuadradoArrastrandose.style.left = mouseX - offsetX + "px";
    cuadradoArrastrandose.style.top = mouseY - offsetY + "px";
  }
});

document.addEventListener("mouseup", function (event) {
  cuadradoArrastrandose = null;
});

document.addEventListener("mouseleave", function (event) {
  cuadradoArrastrandose = null;
});
