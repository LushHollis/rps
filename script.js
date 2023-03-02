const random=(min,max)=>{return Math.floor(Math.random() * (max - min + 1) + min);}
let userinput="rock";
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
        console.log("tie");
    }
    else if (compinput=="paper"){
        console.log("comp wins");
    }
    else{
        console.log("user wins");
    }
}
else if (userinput=="paper"){
    if (compinput=="rock"){
        console.log("user wins");
    }
    else if (compinput=="paper"){
        console.log("tie");
    }
    else{
        console.log("comp wins");
    }
}
else{
    if (compinput=="rock"){
        console.log("comp wins");
    }
    else if (compinput=="paper"){
        console.log("user wins");
    }
    else{
        console.log("tie");
    }
}