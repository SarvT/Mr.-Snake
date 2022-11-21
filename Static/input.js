let inpDir = { x: 0, y: 0 };
let lastInpDirection = { x: 0, y: 0 };
window.addEventListener(`keydown`, (e) => {
  switch (e.key) {
    case `ArrowUp`:
      if (lastInpDirection.y !== 0) break;
      inpDir = { x: 0, y: -1 };
      break;
    case `ArrowDown`:
      if (lastInpDirection.y !== 0) break;
      inpDir = { x: 0, y: 1 };
      break;
    case `ArrowLeft`:
      if (lastInpDirection.x !== 0) break;
      inpDir = { x: -1, y: 0 };
      break;
    case `ArrowRight`:
      if (lastInpDirection.x !== 0) break;
      inpDir = { x: 1, y: 0 };
      break;
  }
});

export function getDirection() {
  lastInpDirection = inpDir;
  return inpDir;
}
