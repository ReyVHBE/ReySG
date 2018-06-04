


var friends = ["Aneki", "Quell","Clarity","Sleepy","Roghar","Dm Crimson"];
console.log(friends.length);
console.log(friends[0]);


var team1=new Array();
var team2=new Array();
for (var i=0; i<friends.length; i++) {
	if(i%2==0) {
		//add person to team 1
		team1.push(friends[i]);
	} else {
		//add person to team2
		team2.push(friends[i]);
	}
}
console.log(team1);
console.log(team2);

var team1=new Array();
var team2=new Array();
for (var i=0; i<friends.length; i++) {
	if(i%2==0) {
		//add person to team 1
		team1.unshift(friends[i]);
	} else {
		//add person to team2
		team2.unshift(friends[i]);
	}
}
console.log(team1);
console.log(team2);


var team1=new Array();
var team2=new Array();
for (var i=0; i<friends.length; i++) {
	if(i%2==0) {
		//add person to team 1
		team1[team1.length]=friends[i];
	} else {
		//add person to team2
		team2[team2.length]=friends[i];
	}
}
console.log(team1);
console.log(team2);

var fruits=['kiwi','rambutan','mango','tomato'];
console.log(fruits);
fruits.pop(); //takes off last element tomato
fruits.push('gooseberry');  //adds gooseberry to end of array
console.log(fruits);
fruits.shift(); //takes away first element 0 kiwi
console.log(fruits);
fruits.unshift("banana");  // adds banana to element 0
console.log(fruits);
fruits.slice(0, 2);  //returns two elements starting from 0  Does not change the array
fruits.splice(0, 2);  // cuts out of the array element 0 and 1 and shrinks the array.
console.log(fruits);
console.log(fruits.length);
fruits[fruits.length]="blueberry" //adds element to the end of array
console.log(fruits);
console.log(fruits.length);
fruits[2]="pineapple";  // replaces a specified element.
console.log(fruits);
console.log(fruits.length);
fruits[5]="dragonfruit";  // adds new element to array and creates undefined placeholders
console.log(fruits);
console.log(fruits.length);


