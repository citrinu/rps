

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
function player()
{
   let input = prompt()

   return input.toUpperCase()
}




function rps(player, computer)
{
    let outcome

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
