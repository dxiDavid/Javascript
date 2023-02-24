let reviews = [
	{
		id:1,
		name: "Daniel Clifford",
		role: "Verified Graduate",
		img: "./images/image-daniel.jpg",
		title: "I honestly feel I got every penny’s worth.",
		message: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore! Totam pariatur veritatis animi dolor voluptatem tempore laudantium.\
		Quis, aliquid voluptatum numquam quod veritatis similique eius, nostrum reprehenderit,\
		repellendus vero saepe qui corrupti tempora cupiditate rerum repellat et iure animi\
		”"
	},

	{
		id: 2,
		name:"Jonathan Walters",
		role: "Verified Graduate",
		img: "./images/image-jonathan.jpg",
		title: "The team was very supportive and kept me motivated",
		message: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore! Totam pariatur veritatis animi dolor voluptatem tempore laudantium.\
		Quis, aliquid voluptatum numquam quod veritatis similique eius, nostrum reprehenderit,\
		repellendus vero saepe qui corrupti tempora cupiditate rerum repellat et iure animi\
		”"
	},

	{
		id: 3,
		name: "Jeanette Harmon",
		role: "Verified Graduate",
		img: "./images/image-jeanette.jpg",
		title: "An overall wonderful and rewarding experience",
		message: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore! Totam pariatur veritatis animi dolor voluptatem tempore laudantium.\
		Quis, aliquid voluptatum numquam quod veritatis similique eius, nostrum reprehenderit,\
		repellendus vero saepe qui corrupti tempora cupiditate rerum repellat et iure animi\
		”"
	},

	{
		id: 4,
		name: "Patrick Abrams",
		role:"Verified Graduate",
		img: "./images/image-patrick.jpg",
		title: 
		"Awesome teaching support from TAs who did the bootcamp themselves. ",
		 message: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore! Totam pariatur veritatis animi dolor voluptatem tempore laudantium.\
		 Quis, aliquid voluptatum numquam quod veritatis similique eius, nostrum reprehenderit,\
		 repellendus vero saepe qui corrupti tempora cupiditate rerum repellat et iure animi\
		 ”"
	},

	{
		id: 5,
		name: "Kira Whittle",
		role: "Verified Graduate",
		img: "./images/image-kira.jpg",
		title: "Such a life-changing experience. Highly recommended!",
		message: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore! Totam pariatur veritatis animi dolor voluptatem tempore laudantium.\
		repellendus vero saepe qui corrupti tempora cupiditate rerum repellat et iure animi\
		”"
	}
]

const image = document.getElementById("person-img");
const fullName = document.getElementById("fullName");
const role = document.getElementById("role");
const testimonial = document.getElementById("testimonial");
const message = document.getElementById("message")
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentCard = 0;

// initial testimonial

window.addEventListener("DOMContentLoaded", () => {
	populate(currentCard)
})

// population function

function populate (person){
	const card = reviews[person];
	image.src = card.img;
	fullName.textContent = card.name;
	testimonial.textContent = card.title;
	message.textContent = card.message;
}

nextBtn.addEventListener("click", () => {
	currentCard++;
	if(currentCard > reviews.length - 1){
		currentCard = 0
	}
	populate(currentCard)
})

prevBtn.addEventListener("click", () => {
	prevBtn.classList.add("active")
	currentCard--;
	if(currentCard < 0){
		currentCard = reviews.length - 1;
	}
	populate(currentCard)
})