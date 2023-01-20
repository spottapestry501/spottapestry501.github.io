var score = 99;
const scoreDiv = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", e => {
    score++
    scoreDiv.innerHTML = "Score: " + score;
    if(score == 5) {
        
        
    }
})

function updatecount(){
        score--;
        setInterval(() => {
            score++;
            scoreDiv.innerHTML = "Score: " + score;
        }, 1000);
}



