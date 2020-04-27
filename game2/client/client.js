
document.getElementById('play').style.visibility = 'hidden';

document.getElementById("start").addEventListener("click", () => {
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    createRequest('POST', 'http://localhost:2000/start', min + " " + max, func);
    document.getElementById('play').style.visibility='visible';
    document.getElementById("play").disabled = true;

});

function func(response) {
    document.getElementById("tries").innerHTML = response;
    console.log(response);
}


document.getElementById("number").addEventListener("keyup", () => {
    var a = document.getElementById("number").value;
    if (a !== "") {
         document.getElementById("play").disabled = false;
    } 

});


document.getElementById("play").addEventListener("click", () => {
    var nrToGuess = document.getElementById("number").value;
    createRequest('POST', 'http://localhost:2000/guess', nrToGuess, funct);

});

function funct(response) {
    var args = response.split(" ");
   document.getElementById("remaining-tries").innerHTML = "Remaining tries: " + args[2];
   document.getElementById("message").innerHTML = args[0] + " " + args[1];

   if (response.includes("YOU WIN") || response.includes("GAME OVER")) {
    document.getElementById("play").innerHTML = "Play again";
    document.getElementById("play").onclick = function () {
        location.reload();
    }
   }
}
document.getElementById("reset").onclick = function () { 
    location.reload();
}
