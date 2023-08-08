let first_number = document.getElementById("firstNumber");
let second_number = document.getElementById("secondNumber");
let first =parseInt(Math.random() * 100);
let second = parseInt(Math.random() * 100);
first_number.textContent = first;
second_number.textContent = second;
console.log(first+second);
let user_input = document.getElementById("userInput");
let sum = parseInt(first_number.textContent) + parseInt(second_number.textContent);
let result = document.getElementById("gameResult");
document.getElementById("checkButton").addEventListener("click", function() {
    if (parseInt(user_input.value) === sum) {
        result.textContent = "Congratulations! your got it right";
        result.classList.remove("wrong-answer");
        result.classList.add("right-answer");
    } else {
        result.textContent = "Please try again!!";
        result.classList.add("wrong-answer");
        result.classList.remove("right-answer");
    }
})
document.getElementById("restartButton").addEventListener("click", function() {
    first_number.textContent = parseInt(Math.random() * 100);
    second_number.textContent = parseInt(Math.random() * 100);
    sum = parseInt(first_number.textContent) + parseInt(second_number.textContent);
    result.textContent = "";
})