'use strict';
/*
console.log( document.querySelector(".message").textContent)
document.querySelector(".message").textContent="Correct number!π"
console.log( document.querySelector(".message").textContent)

document.querySelector(".number").textContent=13
document.querySelector(".score").textContent=11

console.log( document.querySelector(".guess").value)
document.querySelector(".guess").value=23
console.log( document.querySelector(".guess").value)
*/

let secretNumber=Math.trunc(Math.random()*20)+1

let score=20
let highscore= 0
const displayMessage=function(message){
    document.querySelector(".message").textContent=message 
}
const backColor=function(color){
    document.querySelector("body").style.backgroundColor=color
}


document.querySelector(".check").addEventListener("click", function(){
    const guess=Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if(!guess){
        //When no input
        // document.querySelector(".message").textContent="βοΈ No number" 
        displayMessage("βοΈ No number" )
        //When player wins

    }else if(guess===secretNumber){
        displayMessage("πCorrect number!")

        document.querySelector(".number").textContent=secretNumber
backColor("#60b347")        
document.querySelector(".number").style.width="30rem"

        if(score>highscore){
            highscore=score
            document.querySelector(".highscore").textContent=highscore
        }
//When guess is wrong
    }else if(guess !==secretNumber){
        if(score>1){
            // document.querySelector(".message").textContent= guess>secretNumber?"π Too high!!":"π Too low!!"
        displayMessage(guess>secretNumber?"π Too high!!":"π Too low!!")
            score--
        document.querySelector(".score").textContent=score
        } else {
            // document.querySelector(".message").textContent="π₯ You lost the game"
            displayMessage("π₯ You lost the game")
            document.querySelector(".score").textContent=0
        }
    }
})
    // }else if
    // //When the guess is too high
    //     (guess>secretNumber){
    //         if(score>1){
    //             document.querySelector(".message").textContent="π Too high!!"
    //         score--
    //         document.querySelector(".score").textContent=score
    //         } else {
    //             document.querySelector(".message").textContent="π₯ You lost the game"
    //             document.querySelector(".score").textContent=0
    //         }
            

    //     }else if
    //     //When the guess is too low
    //         (guess<secretNumber){
    //             if(score>1){
    //                 document.querySelector(".message").textContent="π Too low!!"
    //             score--
    //             document.querySelector(".score").textContent=score
    //             } else {
    //                 document.querySelector(".message").textContent="π₯ You lost the game"
    //                 document.querySelector(".score").textContent=0
    //             }
    // }

  


document.querySelector(".again").addEventListener("click", function(){
    score=20
    secretNumber=Math.trunc(Math.random()*20)+1

    document.querySelector(".score").textContent=score

   
        document.querySelector(".guess").value=""
displayMessage("Start guessing...")
        document.querySelector(".score").textContent=score
        document.querySelector(".number").textContent="?"

        backColor("#222")        
        document.querySelector(".number").style.width="15rem"

    //In the handler function restore initial values of the 'score' and 'secretNumber' variables

    // Restore the initial conditions of the message,number,score and guess input fields 
}

)