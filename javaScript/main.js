let circle = document.querySelector(".circle");
let moveBy = 10;
let food = 10;
let water = 20;
let energy = 100;
let deaths = 0;

window.addEventListener("load", () => {
  circle.style.position = "absolute";
  circle.style.left = 100;
  circle.style.top = 100;
});

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      circle.style.left = parseInt(circle.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      circle.style.left = parseInt(circle.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      circle.style.top = parseInt(circle.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      circle.style.top = parseInt(circle.style.top) + moveBy + "px";
      break;
  }
});