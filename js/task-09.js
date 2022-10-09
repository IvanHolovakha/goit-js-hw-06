function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetRef = document.querySelector(".widget");
const backgroundColorValueRef = document.querySelector(".color");
const changeColorButtonRef = document.querySelector(".change-color");

changeColorButtonRef.addEventListener("click", onChangeColorButton);

function onChangeColorButton(event) {
  widgetRef.style.backgroundColor = getRandomHexColor();
  backgroundColorValueRef.textContent = widgetRef.style.backgroundColor;
}