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


// Passaggi


/*
 - raccogliamo le informazioni dall'utente
 - generiamo un numero con una funzione
 - sommiamo i 2 numeri
 - verifichiamo se la somma dei due numeri è pari o dispari
 - dichiariamo il vincitore in console
*/


const OddOrEven = prompt("Pari o Dispari?", "Pari")

let OddOrEvenValidator = OddOrEven === "pari" && OddOrEven === "dispari" ? true : false;

if (OddOrEvenValidator = false) {
    console.log("il numero è sbagliato")
}








