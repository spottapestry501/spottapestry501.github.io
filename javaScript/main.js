let circle = document.querySelector(".circle");
let food = document.querySelector(".food");
let moveBy = 120;
let foood = 10;
let water = 20;
let energy = 100;
let deaths = 0;
let foodCounter = document.getElementById("foodCounter");
let waterCounter = document.getElementById("waterCounter");

window.addEventListener("load", () => {
  circle.style.position = "absolute";
  circle.style.left = 0;
  circle.style.top = 0;
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
      case "a":
        circle.style.left = parseInt(circle.style.left) - moveBy + "px";
        break;
      case "d":
        circle.style.left = parseInt(circle.style.left) + moveBy + "px";
        break;
      case "w":
        circle.style.top = parseInt(circle.style.top) - moveBy + "px";
        break;
      case "s":
        circle.style.top = parseInt(circle.style.top) + moveBy + "px";
        break;
      
  }
});
foodCounter.innerHTML = "Food: " + foood
waterCounter.innerHTML = "Water: " + water



