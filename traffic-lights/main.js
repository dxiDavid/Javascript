const red = document.querySelector(".red");
const amber = document.querySelector(".amber");
const green = document.querySelector(".green");

const time = 1000;

const addActiveClass = (item) => {
  item.classList.add("active");
};

const removeActiveClass = (item) => {
  item.classList.remove("active");
};

const cycleLights = () => {
  // Initial state
  addActiveClass(red);

  // Set up the cycle
  setInterval(() => {
    removeActiveClass(red);
    addActiveClass(amber);

    setTimeout(() => {
      removeActiveClass(amber);
      addActiveClass(green);
    }, time);

    setTimeout(() => {
      removeActiveClass(green);
      addActiveClass(amber);
    }, time * 2);

    setTimeout(() => {
      removeActiveClass(amber);
      addActiveClass(red);
    }, time * 3);

  }, time * 4);
};

// Start the cycle
cycleLights();
