

//IF ELSE loop.
var direction = prompt("Should we STOP, SLOW, or GO?");
if (direction == "STOP") {
    console.log("STOP!");
    alert("STOP!");
} else {
    console.log("GO!");
    alert("GO!");
}


//CASE Loop

switch (direction = prompt("Should we STOP, SLOW, or GO?")) {
    case "STOP":
        console.log("STOP!");
        alert("STOP!");
        break;
    case "SLOW":
        console.log("SLOW DOWN!");
        alert("SLOW DOWN!");
        break;
    default:
        console.log("GO!");
        alert("GO!");
}


//Plain while loop. May not execute.
var loopCounter = 0;
while (loopCounter <= 4) {
    console.log(loopCounter);
    loopCounter++;
}


//While Do loop. It will execute at least once.
do {
    userInput = prompt("Give me a number between 1 and 10.");
    if (userInput <= 0 || userInput > 10) {
        alert("The number must be between 1 and 10");
    }
} while (userInput > 10 || userInput <= 0);



//Plain FOR loop.
for (var loopCounter = 0; loopCounter <= 4; loopCounter++) {
    console.log(loopCounter);
}


// FOR loop with a IF inside
var sentence = "I love learning software development";
 
for (var i=0; i < sentence.length; i++) {
     if(sentence[i] !== " "){
      console.log(sentence[i]);
     }
}

//In the for loop we are using the .length property in the loop's condition. 
//Every string in JavaScript has a .length property. 
//Here we compare the number of characters in our sentence string (the string's length) to the current value of i. 
//This assures that the loop will only execute as many times as there are characters in our sentence string. 
var sentence = "I love learning software development";
 
for (var i=0; i < sentence.length; i++) {
     if(sentence[i] !== " "){
      console.log(sentence[i]);
     }
}

