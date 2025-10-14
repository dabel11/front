const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const inc10Button = document.getElementById("increase10");
const dec10Button = document.getElementById("decrease10");
const resetButton = document.getElementById("reset");

incButton
inc10Button
decButton
dec10Button
resetButton

let count = 0;
number.textContent = count;

function increaseCount() {
increaseCount
count++; // count = count + 1
number.textContent = count; // 숫자 변화 반영
}

function decreaseCount() {
decreaseCount
count--; // count = count - 1
number.textContent = count; // 숫자 변화 반영
}

function increase10Count() {
increase10Count
count += 10; // count = count + 1
number.textContent = count; // 숫자 변화 반영
}

function decrease10Count() {
decrease10Count
count -= 10; // count = count - 1
number.textContent = count; // 숫자 변화 반영
}

function resetCount() {
resetCount
count = 0; // count 초기화
number.textContent = count; // 숫자 변화 반영
}

incButton
incButton.addEventListener("click",increaseCount);
decButton
decButton.addEventListener("click",decreaseCount);
inc10Button
inc10Button.addEventListener("click",increase10Count);
dec10Button
dec10Button.addEventListener("click",decrease10Count);
resetButton
resetButton.addEventListener("click",resetCount);
