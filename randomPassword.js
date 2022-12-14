function randomize() {
    let checkbox = document.getElementById("letters");
    myArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","_","=","+","'",":",";","{","[","}","]",",","<",".",">","/","?","|",",","~"];
    index = Math.floor(Math.random()* 90);
    index2 = Math.floor(Math.random()* 90);
    index3 = Math.floor(Math.random()* 90);
    index4 = Math.floor(Math.random()* 90);
    index5 = Math.floor(Math.random()* 90);
    index6 = Math.floor(Math.random()* 90);
    index7 = Math.floor(Math.random()* 90);
    index8 = Math.floor(Math.random()* 90);
    index9 = Math.floor(Math.random()* 90);
    index10 = Math.floor(Math.random()* 90); 
    document.getElementById("password").innerHTML = myArray[index] + myArray[index2] + myArray[index3] + myArray[index4] + myArray[index5] + myArray[index6] + myArray[index7] + myArray[index8] + myArray[index9] + myArray[index10];
}

function randomize2() {
    myArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
    index = Math.floor(Math.random()* 62);
    index2 = Math.floor(Math.random()* 62);
    index3 = Math.floor(Math.random()* 62);
    index4 = Math.floor(Math.random()* 62);
    index5 = Math.floor(Math.random()* 62);
    index6 = Math.floor(Math.random()* 62);
    index7 = Math.floor(Math.random()* 62);
    index8 = Math.floor(Math.random()* 62);
    index9 = Math.floor(Math.random()* 62);
    index10 = Math.floor(Math.random()* 62); 
    document.getElementById("password").innerHTML = myArray[index] + myArray[index2] + myArray[index3] + myArray[index4] + myArray[index5] + myArray[index6] + myArray[index7] + myArray[index8] + myArray[index9] + myArray[index10];
}

function Info(){
    alert("Randomize: randomizes with everything. Randomize2: randomizes with letters and numbers.");
}
function doNotTouch() {
    alert("Why?");
}


    

