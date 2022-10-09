const fontsizeControlerRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontsizeControlerRef.addEventListener("input", onFontsizeControler);

function onFontsizeControler (event){
    textRef.style.fontSize = `${event.currentTarget.value}px`;
}