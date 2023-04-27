var r = Math.floor(Math.random()*6)+1;
var l = "images/dice"+r+".png";

document.querySelectorAll("img")[0].setAttribute("src",l);


var rr = Math.floor(Math.random()*6)+1;
var ll = "images/dice"+rr+".png";

document.querySelectorAll("img")[1].setAttribute("src",ll);

if(r<rr){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else if(r>rr){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}


