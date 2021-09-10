const buttonStart = document.querySelector("[data-start]");
const buttonStop = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timer = null;
buttonStop.disabled = true;
buttonStart.addEventListener("click", () => {
  timer = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000)
  buttonStart.disabled = true;
  buttonStop.disabled = false;
})
buttonStop.addEventListener("click", () => {
  clearInterval(timer);
  buttonStop.disabled = true;
  buttonStart.disabled = false;
    
})
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
