// informing variables use let for the ones that can change value and const for unmutable variables

let firstPerson = "Joe";
let secondPerson = "Jane";
let newPerson = {
	name: 'Suh',
	age: 24,
	profession: 'programmer',
	city: 'Rio'
};

let js = document.getElementsByClassName("myClass");
let array = [5,4,3,2,1,0];
let j = 0;

// if & else
if ("Jane" == firstPerson){
	console.log("Joe is the first person!")
}
else if ("Jane" == secondPerson) {
	console.log("Jane is our second person!")
}
else {
	console.log("That's not one of our people.")
}

// switch/case

switch(firstPerson) {
	case "Joe":
		console.log("Hey, that's Joe!");
		break;
	case "Jane":
		console.log("Woah, that's Jane!");
		break;
	default:
		console.log("Uh, we don't know this person.");
		break;
}

// for
for (i = 0; i < js.length; i++){
	let text = js[i].innerHTML;
	// adds to html
	js[i].innerHTML = "Position: " + text;
	// adds to console
	console.log(js[i].innerHTML)
}

// forEach [must be used with an array] forEach(function(element, index))
//before
console.log(array)

array.forEach(function(a, i){
	if(a != i){
		array[i] = i;
	}
})
//after
console.log(array)

// map [must be used with an array]

let newVar = array.map(function(a, i){
	if (a === 1){
		a = "One";
	}
	return a;
})
console.log(newVar)

// while
while(j < 5){
	console.log("Hey...");
	j++;
}

// functions
function newFunction(value){
	let newText = value + ".";
	console.log(newText)
}
// calling the function
newFunction(document.getElementById("first").innerHTML);

// starting a math basics function
function mathFunction(expression){
	let num = expression;
	console.log(num)
}
mathFunction();

//

function newComer(newUser) {
	if (typeof newUser == 'object'){
		newPerson = newUser;
		return true;
	}
	else{
		return false;
	}
}

console.log(newPerson)

// creating a array from input data
function parametersCheck() {
	console.log(arguments);
	return true;
}