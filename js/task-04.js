let counterValue = 0;
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
const counterRef = document.querySelector("#value");

decrementButtonRef.addEventListener("click", onDecrementButtonRef);
incrementButtonRef.addEventListener("click", onIncrementButtonRef)

function onDecrementButtonRef (event) {
counterValue -= 1;
counterRef.textContent = counterValue;
}

function onIncrementButtonRef (event) {
counterValue += 1;
counterRef.textContent = counterValue;
}