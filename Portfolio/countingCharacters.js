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


var firstNumber = 11;
var secondNumber = 8;
var sum=0;
function addTwoNumbers(firstNumber,secondNumber) {
	return sum=(firstNumber+secondNumber); 
}
	console.log(addTwoNumbers(firstNumber,secondNumber));
	

	
	
	
	
	
	
	