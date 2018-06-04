var sentence = "I love learning software development";

for(var i=0; i< sentence.length; i++) {
	if(sentence[i]!==" "){
		console.log(sentence[i]);
	}
}




function sayHello(myName) {
	alert('Hello, ' + myName);
}

sayHello('Mr. Grinch');



function sayHello(myName) {
	if(myName=="Mr.Grinch") {
		alert("You're a mean one, " +myName);
	}  else { 
		alert('Hello, ' + myName);
	}
}

sayHello('Mr.Grinch');


/* not working below code */
function sayHello(prompt("What is your name?")) {
	if(sayHello=="Mr.Grinch") {
		alert("You're a mean one, " + sayHello);
	}  else { 
		alert('Hello, ' + sayHello);
	}
}

sayHello('Mr.Grinch');




