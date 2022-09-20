// VAR SETUP
let player = document.querySelector(".player");
let food = document.querySelector(".food");
let moveBy = 120;
let foood = 10;
let water = 20;
let energy = 100;
let deaths;
let foodCounter = document.getElementById("foodCounter");
let fullscreenwarning = document.getElementById("fullscreenwarning");
let waterCounter = document.getElementById("waterCounter");
let health;

// SET UP CODE

// MENU CODE


// FUNCTIONS
function damage(damagetaken) {
  let health = health - damagetaken;
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
      break;
    case "ArrowRight":
      player.style.left = parseInt(player.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      player.style.top = parseInt(player.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      player.style.top = parseInt(player.style.top) + moveBy + "px";
      break;
      case "a":
        player.style.left = parseInt(player.style.left) - moveBy + "px";
        break;
      case "d":
        player.style.left = parseInt(player.style.left) + moveBy + "px";
        break;
      case "w":
        player.style.top = parseInt(player.style.top) - moveBy + "px";
        break;
      case "s":
        player.style.top = parseInt(player.style.top) + moveBy + "px";
        break;
      
  }
});

// HEALTH, STAMINA, AND ENERGY CODE
foodCounter.innerHTML = "Food: " + foood
waterCounter.innerHTML = "Water: " + water



