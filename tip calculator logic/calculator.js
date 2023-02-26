/* 
	The total bill should be based on the total number of people that buy food.
	The function should:
		 - take the total bill 
		 - divide it among the number of people 
		 	
		 - multiply the result from the given options of percentages or a custom one --var
		 	* this is the tip per person
		 - add the tip per person and the individual bill and show it as the total bill per person
*/
const billInput = document.getElementById("total bill");
const peopleInput = document.getElementById("people");
const buttons = document.querySelectorAll(".button");
const calculate = document.querySelector(".calculate")
const selected = document.querySelector(".selected");
const totalOutput = document.querySelector(".total");
const tipPerPersonOutput = document.querySelector(".tip");
const reset = document.querySelector(".reset")
let selectedPercentage = undefined;

buttons.forEach((percentage) => {
	percentage.addEventListener("click", (e) => {
		//get percentage from the button
		selectedPercentage = e.target.getAttribute("itemid");

		if(!selected){
			e.target.classList.toggle("selected");
		}
		//remove class and value from others when one is selected
		if (e.target.classList.contains("selected")) {
			buttons.forEach((e) => e.classList.remove("selected"));
			percentage.classList.add("selected");
		  }

		  //math

			function calculate (){

				billValue = billInput.value.trim();
		  		peopleValue = peopleInput.value.trim();
		  		customValue = customInput.value.trim();
				//calc tip
				personalBill = (billValue / peopleValue);
				personalTip = personalBill * selectedPercentage;
				personalBillAndTip = personalBill + personalTip;
				//show results
				totalOutput.textContent = personalBillAndTip;
				tipPerPersonOutput.textContent = personalTip;
			}
		calculate()
	})
})

//find out how to clear a form on click

reset.addEventListener("click", () => {
	totalOutput.textContent = "0"
	tipPerPersonOutput.textContent = "0"
})

//remove classes on clicking anywhere on the document

document.addEventListener("click", function (e) {
	if (!e.target.matches(".selected")) {
	  buttons.forEach((e) => e.classList.remove("selected"));
	  selectedNumber = undefined;
	}
});



/*
	the math is ok for now. All I have to do is:
	- add an event listener for a button to toggle appearance of a custom input field
	- write a check to make sure that the total bill and person input fields are not empty.
*/