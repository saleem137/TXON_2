let inputEl = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let clearButtonEl = document.getElementById("clearBtn");
clearButtonEl.classList.add("button1");

let inputValue = "";
for (let item of buttons) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        if (buttonText === "X") {
            buttonText = "*";
            inputValue += buttonText;
            inputEl.value = inputValue;
        } else if (buttonText === "AC") {
            inputValue = "";
            inputEl.value = inputValue;
        } else if (buttonText === "=") {
            inputEl.value = eval(inputValue);
        } else if (buttonText === "%") {
            buttonText = 0.01;
            inputValue *= buttonText;
            inputEl.value = eval(inputValue);
        } else {
            inputValue += buttonText;
            inputEl.value = inputValue;
        }
    });
}