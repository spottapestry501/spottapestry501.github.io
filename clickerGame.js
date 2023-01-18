var score = 0;
const scoreDiv = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", e => {
    score++
    scoreDiv.innerHTML = "Score: " + score;
    if(score == 5) {
        alert("Congrats! You have 5 score!")
        
    }
})



