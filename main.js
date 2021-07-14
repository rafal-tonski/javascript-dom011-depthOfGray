let red = 100;
let green = 100;
let blue = 100;

let depthOfGray = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  switch (e.keyCode) {
    case 40:
      depthOfGray > 0 ? (depthOfGray -= 10) : depthOfGray;
      break;
    case 38:
      depthOfGray < 255 ? (depthOfGray += 10) : depthOfGray;
      break;
    default:
      console.log("Tym klawiszem nic nie zrobisz");
  }

  document.body.style.backgroundColor = `rgb(${depthOfGray}, ${depthOfGray}, ${depthOfGray})`;
};

window.addEventListener("keydown", changeColor);
