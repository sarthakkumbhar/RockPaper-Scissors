let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#masssage");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerText = "Its a Draw!"
    msg.style.backgroundColor = "#5C4033"
    msg.style.color = "#f3d1d1"
};
const generateCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const randomInd = Math.floor(Math.random()*3);
    return options[randomInd];
};
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#006400"
        msg.style.color = "#f3d1d1"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#f3d1d1"
        msg.style.color = "#050505"
    }
};
const playGame=(userChoice)=>{
    //modular programming.....functions
    const compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        //draw
        drawGame();

    }
    else{
        let userWin=true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
           userWin = compChoice ==="scissor" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false :true;
        }
    showWinner(userWin, userChoice, compChoice);

    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        console.log("Choice was picked");
        playGame(userChoice);
    });
});