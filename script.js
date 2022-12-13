
let cards = [];
let totalCards = 0;

let cardEl = document.getElementById('card-el');
let sumEl = document.getElementById('sum-el');
let messageEl = document.getElementById('message-el')

let isAlive = false;
let hasBlackjack = false;


function getRandom() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

function startgame() {

    isAlive = true ;

    let firstCard = getRandom();
    let secondCard = getRandom();

    cards = [firstCard, secondCard];
    totalCards = firstCard + secondCard;
    
    rendergame();

}

function rendergame() {
    cardEl.innerHTML = "Cards : ";

    for (let i = 0; i < cards.length; i += 1) {
        cardEl.innerHTML += cards[i] + " "
    }

    sumEl.innerHTML = "Sum : " + " " + totalCards;

    if (totalCards < 21) {
        message = "Do you want to draw a new card ?"
        isAlive = true;
    }

    else if (totalCards === 21) {
        message = "You've the Black Jack !!!"
        hasBlackjack = true;
    }
    else {
        message = "You've out of the game !!!"
        isAlive = false;
    }

    messageEl.innerHTML = message;

}



function newcard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandom();
        totalCards += card;
        cards.push(card);
        rendergame();
    }


}



// for (let count = 1 ; count < 21 ; count +=1 ) {
//     console.log(count)
// }



// For Loop in Array ... 



// let array = ["Srikanth", "Roopa Sri " , "Bujjilli","Gujjilii"]

// let arrayTwo = ["Srii", "Roopa" ,"Bujji" , "Gujji"]

// for (let i=0 ; i < array.length ; i += 1) {
//     console.log(arrayTwo[i]);
// }



// let loopEl = document.getElementById('loop-el') ;

// let array = ["My ", " Name ", "Is " , "Srikanth"];

// for (let i=0 ; i < array.length ; i++) {
//     loopEl.innerHTML += array[i] 
// }



// Return Method ... 


// let first = 100 ;
// let second = 105 ;

// function total () {
//     return first + second ;
// }

// let totalValue = total() ;

// console.log (totalValue)


// Random Numbers ... 

// let randomnumber = Math.floor(Math.random()*6);

// console.log (randomnumber);


// logical Operator .. 

// AND ... 

// let hasSolvedChallage = false ;
// let hasHintsleft = false ;


// if (hasSolvedChallage === false && hasHintsleft === false) {
//     showSolution()
// }

// function showSolution () {
//     console.log("Showing the Solution....")
// }

// OR ... 

// let solvedChallage = true ;
// let hintsleft = false ;


// if (solvedChallage === true || hintsleft === true) {
//     showSolution()
// }

















// let array = [0,1,2,3,4]

// console.log(array)

// array.pop()
// array.pop()
// array.pop()

// console.log(array)

// let arrayEl = document.getElementById('array-el');

// let array = ["Python Developer", "Frontend Developer"]

// arrayEl.innerHTML = array[1]