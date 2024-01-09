console.log("js ok");

// Palindroma exercise

const userWord = prompt("Inserisci una parola", "otto");

function isPalindromaWord(word){

    let wordContainer = word;
    let reversedWord = wordContainer.reverse();

    if (wordContainer = reversedWord){
        return true;
    }else{
        return false
    }
}

console.log(isPalindromaWord(userWord));


// Odd & Even exercise

