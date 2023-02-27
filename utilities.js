  //Toggle slide
  elemetOfChoice.addEventListener('click', ()=>{
    elementOfChoice.classList.toggle('targetClassOfChoice');

//sequential Animation
    elementOfChoice.forEach((link, index) => {
        elements.forEach((element, index) => {
            element.style.animation = `sequetial-animation 0.3s ${index * 0.15}s ease forwards`;
        });
    }); 

});


//_____________Form validation___________________//

/*shake animation - set the keyframe animation in percentages that increase by 20% from 0. 
start with0, -units, +units, repeat and finish with 0
*/

//shake animation function

function shake() {
    errorMessage.classList.add("shake");
    setTimeout(() => {errorMessage.classList.remove('shake');}, 300);
}

//push animation function

function buttonPush(){
	button.classList.add("push");
	setTimeout(() => {button.classList.remove("push")}, 100)
}

//email regular expresion function

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

//name regular expression function

function isValidName(name){
	const pattern = /^[a-zA-Z\s_]+$/;
  	return pattern.test(name);
}

//password regular expression function

function isValidPassword(password){
	const lowercasePattern = /[a-z]/;
	const uppercasePattern = /[A-Z]/;
	const numberPattern = /[0-9]/;
	const specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
	return lowercasePattern.test(password) && uppercasePattern.test(password) && numberPattern.test(password) && specialCharPattern.test(password);
}

//error messsage functions

function displayError(message, inputField){
	errorMessage(message, inputField);
	shake(message);
}

function errorMessage(message, inputField){
	message.classList.add("display-error-message");
	inputField.style.border = "2px solid red";
}

//success message functions

function success( message, inputField,){
	message.classList.remove("display-error-message");
	inputField.style.border = "2px solid green";
}


//The Following functions go Together

//node list function to make sure that only one item is active

element.forEach((percentage) => {
	percentage.addEventListener("click", (e) => {
		selectedAttribute = e.target.getAttribute("attribute");
		
		if(!e.target.classList.contains("active")){
			e.target.classList.toggle("active");
		}

		if (e.target.classList.contains("active")) {
			percentages.forEach((e) => e.classList.remove("active"));
			percentage.classList.add("active");
		  }
		  calculate(selectedPercentage);

	})
})

//remove a class from an element when I click anywhere in the DOM

document.addEventListener("click", function (e) {
	if (!e.target.matches(".selected")) {
	  buttons.forEach((e) => e.classList.remove("selected"));
	  selectedNumber = undefined;
	}
});