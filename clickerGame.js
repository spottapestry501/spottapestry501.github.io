var score = 0;
const scoreDiv = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", e => {
    score++
    scoreDiv.innerHTML = "Score: " + score;
    if(score == 5) {
        score = 0;
        setInterval(scoreGetter, 1000)
    }
})

function scoreGetter() {
    score + 2;
}

