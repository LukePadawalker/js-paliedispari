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




/*

Passaggi

 - raccogliamo le informazioni dall'utente
 - generiamo un numero con una funzione
 - sommiamo i 2 numeri
 - verifichiamo se la somma dei due numeri è pari o dispari
 - dichiariamo il vincitore in console
*/


const userChoice = prompt("Pari o Dispari?", "Pari");
console.log(userChoice);


const userNum = prompt("Inserisci un numero da 1 a 5", "3");
console.log(userNum);

if (userChoice !== "Pari" && userChoice !== "Dispari"){
    console.log("Hai sbagliato. Scegli se pari o dispari");
} else if (isNaN(userNum) || userNum < 1 || userNum > 5) {
    console.log("Hai inserito un numero non valido. Inserisci un numero da 1 a 5.");
} else {
    console.log("Input valido.");

    function getRandomNumber(num){

        let randomNum = Math.floor(Math.random() * 5) + 1;
        console.log("RandomNum = " + randomNum);


        let sum = randomNum + parseInt(num);
        console.log("Sum = " + sum);

        return sum;

    }

    function isEven(){
        let finalResult;

        if (getRandomNumber(userNum) % 2 == 0){
            console.log("IL numero è pari");
            finalResult = "Pari";
        } else{
            console.log("IL numero è dispari");
            finalResult = "Dispari";
        }

        return finalResult;
    }


    if (isEven() == userNum){
        console.log("Hai vinto!")
    } else{
        console.log("Hai perso");
    }







}










