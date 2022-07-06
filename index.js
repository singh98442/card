

let card1= randomNumber();
let card2 = randomNumber();

let sum = card1 + card2;
let hasblackjack = false;
let isalive = true;
let message = "";
let messageEl;
let cards = [card1, card2]
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
// console.log(sum);

// let age = 20;
//  if (age < 21){
//     console.log("you are not allowed to enter");
//  }else {
//     console.log("you are welcome")
//  }
//  let age = 1044;

//  if (age < 100){
//     console.log("you are not eligibl")
//  } else if (age ===100){
//     console.log("you are egible fopr b'day card");

//  }else{
//     console.log("you are not eligibl because you are more than 100+")

//  }

// let message = "jkguyhfd";
// message = "you are logged in"

// console.log(message);

function startGame() {
    renderGame();
}

function renderGame(){
    if (sum <=20){
        message = "Do you want to draw a new card"
        
    }else if (sum ===21){
        message = "wohoo! you have got black-jack"
        hasblackjack = true
    }else{
        message = "you are out of the game"
        isalive = false
    }
    messageEl = document.getElementById("message-el")
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i=0; i< cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    
}

function newCard(){
    // console.log("hello new card funcction")
    // if (sum <=20){
    //     let card3 = 5;
    //     sum = sum + card3;
    //     startGame();
    //     cardsEl.textContent = "Cards: " + card1 +"  " +card2 + " " + card3
       
    
    // // }
    if (isalive === true && hasblackjack === false){
        let card3 = randomNumber();
        sum = sum + card3;
        cards.push(card3);
        renderGame();
        

    }

   
    

}

// function demo(){

// let document1 = ["hello", "i", "am", "from","Nepal"]
// let result2 = document.querySelector("#demo")

// for( let i=0; i< document1.length; i++){
//     result2.textContent += document1[i] + " "
// }
// }

function randomNumber() {
    let randomnumber1 = Math.floor((Math.random() * 13)+ 1);
    if (randomnumber1 > 10){
        return 10;
    }else if(randomnumber1 === 1){
        return 11;
    }else
    
    return randomnumber1;
    
}