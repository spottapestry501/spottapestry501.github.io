var score = 0;
const scoreDiv = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", e => {
    score++
    scoreDiv.innerHTML = "Score: " + score;
    if(score == 5) {
        
        
    }
})

function updatecount(){
        setInterval(() => {
            score++;
            scoreDiv.innerHTML = "Score: " + score;
        }, 1000);
}



