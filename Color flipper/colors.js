const colors = ["hsl(178, 100%, 50%)", "hsl(215, 51%, 70%)", "hsl(216, 50%, 16%)", "hsl(0, 0%, 100%)", "hsl(217, 54%, 11%)"];
const btn_1 = document.getElementById("color-1");
const btn_2 = document.getElementById("color-2");
const btn_3 = document.getElementById("color-3");
const btn_4 = document.getElementById("color-4");
const btn_5 = document.getElementById("color-5");
const default_color = document.getElementById("default-bg");

btn_1.addEventListener("click", function(){
	document.body.style.backgroundColor = colors[0];
})
btn_2.addEventListener("click", function(){
	document.body.style.backgroundColor = colors[1];
})
btn_3.addEventListener("click", function(){
	document.body.style.backgroundColor = colors[2];
})
btn_4.addEventListener("click", function(){
	document.body.style.backgroundColor = colors[3];
})
btn_5.addEventListener("click", function(){
	document.body.style.backgroundColor = colors[4];
})
default_color.addEventListener("click", function(){
	document.body.style.backgroundColor = "hsl(123, 100%, 36%)";
})