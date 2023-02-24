const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const burgerDivs = document.querySelectorAll("burger")



navToggle.addEventListener("click", () => {
	links.classList.toggle("links-active");
	navToggle.classList.toggle("burger-active")
})

