
const scoreDiv = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", e => {
    const score = 0;
    score++
    scoreDiv.innerHTML = "Score: " + score
})