const message = document.querySelector('.message')
const score = document.querySelector('.score')
const buttons = document.querySelectorAll('button')
let playername = prompt("Player Name :")

message.innerHTML="<b>Ready Go !!"

let winner = [0,0]

for(i=0;i<buttons.length;i++)
{
    console.log(buttons[i].innerText)
    buttons[i].addEventListener('click',select)
}

function select(e)
{
    let Player = e.target.innerText
    let CompSel = Math.random()
    
    if      (CompSel < 0.34)  {CompSel = "Rock"}
    else if (CompSel <=0.67)  {CompSel = "Paper"}
    else    {CompSel = "Scissor"}

    console.log(Player,CompSel)

    let result = checkWinner(Player,CompSel)
    console.log("Result : ", result)
    
    if(result == playername)
    { result+=" wins!" 
        winner[0]++
    }else if (result == "Computer")
    {
        result+= " wins!"
        winner[1]++
    }else
    {
        result+=" result in a Tie Match"
    }
    score.textContent=`${playername} [${winner[0]}] : Computer [${winner[1]}]`
    
    message.innerHTML=`${Player} vs ${CompSel} <br> <b>${result}<br>`
}

function checkWinner(pl,co)
{
    //Draw
    if(pl===co)
        { return "Draw" }

    //IF Rock Selected by Player
    if(pl === "Rock"){
        if (co=="Paper")
             { return "Computer"}
        else { return playername }
    }

    
    //IF Paper Selected by Player
    if (pl=== "Paper"){
        if (co === "Scissor") 
             { return "Computer"} 
        else { return playername }
    }

    
    //IF Scissor Selected by Player
    if(pl === "Scissor")
    {
        if (co === "Rock")
             { return "Computer" }
        else { return playername }
    }
}