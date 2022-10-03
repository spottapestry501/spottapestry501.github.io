// VAR SETUP
let moveBy = 60;
let water = 20;
let energy = 100;
let deaths;
let fullscreenwarning = document.getElementById("fullscreenwarning");
let health;

/**
 * Generic Object
 */
class GenericObject {
    setX = function (value) {
        this.x = value;
        this.update();
    };
    setY = function (value) {
        this.y = value;
        this.update();
    };
    getX = function () {
        return this.x;
    };
    getY = function () {
        return this.y;
    };
    getWidth = function () {
        return this.width;
    };
    getHeight = function () {
        return this.height;
    };
    moveRight = function () {
        this.setX(this.getX() + moveBy);
        this.update();
    };
    moveLeft = function () {
        this.setX(this.getX() - moveBy);
        this.update();
    };
    moveUp = function () {
        this.setY(this.getY() - moveBy);
        this.update();
    };
    moveDown = function () {
        this.setY(this.getY() + moveBy);
        this.update();
    };
    checkIfFullscreen = function () {
        alert("You going into fullscreen. There may be issues.")
    }
};

/**
 * Player Object
 */
class PlayerObject extends GenericObject {
    x = 0;
    y = 0;
    width = 100;
    height = 100;
    foodAmount = 10;
    colliders = [];
    type = 'player';

    addCollider = function (collider) {
        this.colliders.push(collider);
    };

    update = function () { //handle the main loop for a player
        this.getElement().style.left = this.x + "px";
        this.getElement().style.top = this.y + "px";

        for (let i = 0; i < this.colliders.length; i++) {

            if (isCollided(this.colliders[i], this)) {
                console.log('collide!', )
                if (this.colliders[i].type === 'food') {
                    this.eatFood();
                }
            }
        }

        updateUi();
    };

    getElement = function () {
        return document.querySelector(".player");
    };

    getFoodAmount = function () {
        return this.foodAmount;
    };

    eatFood = function () {
        this.foodAmount++;
    };
    devToolFood = function () {
        foodAmount++;
    }
};

/**
 * Food Object
 */
class FoodObject extends GenericObject {
    x = 200;
    y = 200;
    width = 20;
    height = 20;
    type = 'food';
    update = function () {
        this.getElement().style.left = this.x + "px";
        this.getElement().style.top = this.y + "px";
    };
    getElement = function () {
        return document.querySelector(".food");
    };
};

// SET UP CODE

// MENU CODE

// FUNCTIONS
function damage(damagetaken) {
    let health = health - damagetaken;
}



// MOVEMENT CODE

window.addEventListener("load", () => {
    player = new PlayerObject();
    food = new FoodObject();

    player.update();
    food.update();

    //include any objects for collision
    player.addCollider(food);

    updateUi();
});

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
        case "a":
            player.moveLeft();
            break;
        case "ArrowRight":
        case "d":
            player.moveRight();
            break;
        case "ArrowUp":
        case "w":
            player.moveUp();
            break;
        case "ArrowDown":
        case "s":
            player.moveDown();
            break;
        case "t":
            player.devToolFood();
            break;

        

    }
});

function isCollided(rect1, rect2) {
    if (
        rect1.getX() < rect2.getX() + rect2.getWidth() &&
        rect1.getX() + rect1.getWidth() > rect2.getX() &&
        rect1.getY() < rect2.getY() + rect2.getHeight() &&
        rect1.getHeight() + rect1.getY() > rect2.getY()
    ) {
        return true;
    } else {
        return false;
    }
}

// HEALTH, STAMINA, AND ENERGY CODE
function updateUi() {
    let foodCounter = document.getElementById("foodCounter");
    let waterCounter = document.getElementById("waterCounter");

    foodCounter.innerHTML = "Food: " + player.getFoodAmount();
    waterCounter.innerHTML = "Water: " + water;
}

