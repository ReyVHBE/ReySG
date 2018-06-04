
alert("This is a message");

confirm("Do you like cake?");

prompt('What is your favorite band?');


//Since confirm() and prompt() return values, 
//we can store these values in variables to use later. 

// Check to see if the user likes cake
var likesCake = confirm("Do you like cake?");
// If the user likes cake, find out what their favorite cake is
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is whatever they inputted 
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}


// Prompt for a response then do a IF ELSE with it.
function sayHello(myName) {
	myName=prompt('What is your name?');
    if (myName == "Mr. Grinch") {
        alert("You're a mean one, " + myName);
    } else {
        alert('Hello, ' + myName);
    }
}
sayHello('Mr. Grinch');

//THE START OF COUNTING CHARACTERS

/*function countingCharacters(stringToCount) {
	// The length property has been mentioned in
	// the logging letter excersise in lesson 4

	console.log (stringToCount + " has " + stringToCount.length + " characters.");
}



// Let's count the number of times a character appears in a string
//We will look at each character one by one with the help of a for loop

var characterCount = 0;

for (var characterPosition = 0;
		characterPosition < stringToCount.length;
		characterPosition++){
			if (stringToCount[characterPosition] == characterToFind){
				characterCount++;
			}
		}
	console.log("string to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the character appears;" + characterCount);	
}
	
*/	
	
function countingCharacters3(str,search){	
	var count = 0;
	var numChars = search.length;
	var lastIndex =str.length-numChars;
	for(var index = 0; index <=lastIndex; index++) {
		var current=str.substring(index,index + numChars);
	if (current == search) {
		count++;
	}
	}
	console.log("String to search in:"+str);
	console.log("Character to find:"+search);
	console.log("Number of times the character appears: " + count);
}

	
Math.random()

Math.random()*(6-1);

for (var i=0; i<100; i++) {
		console.log(Math.random()*(1+6-1));	
}
	
Math.ceil(0.9)
Math.floor(0.8)
Math.round(0.7)

for (var i=0; i<100; i++) {
		console.log(Math.ceil(Math.random()*(1+6-1)));	
}

//ROLLING DICE	
function rollDice() {
		return Math.ceil(Math.random()*(1+6-1));
}
for (var i=0; i<100; i++) {
	console.log(rollDice());
}
	
var minimum = 1;
var maximum = 6;
function rollDice(minimum,maximum) {
		return Math.ceil(Math.random()*(1+maximum-minimum));
}
for (var i=0; i<100; i++) {
	console.log(rollDice(minimum,maximum));
}

//ADD TWO NUMBERS FROM CODE PRACTICE Defining Functions
var firstNumber = 11;
var secondNumber = 8;
var sum=0;
function addTwoNumbers(firstNumber,secondNumber) {
	return sum=(firstNumber+secondNumber); 
}
	console.log(addTwoNumbers(firstNumber,secondNumber));
	
	
//HIDES all links
function hideAllLinks() {
    var allLinks = document.links;
    for (var loopCounter = 0;
        loopCounter < allLinks.length; loopCounter++) {
        allLinks[loopCounter].style.display = "none";
    }
}







