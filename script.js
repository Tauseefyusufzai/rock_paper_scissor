let userScore = 0;
let compScore = 0;
let msgContainer = document.querySelector(".msg-container")

let showUserChoice = document.querySelector(".show-choice-user");
let showComputerChoice = document.querySelector(".show-choice-computer");


const choices = document.querySelectorAll(".choice");

let audio = document.getElementById("click-audio");
let userWinAudio = document.getElementById("user-win")
let compWinAudio = document.getElementById("comp-win")

let genCompChoice;
//computer choice
const genComputerChoice = () =>{
    const option = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);//ramdon select number between 0 to 2
    genCompChoice = option[randIdx];
    return option[randIdx];
    
}

// Math.floor(Math.random());


//play game
const playGame =(userChoice) =>{
    console.log(userChoice);
    const compChoice = genComputerChoice();
    console.log(compChoice)

    if(userChoice === compChoice){
        document.querySelector("#msg").innerHTML = "Draw Game";
        msgContainer.style.backgroundColor = "rgb(195, 195, 195)"
        msgContainer.style.border = "4px dashed rgb(90, 90, 90)"
        msgContainer.style.transition = "0.5s";
        msgContainer.style.color = "black"
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice ==="Paper"? false : true;
            
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissor"? false : true;
        }else{
            userWin = compChoice ==="Rock"? false : true;
        }
        showWinner(userWin);
    };
};



//show winner
const showWinner = (userWin) =>{
    if(userWin){
        userWinAudio.play();
        document.querySelector("#msg").innerHTML = "Congratulation You Win";
        document.querySelector("#user-score").innerHTML =  userScore = userScore + 1;
        msgContainer.style.backgroundColor = "green";
        msgContainer.style.transition = "0.5s";
        msgContainer.style.border = " 4px dashed white";
        msgContainer.style.color ="white";
    }else{
        compWinAudio.play();
        compWinAudio.playbackRate = 1.5;
        document.querySelector("#msg").innerHTML = "Computer Win";
        document.querySelector("#computer-score").innerHTML =  compScore = compScore + 1;
        msgContainer.style.backgroundColor = "red";
        msgContainer.style.transition = "0.5s";
        msgContainer.style.border = " 4px dashed white";
        msgContainer.style.color = "white";
    };
};


//user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        showComputerChoice.innerHTML = genCompChoice;
        showUserChoice.innerHTML = userChoice;
        audio.play();
        audio.playbackRate = 2.0;
    });
});


window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader-wrapper').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Delay in milliseconds (3000ms = 3 seconds)
});