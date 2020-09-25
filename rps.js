const choiceButtons = document.querySelectorAll('button');
const resultWindow = document.querySelector('results');


//button.addEventListener("click", rps);
choiceButtons.forEach((button) => {

     button.addEventListener('click', () => {
          //console.log(button.id);
          playRPS(button.id);
          //playerSelection(button.id);
     });
});




function computerPlay()
{
    let selection = Math.floor((Math.random() * 3) + 1) //rando 1-3

    switch (selection)
    {
        case 1:
            selection = "ROCK"
            break;
        case 2:
            selection = "PAPER"
            break;
        case 3:
            selection = "SCISSORS"
            break;
        default:
            alert("NO")

    }

    return selection

}


function playRPS(playerSelection)
{
     //console.log(playerSelection);
     computerSelection = computerPlay();

     if (playerSelection === "ROCK" && computerSelection == "ROCK")
     {
        results.textContent = `It's a Draw, you both played ${playerSelection}.`;
     }
     else if (playerSelection === "ROCK" && computerSelection == "PAPER")
     {
        results.textContent = "You lost";
     }
     else if (playerSelection === "ROCK" && computerSelection == "SCISSORS")
     {
        results.textContent = "You won";
     }
     else
     {
        results.textContent = "test roll not impl";
     }

}
