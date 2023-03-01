
	
	let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let numbers = "0123456789";
	let specialCharacters = "!@#$%^&*`,_-=|./?'";
	let lettersLength = letters.length;
	let numbersLength = numbers.length; 
	let specialCharactersLength = specialCharacters.length;

	function generateLetters(numberOfLetters){
		let generatedLetters = "";
		for(var i = 0; i < numberOfLetters; i++){
			generatedLetters += letters.charAt(Math.floor(Math.random() * lettersLength)) 
		}
		return generatedLetters;
	}
	function generateNumbers(numberOfNumbers){
		let generatedNumbers = "";
		for(var i = 0; i < numberOfNumbers; i++){
			generatedNumbers += numbers.charAt(Math.floor(Math.random() * numbersLength))
		}
		return generatedNumbers;
	}
	function generateSpecialCharacters(numberOfSpecialCharacters){
		let  generatedSpecialCharacters = "";
		for(var i = 0; i < numberOfSpecialCharacters; i++){
			generatedSpecialCharacters += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));	
		}
		return generatedSpecialCharacters;
	}
	function stringRandomizer(values){
		let index = values.length, randomIndex;
		while(index != 0){
			randomIndex = Math.floor(Math.random() *index)
			index--
			[values[index], values[randomIndex]] = [values[randomIndex], values[index]];
		}
		return values
	}

	function generate(variable, typeOfCharacter, numberOfCharactersRequired){
		variable = "";
		for(var i = 0; i < numberOfCharactersRequired; i++){
			variable += typeOfCharacter.charAt(Math.floor(Math.random() * typeOfCharacter.length));	
		}
		return variable;
	}

let output = generateLetters(7) + generateNumbers(6) + generateSpecialCharacters(6)
output.split("")
console.log(stringRandomizer(output.split("")).join(""))
