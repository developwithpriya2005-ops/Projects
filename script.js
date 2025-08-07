let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComputerChoice=()=>{
    const options=["rock", "paper","scissor"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];
};


const showWinner=(userwin)=>{
    const msg = document.getElementById("msg");
    if(userwin){
        console.log("you win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You lose!");
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game draw!. Play Again";
    msg.style.backgroundColor="#081b31"
}

const playGame = (userChoice) => {
    console.log("user choice= ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice= ", computerChoice);

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

        showWinner(userwin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});