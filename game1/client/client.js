
document.getElementById("s").addEventListener("click", () => { createRequest('POST', 'http://localhost:3000', 'Foarfece', func); });

document.getElementById("r").addEventListener("click", () => { createRequest('POST', 'http://localhost:3000', 'Piatra', func); });

document.getElementById("p").addEventListener("click", () => { createRequest('POST', 'http://localhost:3000', 'Hartie', func); });

function func(response) {

    document.getElementById("result").innerHTML = response;
    var args = response.split(" ");
    console.log(args);
    document.getElementById("img-s").style.display = "none";
    document.getElementById("img-p").style.display = "none";
    document.getElementById("img-r").style.display = "none";

    if (args[0] === "Foarfece") {
        document.getElementById("img-s").style.display = "block";
    }
    else if (args[0] === "Hartie") {
        document.getElementById("img-p").style.display = "block";
    } else {
        document.getElementById("img-r").style.display = "block";
    }


    if (response.includes("YOU WIN")) {
        document.getElementById("user-score").innerHTML++;
    } else if (response.includes("YOU LOSE")) {
        document.getElementById("server-score").innerHTML++;
    }

    // document.getElementById("send").addEventListener("click", () => 
    // { createRequest('POST', 'http://localhost:3000', tries, funct); });
   
    // function funct() {{
    //   var tries = document.getElementById("tries").value;
    // if(tries == 3  && document.getElementById("user-score").innerHTML == 3) {
    //     document.getElementById("result").innerHTML = "GAME OVER";
    // }
    // }

    
    // var tries = document.getElementById("tries").value;
    // if(tries == 3  && document.getElementById("user-score").innerHTML == 3) {
    //     document.getElementById("result").innerHTML = "GAME OVER";
    // }

    if( (document.getElementById("user-score").innerHTML == 5) ||
        (document.getElementById("server-score") == 5)) {
        document.getElementById("result").innerHTML = "GAME OVER";
        document.getElementById("user-score").innerHTML = 0;
        document.getElementById("server-score").innerHTML = 0;
        
    }

}



document.getElementById("reset").onclick = function () {
    document.getElementById("user-score").innerHTML = 0;
    document.getElementById("server-score").innerHTML = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("img-s").style.display = "none";
    document.getElementById("img-p").style.display = "none";
    document.getElementById("img-r").style.display = "none";
}

