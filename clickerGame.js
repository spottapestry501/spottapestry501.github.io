var score = 0;
var fancyPizzaScore = 0
var fancyPizza = document.getElementById("fancyPizza");
var oldManPizzaScore = 0;
var oldManPizza = document.getElementById("oldManPizza");
const scoreDiv = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", e => {
    score++
    scoreDiv.innerHTML = "Score: " + score;
    if(score == 5) {
        
        
    }
})

function updatecount(){
    if(score >= 100){
        score -= 100;
        oldManPizzaScore++;
        scoreDiv.innerHTML = "Score: " + score;
        oldManPizza.innerHTML = "Old man pizza: " + oldManPizzaScore;
        setInterval(() => {
            score += 0.5;
            scoreDiv.innerHTML = "Score: " + score;
        }, 1000);
    }
}

function updatecount2(){
    if(score >= 500){
        score -= 500;
        fancyPizzaScore++;
        scoreDiv.innerHTML = "Score: " + score;
        fancyPizza.innerHTML = "Fancy pizza: " + fancyPizzaScore;
        setInterval(() => {
            score += 5;
            scoreDiv.innerHTML = "Score: " + score;
        }, 1000);
    }
}



