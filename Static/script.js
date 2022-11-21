import {
  update as updateS,
  render as renderS,
  snakeSpeed,
  snakeIntersect,
  getSnakeHead,
} from "./snake.js";
import { update as updateF, render as renderF } from "./food.js";
import { gridTouch } from "./grid.js";

let lastRenderTime = 0;
let gameOver;
const board = document.getElementById(`board`);

function main(curTime) {
  if (gameOver) {
    if (confirm("You lost! Press OK to play again.")) {
      window.location = "./game.html";
    }
    return;
  }

  window.requestAnimationFrame(main);
  let secsSinceLastRen = (curTime - lastRenderTime) / 1000;
  if (secsSinceLastRen < 1 / snakeSpeed) {
    return;
  }
  lastRenderTime = curTime;

  update();
  render();
}

window.requestAnimationFrame(main);

function update() {
  updateS();
  updateF();
  daethCheck();
}

function render() {
  board.innerHTML = ``;
  renderS(board);
  renderF(board);
}

function daethCheck() {
  gameOver = gridTouch(getSnakeHead()) || snakeIntersect();
}
