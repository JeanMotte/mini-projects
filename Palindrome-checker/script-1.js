const inputWord = document.getElementById("word");
let answerDisplayed = document.getElementById("answer");

function reverseStr(str) {
    return str.split('').reverse().join('')};

function checkInput() {
    if (inputWord.value == "" || inputWord.value == null) {
        answerDisplayed.addEventListener("d-none")
    } else {
        check()
    }

}

function check() {
    const input = inputWord.value
    const reverse = reverseStr(input)
     
    if (input === reverse) {
        // alert("Input is a palindrome")
        answerDisplayed.innerText = input.charAt(0).toUpperCase() + input.slice(1) + " is a palindrome."
    } else {
        // alert("isn't a palindrome")
        answerDisplayed.innerHTML = input.charAt(0).toUpperCase() + input.slice(1) + " isn't a palindrome."
    }
    
    input = ""
};

