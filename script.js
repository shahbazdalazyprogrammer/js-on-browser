let choice;
let hChoice;
let hScore = 0, cScore = 0, round = 0;
let isGameOver = false;
let printMsg;

const rBtn = document.querySelector('#rock');
const pBtn = document.querySelector('#paper');
const sBtn = document.querySelector('#scissors');

const roundResult = document.querySelector("#round-result")
const finalResult = document.querySelector("#final-result");
const results = document.querySelector(".results");

const resetBtn = document.querySelector("#reset");

const hidden = resetBtn.getAttribute("hidden");

function main() {

    rBtn.addEventListener
        ('click', (e) => {
            displayFinalResult();
            hChoice = "rock";
            playGame();
        });


    pBtn.addEventListener
        ('click', (e) => {
            displayFinalResult();
            hChoice = "paper";
            playGame();
        });

    sBtn.addEventListener
        ('click', (e) => {
            displayFinalResult();
            hChoice = "scissors";
            playGame();
        });

}

function displayFinalResult() {
    if (hScore === 5 || cScore === 5) {
        printMsg = hScore === cScore ? "Game Tied" : hScore > cScore ? "Computer sucks!" : "Human sucks!";
        results.setAttribute("style", "background-color: green; color:black");
        finalResult.textContent = `Game over: Winner says: ${printMsg}`;
        console.log(printMsg)
        return;
    }

}


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(hChoice, cChoice) {
    // let score;
    if (hChoice === cChoice) {
        return -1;
    }
    else {
        // return score = gameLogic(hChoice, cChoice);
        return gameLogic(hChoice, cChoice);
    }
}

function gameLogic(hC, cC) {
    if (
        (hC === "rock" && cC === "scissors")
        || (hC === "scissors" && cC === "paper")
        || (hC === "paper" && cC === "rock")
    ) {
        return 1;
    }
    else if (
        (cC === "rock" && hC === "scissors")
        || (cC === "scissors" && hC === "paper")
        || (cC === "paper" && hC === "rock")
    ) {
        return 0;
    }
}

function playGame() {
    if (hScore === 5 || cScore === 5) {
        restartGame();
        return;
    }
    let scorePoint = 0;
    for (i = 0; i < 1; i++) {
        cChoice = getComputerChoice() === 0 ? "rock" : getComputerChoice() === 1 ? "paper" : "scissors";
        console.log(cChoice);

        console.log(hChoice);

        console.log(`round=${++round}`);
        scorePoint = playRound(hChoice, cChoice);
        if (scorePoint === 1) {
            hScore++;
        }
        else if (scorePoint === 0) {
            cScore++;
        }
        else {
            console.log(`${round} -> Round tied!!!`);
        }
    }
    console.log("### Results ###");
    let roundScore = `Human score = ${hScore} - ${cScore} = Computer Score`;
    printMsg = hScore === cScore ? `Game Tied: ${roundScore}` : hScore > cScore ? `Computer sucks!: ${roundScore}` : `Human sucks!: ${roundScore}`;

    roundResult.textContent = `Round = ${round}: ${printMsg}`;
    return printMsg;
}

function restartGame() {

    if (hScore === 5 || cScore === 5) {
        if (hidden) {
            resetBtn.removeAttribute("hidden");

            resetBtn.addEventListener('click', () => {
                hScore = 0;
                cScore = 0;
                round = 0;
                roundResult.textContent = '';
                finalResult.textContent = '';
                results.removeAttribute("style");
                resetBtn.setAttribute("hidden", "hidden")
            });
        }
    }
}


main();


