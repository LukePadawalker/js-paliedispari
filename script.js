console.log("js ok");

// Palindroma exercise

const userWord = prompt("Inserisci una parola", "otto");

function isPalindromaWord(word){

    let splitWord = word.split("");
    console.log(splitWord);

    let reversedWord = splitWord.slice().reverse();
    console.log(reversedWord);

    let result = splitWord.join('') === reversedWord.join('') ? true : false;

    return result;
}

console.log(isPalindromaWord(userWord));


// Odd & Even exercise

