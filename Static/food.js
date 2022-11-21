import { expandSnake, eatFood } from "./snake.js";
import { updateFoodPos as renadomGridPos } from "./grid.js";
let food = updateFoodPos();
const expansionRate = 1;

export function update() {
  if (eatFood(food)) {
    expandSnake(expansionRate);
    food = updateFoodPos();
  }
}

export function render(board) {
  const foodElement = document.createElement(`div`);
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add(`food`);
  board.appendChild(foodElement);
}

function updateFoodPos() {
  let newFoodPos;
  while (newFoodPos == null || eatFood(newFoodPos)) {
    newFoodPos = renadomGridPos();
  }
  return newFoodPos;
}
