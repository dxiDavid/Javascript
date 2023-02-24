const color_pallete = ["hsl(178, 100%, 50%)", "hsl(215, 51%, 70%)", "hsl(216, 50%, 16%)", "hsl(0, 0%, 100%)", "hsl(217, 54%, 11%)"];
const hex_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const btn_hex = document.getElementById("btn_hex");
const push_animation = document.getElementsByTagName("button");


//Random Generators

btn.addEventListener("click", function (){
	const randomNumber  = getColorFromArray();
	document.body.style.backgroundColor = color_pallete[randomNumber];
})

btn_hex.addEventListener("click", function (){
	let hexCode = "#";
	for(i = 0; i < 6; i++){
		hexCode += hex_array[getRandomHexValue()]
	}
	document.body.style.backgroundColor = hexCode;
})

function getColorFromArray(){
	return Math.floor(Math.random() * color_pallete.length)
}

function getRandomHexValue(){
	return Math.floor(Math.random() * hex_array.length)
}

