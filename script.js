let resultText = document.getElementById('result');

function check(){

    let userInput = document.getElementById('userWord').value;

    let userWord = userInput.toLowerCase().replace(/\s+/g, '');

    let reverseWord = userWord.split("").reverse().join("");
    
    if (userWord == reverseWord){

        resultText.classList.remove('hidden', 'no');

        resultText.classList.add('yes');

        resultText.innerHTML = 'This is a Palindrome'

    } else if(userWord != reverseWord){

        resultText.classList.remove('hidden', 'yes');

        resultText.classList.add('no');

        resultText.innerHTML = 'This is not a Palindrome'

    } 

}