const coffeeBtn = document.querySelector(".coffee-btn");
const foodBtn = document.querySelector(".food-btn");
const drinkBox = document.querySelector(".drink-box");
const foodBox = document.querySelector(".food-box");

class Timer {
  constructor(coffeeBtn, foodBtn, drinkBox, foodBox) {
    this.coffeeBtn = coffeeBtn;
    this.foodBtn = foodBtn;
    this.foodBox = foodBox;
    this.drinkBox = drinkBox;

    this.coffeeBtn.addEventListener("click", this.drink);
    this.foodBtn.addEventListener("click", this.food);
  }

  drink = () => {
    this.foodBox.style.display = "none";
    this.drinkBox.style.display = "block";
  };

  food = () => {
    this.foodBox.style.display = "block";
    this.drinkBox.style.display = "none";
  };
}

const timer = new Timer(coffeeBtn, foodBtn, drinkBox, foodBox);
