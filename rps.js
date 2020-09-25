const choiceButtons = document.querySelectorAll('button');

//button.addEventListener("click", rps);
choiceButtons.forEach((button) => {

     button.addEventListener('click', () => {
          console.log(button.id);
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

//The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.
function playerSelection(id)
{
     if (id == 'rock') {

          return id
     }


}


function playRPS(playerSelection)
{
     console.log(playerSelection);
     computerSelection = computerPlay();

     if (playerSelection === "rock" && computerSelection == "ROCK")
     {
        alert(`It's a Draw, you both played ${playerSelection}.`);
     }
     else if (playerSelection === "rock" && computerSelection == "PAPER")
     {
        alert("You lost");
     }
     else if (playerSelection === "rock" && computerSelection == "SCISSORS")
     {
        alert("You Won");
     }
     else
     {
        alert("test roll not impl");
     }

}


function rps()
{
    let outcome
    player = player();
    computer = computerPlay();

    if (player === "ROCK" && computer == "ROCK")
    {
        outcome = `It's a Draw, you both played ${player}.`
    }else if (player === "ROCK" && computer == "PAPER")
    {
        outcome = `You lost`
    }else if (player === "ROCK" && computer == "SCISSORS")
    {
        outcome = `You Won`
    }else
    {
        outcome = "test roll not impl"
    }


    return alert(outcome)
}



//let playerSelect = player()
//let computerSelect = computerPlay()

//rps(playerSelect, computerSelect)
