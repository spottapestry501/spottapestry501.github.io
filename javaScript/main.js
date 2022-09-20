let circle = document.querySelector(".circle");
let food = document.querySelector(".food");
let moveBy = 10;
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
      case "A":
        circle.style.left = parseInt(circle.style.left) - moveBy + "px";
        break;
      case "D":
        circle.style.left = parseInt(circle.style.left) + moveBy + "px";
        break;
      case "W":
        circle.style.top = parseInt(circle.style.top) - moveBy + "px";
        break;
      case "S":
        circle.style.top = parseInt(circle.style.top) + moveBy + "px";
        break;
      
  }
});
foodCounter.innerHTML = "Food: " + foood
waterCounter.innerHTML = "Water: " + water

let randomNumbers = [100,200,300,400,500,600,700,800,900,1000]
let shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  
};

function randomizeFoodLocation() {
moveFood = shuffleArray(randomNumbers);
food.style.top = + moveFood + "px";
}
randomizeFoodLocation();

