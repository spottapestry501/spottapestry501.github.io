// VAR SETUP
let player = document.querySelector(".player");
let food = document.querySelector(".food");
let moveBy = 50;
let foood = 10;
let water = 20;
let energy = 100;
let deaths;
let foodCounter = document.getElementById("foodCounter");
let fullscreenwarning = document.getElementById("fullscreenwarning");
let waterCounter = document.getElementById("waterCounter");
let xCounter = document.getElementById("xCounter");
let yCounter = document.getElementById("yCounter");
let health;

// SETUP CODE

// MENU CODE


// FUNCTIONS
function damage(damagetaken) {
  let health = health - damagetaken;
}

function setcoords() {
  let position = player.getBoundingClientRect();
  xCounter.innerHTML = "X: " + position.left / 50
  yCounter.innerHTML = "Y: " + position.bottom / 50
}

// MOVEMENT CODE

window.addEventListener("load", () => {
  player.style.position = "absolute";
  player.style.left = 0;
  player.style.top = 0;
});

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      player.style.left = parseInt(player.style.left) - moveBy + "px";
      setcoords();
      break;
    case "ArrowRight":
      player.style.left = parseInt(player.style.left) + moveBy + "px";
      setcoords();
      break;
    case "ArrowUp":
      player.style.top = parseInt(player.style.top) - moveBy + "px";
      setcoords();
      break;
    case "ArrowDown":
      player.style.top = parseInt(player.style.top) + moveBy + "px";
      setcoords();
      break;
      case "a":
        player.style.left = parseInt(player.style.left) - moveBy + "px";
        setcoords();
        break;
      case "d":
        player.style.left = parseInt(player.style.left) + moveBy + "px";
        setcoords();
        break;
      case "w":
        player.style.top = parseInt(player.style.top) - moveBy + "px";
        setcoords();
        break;
      case "s":
        player.style.top = parseInt(player.style.top) + moveBy + "px";
        setcoords();
        break;
      
  }
});

// HEALTH, STAMINA, AND ENERGY CODE
foodCounter.innerHTML = "Food: " + foood
waterCounter.innerHTML = "Water: " + water


