let p01cScore = 0 ;
let p02cScore = 0 ;
let total01Score = 0 ;
let total02Score = 0 ;
let zero = 0 ;
let dbSix =0 ;
let player01torn = true ;
// let targetScore=

const player01 = document.querySelector(".player01");
const player02 = document.querySelector(".player02");
const player01score = document.querySelector(".player01score");
const player02score = document.querySelector(".player02score");
const p01CurrentScore = document.querySelector(".player01CurrentScore");
const p02CurrentScore = document.querySelector(".player02CurrentScore");
const newGame = document.querySelector(".newGame");
const hold = document.querySelector(".hold");
const rollDice = document.querySelector(".rollDice");
const dice01 = document.querySelector(".dice01");
const dice02 = document.querySelector(".dice02");
const targetScore = document.querySelector(".targetScore");
const startGame = document.querySelector(".startGame");
const setScore = document.querySelector(".setScore");
const result02 = document.querySelector(".result02");
const result01 = document.querySelector(".result01");
const playAgain= document.querySelector(".playAgain");
const playAgain01= document.querySelector(".playAgain01");



rollDice.addEventListener("click" , function(){
    
    const randomNum01 = Math.floor(Math.random() * 6)+1 ;
    const randomNum02 = Math.floor(Math.random() * 6)+1 ;
 
    const dice01img ="/asst/images/dice-"+ randomNum01 +".png";
    dice01.setAttribute('src',dice01img);
    const dice02img ="/asst/images/dice-"+ randomNum02 +".png";
    dice02.setAttribute('src',dice02img);
    dbSix =randomNum01 + randomNum02;

    if(player01torn) {
        p01cScore += randomNum01 + randomNum02 ;
        p01CurrentScore.textContent =  p01cScore;
    }else{  
        p02cScore += randomNum01 + randomNum02 ;
        p02CurrentScore.textContent =  p02cScore;

    } if( dbSix==12){        //------Checking if the dice are both equal to six
        if(player01torn){
            p01CurrentScore.textContent =  zero;
            player01torn = ! player01torn ;
            p01cScore = zero;
            alart("damn it !!! The queue has been changed")
        }else{  
            p02CurrentScore.textContent =  zero;
            player01torn = ! player01torn ;
            p02cScore = zero;
            alart("damn it !!! The queue has been changed")

        }
    }
});

hold.addEventListener("click", function(){
    if(player01torn) {
        total01Score += p01cScore ;
        player01score.textContent = total01Score;
        p01CurrentScore.textContent = zero;
    }else{
        total02Score = total02Score + p02cScore ;
        player02score.textContent = total02Score ;
        p02CurrentScore.textContent = zero ;

    } 
    p01cScore = zero ;
    p02cScore = zero ;
    player01torn = ! player01torn ;
    
    if( total01Score == targetScore.value ||  total02Score > targetScore.value){
        result01.style.visibility = "visible";
    } 
    else if(total02Score == targetScore.value || total01Score > targetScore.value){
        result02.style.visibility = "visible";
}

})

startGame.addEventListener("click", function(){
    setScore.style.visibility="hidden"; 
    p01cScore = zero ;
    p02cScore = zero ;
    total01Score = zero ;
    total02Score = zero ; 
    p01CurrentScore.textContent = zero ;
    p02CurrentScore.textContent = zero ; 
    player01score.textContent = zero ;
    player02score.textContent = zero;
    player01torn = true ;
 })

newGame.addEventListener("click", function(){
    p01cScore = zero ;
    p02cScore = zero ;
    total01Score = zero ;
    total02Score = zero ; 
    p01CurrentScore.textContent = zero ;
    p02CurrentScore.textContent = zero ; 
    player01score.textContent = zero ;
    player02score.textContent = zero;
    player01torn = true ;
    setScore.style.visibility="visible";

})

playAgain.addEventListener("click", function(){
    result01.style.visibility = "hidden";
    result02.style.visibility = "hidden";
    setScore.style.visibility = "visible";
})
playAgain01.addEventListener("click", function(){
    result01.style.visibility = "hidden";
    result02.style.visibility = "hidden";
    setScore.style.visibility = "visible";
})




