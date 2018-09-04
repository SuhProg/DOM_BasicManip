let img = document.createElement("img");
img.src = "http://lorempixel.com/output/sports-q-c-640-480-10.jpg";
let div = document.createElement("div");
div.innerHTML = "Ninth";

// to remove an element use .removeChild()
document.getElementById("seventh").appendChild(div);
document.getElementById("seventh").removeChild(div);
console.log(

	document.getElementById("first").innerHTML,
	document.getElementsByClassName("myClass")[1].innerHTML,
	document.getElementsByTagName("div")[2].innerHTML,
	// querySelector doesn't generate an array, just gets the first element [NOT IDEAL]
	document.querySelector("#fourth").innerHTML,
	document.querySelector("div.fifth").innerHTML,
	document.querySelectorAll(".myClass")[5].innerHTML,
	document.getElementById("seventh").querySelectorAll(".seventh")[0].innerHTML,
	// can use until the last element
	document.querySelector("#ninth").parentNode,
	

	//return img on console
	img

);

if (document.getElementById("seventh").querySelectorAll(".seventh").length == 1)
	console.log("Found it!");