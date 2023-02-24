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

function shake() {
    errorMessage.classList.add("shake");
    setTimeout(() => {errorMessage.classList.remove('shake');}, 300);
}

//email regular expresion function

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

