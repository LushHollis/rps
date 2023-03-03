const random=(min,max)=>{return Math.floor(Math.random() * (max - min + 1) + min);}
let results=document.getElementById('results');
let userimg=document.getElementById('userimg');
let compimg=document.getElementById('compimg');

function playGame(userinput){
    document.getElementById("userpick").innerHTML=`You pick ${userinput}.`;
    let compinput;
    switch (random(1,3)){
        case 1:
            compinput="rock";
            compimg.setAttribute('src',"https://www.goodfreephotos.com/albums/vector-images/grey-stone-rock-vector-clipart.png");
            break;
        case 2:
            compinput="paper";
            compimg.setAttribute('src',"https://clipartix.com/wp-content/uploads/2016/04/Paper-clip-art-free-free-clipart-images-clipartcow.png");
            break;
        case 3:
            compinput="scissors";
            compimg.setAttribute('src',"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7814538/scissors-stationery-clipart-sm.png");
            break;
        default:
            console.warn("default in switch");
            compinput="rock";
    }
    document.getElementById("comppick").innerHTML=`The computer picks ${compinput}.`;

    if (userinput=="rock"){
        userimg.setAttribute('src',"https://www.goodfreephotos.com/albums/vector-images/grey-stone-rock-vector-clipart.png");
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
        userimg.setAttribute('src',"https://clipartix.com/wp-content/uploads/2016/04/Paper-clip-art-free-free-clipart-images-clipartcow.png");
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
        userimg.setAttribute('src',"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7814538/scissors-stationery-clipart-sm.png");
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