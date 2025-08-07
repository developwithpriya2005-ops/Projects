let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");


const genComputerChoice=()=>{
    const options=["rock", "paper","scissor"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
};


const showWinner=(userwin,userChoice,computerChoice)=>{
    const msg = document.getElementById("msg");
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    
    msg.innerText="Game draw!. Play Again";
    msg.style.backgroundColor="#081b31"
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userwin = true;

        if (userChoice === "rock") {
            userwin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = computerChoice === "scissor" ? false : true;
        } else {
            userwin = computerChoice === "rock" ? false : true;
        }

        showWinner(userwin,userChoice,computerChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});
