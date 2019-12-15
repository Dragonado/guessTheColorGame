
var noOfSquares = 6; // starting out with hard mode

// if easy mode is selected
document.querySelector("#easyMode").addEventListener("click",function(){
	document.querySelector("#easyMode").classList.add("selected");
	document.querySelector("#hardMode").classList.remove("selected");
	noOfSquares = 3;
	refresh();
});

// if hard mode is selected
document.querySelector("#hardMode").addEventListener("click",function(){
	
	document.querySelector("#hardMode").classList.add("selected");
	document.querySelector("#easyMode").classList.remove("selected");
	noOfSquares = 6;
	refresh();
});

// picking all squares
var squares = document.querySelectorAll(".square");

// contains array of colors
var colors;

// holds the value of the randomly picked color by the computer
var pickedColor;

refresh(); // initialzing all the value of the above variables

// If "new Colors" or "Play again?" is selected
document.querySelector("#refreshPage").addEventListener("click",function(){
	this.textContent = "New Colors";
	refresh();
});	

function refresh()
{
	// setting all the squares to bg color
	for(var i = 0; i < squares.length; i++) 
		squares[i].style.backgroundColor = "#232323"; // same as bg

	// resetting color of heading to initial value
	document.querySelector("#heading").style.backgroundColor = "cyan";	

	// generating random colors for all the squares
	colors = generateRandomColors(); 
	
	// randomly picking one color
	pickedColor = pickRandomColor();

	// displaying "RGB(color)"
	document.getElementById("rgbValue").innerHTML = pickedColor;
	
	// assigning squares their colors
	for(var i = 0; i < noOfSquares; i++)
		squares[i].style.backgroundColor = colors[i];
	// changing text to new colors

	//changing message
	document.querySelector("#message").textContent = "";
}

for(var i = 0; i < noOfSquares; i++)
{
	squares[i].addEventListener("click", function clicked()
	{
		// grabbing color of clicked square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			document.querySelector("#message").textContent = "Correct!";
			changeColor(clickedColor); // change the color of all squares
			document.querySelector("#heading").style.backgroundColor = clickedColor;
			document.querySelector("#refreshPage").textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323"; // make this value match the bg color to make it "disapper"
			document.querySelector("#message").textContent = "Try Again!";
		}
	});
}

function changeColor(color){
	for(var i = 0; i < noOfSquares; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor(){
	var random = Math.floor(Math.random()*noOfSquares);
	return colors[random];
}

function generateRandomColors(){
	var randomColors = [];
	for(var i = 0; i < noOfSquares; i++){
		var rRed = Math.floor(Math.random()*256); // picks number from 0-255 inclusive
		var rGreen = Math.floor(Math.random()*256);
		var rBlue = Math.floor(Math.random()*256);

		var color = "rgb("+rRed+", "+rGreen+", "+rBlue+")";
		randomColors.push(color);
	}
	return randomColors;
}