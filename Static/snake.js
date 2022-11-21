import { getDirection } from "./input.js";

export const snakeSpeed = 3;
let newSegments = 0;
const snakesBody = [{ x: 11, y: 11 }];

export function update() {
  addSegments();
  const inpDirection = getDirection();
  for (let index = snakesBody.length - 2; index >= 0; index--) {
    snakesBody[index + 1] = { ...snakesBody[index] };
  }

  snakesBody[0].x += inpDirection.x;
  snakesBody[0].y += inpDirection.y;
}

export function render(board) {
  snakesBody.forEach((segment) => {
    const snakeElement = document.createElement(`div`);
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add(`snake`);
    board.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function eatFood(position, { ignoreHead = false } = {}) {
  return snakesBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return positionCheck(segment, position);
  });
}

function positionCheck(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let index = 0; index < newSegments; index++) {
    snakesBody[snakesBody.length] = { ...snakesBody[snakesBody.length - 1] };

    newSegments = 0;
  }
}

export function getSnakeHead() {
  return snakesBody[0];
}

export function snakeIntersect() {
  return eatFood(snakesBody[0], { ignoreHead: true });
}
