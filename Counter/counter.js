let count = 0;

const value = document.querySelector(".value");
const buttonNodeList = document.querySelectorAll(".btn");

prompt("prompt Box")

function counterFunction(e){
	const styles = e.currentTarget.classList;
		if (styles.contains("minus")){
			count--;
		}
		else if(styles.contains("plus")){
			count++
		}
		else{
			count = 0;
		}
		if (count < 0){
			value.style.color = "red"
		}
		else if(count > 0){
			value.style.color = "green"
		}
		else{
			value.style.color = "white"
		}
		value.textContent = count;
}

buttonNodeList.forEach(function (button) {
	button.addEventListener("click", counterFunction);
})

