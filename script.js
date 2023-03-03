const random=(min,max)=>{return Math.floor(Math.random() * (max - min + 1) + min);}
let results=document.getElementById('results');

function playGame(userinput){
    let compinput;
    switch (random(1,3)){
        case 1:
            compinput="rock";
            break;
        case 2:
            compinput="paper";
            break;
        case 3:
            compinput="scissors";
            break;
        default:
            console.warn("default in switch");
            compinput="rock";
    }

    if (userinput=="rock"){
        if (compinput=="rock"){
            results.innerHTML="It's a tie!";
        }
        else if (compinput=="paper"){
            results.innerHTML="The computer wins...";
        }
        else{
            results.innerHTML="You win!";
        }
    }
    else if (userinput=="paper"){
        if (compinput=="rock"){
            results.innerHTML="You win!";
        }
        else if (compinput=="paper"){
            results.innerHTML="It's a tie!";
        }
        else{
            results.innerHTML="The computer wins...";
        }
    }
    else{
        if (compinput=="rock"){
            results.innerHTML="The computer wins...";
        }
        else if (compinput=="paper"){
            results.innerHTML="You win!";
        }
        else{
            results.innerHTML="It's a tie!";
        }
    }
}