var randomButton = document.getElementById("randomButton")

function randomize() {
    myArray = ["1","2","3","4","5","6","7","8","9","10"];
    index = Math.floor(Math.random()* 10);
    index2 = Math.floor(Math.random()* 10);
    index3 = Math.floor(Math.random()* 10);
    index4 = Math.floor(Math.random()* 10);
    index5 = Math.floor(Math.random()* 10);
    index6 = Math.floor(Math.random()* 10);
    index7 = Math.floor(Math.random()* 10);
    index8 = Math.floor(Math.random()* 10);
    index9 = Math.floor(Math.random()* 10);
    index10 = Math.floor(Math.random()* 10); 
    document.getElementById("randomNumber").innerHTML = myArray[index] + myArray[index2] + myArray[index3] + myArray[index4] + myArray[index5] + myArray[index6] + myArray[index7] + myArray[index8] + myArray[index9] + myArray[index10];
}