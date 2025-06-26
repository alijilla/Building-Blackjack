let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl =  document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//let sumEl = document.querySelector("#sum-el")

let player = {
    name:"Per", 
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame(){
cardsEl.textContent = "Cards: "
sumEl.textContent = "Sum: " + sum

for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "  
}

if (sum <= 20) {
    message = "Do you want to draw a new card?"
   
} else if (sum === 21) {
    message = "You got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive =false
}
messageEL.textContent = message



}

function newCard(){

    if (isAlive === true && hasBlackJack === false) {    
    console.log("Draw New Deck Cards")
    let card = getRandomCard()
    sum +=card
    cards.push(card)
    renderGame()
 } 

}

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13) + 1
    
    if (randomNumber === 1){
        return 11
    } else if(randomNumber >10){    //randomNumber >=11 && randomNumber <=13
        return 10
    } else {
        return randomNumber
    }
    
   
}