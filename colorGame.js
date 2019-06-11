var i;
var numBox = 6;
var colors = generateRandomColors(numBox);
var box = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("h1 span");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".gameMode");

init();

function init(){
	reset();
	setGameModes();
	setSquares();
}

function setSquares(){
	for(i = 0; i < box.length; i++){
		box[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor == pickedColor){
				message.textContent = "Correct!";
				message.style.color = "#3cba54";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "white";
				message.textContent = "Try again!";
				message.style.color = "#db3236";
			}
		});
	}
}

function setGameModes(){
	for(i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "easy" ? numBox = 3:numBox = 6;
			reset();
		});
	}
}

function changeColors(color){
	for(var j = 0; j < numBox; j++){
		box[j].style.backgroundColor = color;				
	}
}

//random number
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
} 

//generating random RGB values
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//putting random generated colors in array
function generateRandomColors(numBox){
	var arr = [];
	for(var i = 0; i < numBox; i++){
		arr.push(randomColor());
	}
	return arr;
}


function reset(){
	colors = generateRandomColors(numBox);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < box.length; i++) {
		if(colors[i]){
			box[i].style.background = colors[i];
		}
		else{
			box[i].style.background = "none";
		}
	}
	h1.style.background = "#4885ed";
	resetButton.textContent = "New Colors";
	message.textContent = "";	
}

resetButton.addEventListener("click", function(){
	reset();
});

