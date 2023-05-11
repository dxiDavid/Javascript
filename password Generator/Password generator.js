const generateBtn = document.getElementById("generate")
const outputBox = document.querySelector(".output")
const inputBox = document.getElementById("input")
const form = document.querySelector('form');

form.addEventListener("keydown", (e) => {
	if(e.key === "Enter"){
		e.preventDefault
	}
})


generateBtn.addEventListener("click", (e) => {

	if(e.key === "Enter"){
		e.preventDefault
	}

	e.preventDefault()
	e.target.classList.add("push");
  	setTimeout(() => {e.target.classList.remove("push")}, 100);

		let newPassword = generatePassword(inputBox.value)
		let sliceLength = Math.ceil(newPassword.length / 3)
		let shuffledPassword = stringRandomizer(newPassword)
		outputBox.textContent = shuffledPassword.slice(0, sliceLength).join("")
	  
})

// generator functions

const char = {
	letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	numbers: "0123456789",
	symbols: "!@#$%^&*`,_-=|./?'"
}

function generatePassword(passwordLength){
	const { letters, numbers, symbols } = char
	let password = "";

	for(var i = 0; i < Math.round(passwordLength); i++){
		password += letters.charAt(Math.floor(Math.random() * letters.length)) 
		password += numbers.charAt(Math.floor(Math.random() * numbers.length)) 
		password += symbols.charAt(Math.floor(Math.random() * symbols.length)) 
	}

}