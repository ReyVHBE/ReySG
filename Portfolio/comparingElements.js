var testArray=[0,1,1,"1",3,"311"];

for (var arrayPosition=0;                 //start at 0
	arrayPosition < testArray.length - 1; //we need to stop with last two elements
	arrayPosition++)					  // increment counter
	{
		var currentElement = testArray[arrayPosition];
		var nextElement = testArray[arrayPosition + 1];
		console.log("Testing "+ currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));
		console.log("Testing "+ currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));
		
		if (currentElement == nextElement)
		{
		console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
		if (currentElement !== nextElement)
		{
			console.log(currentElement + " is " + typeof(currentElement));
			console.log(nextElement + " is " + typeof(nextElement));
		}
		} else 
			{
			console.log("Testing " + currentElement + " and " + nextElement + "(equalto): false");
			}
	}
console.log(testArray);
	
		