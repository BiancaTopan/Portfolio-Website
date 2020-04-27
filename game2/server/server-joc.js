const createServer = require('./create-server');
createServer(2000, proceseazaRequest);

function proceseazaRequest(url, mesaj) {
    if (url === '/start') {
        var numbers = mesaj.split(" ");
        var min = parseInt(numbers[0]);
        var max = parseInt(numbers[1]);
        var ok = joc.startGame(min, max);
        return ok;
    }
    else if (url === '/guess') {
        var nrToGuess = parseInt(mesaj);
        var result = joc.guess(nrToGuess);
        return result;
    };
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var joc = {
    tries: 0,
    value: 0,
    maxTries: 0,

    startGame: function (min, max) {
        this.tries = 0;
        this.value = rand(min, max);
        console.log(this.value);
        this.maxTries = 1 + Math.floor(Math.log2(Math.abs(max - min)) * 1.4);
        console.log(this.maxTries);
        return "Number of tries: " + this.maxTries.toString();
    },

    guess: function (nrToGuess) {

        if (this.tries === this.maxTries) {
            return "GAME OVER "
        }
        else if (nrToGuess > this.value) {
            this.tries++;
            return "PREA MARE "  + (this.maxTries - this.tries).toString();
        }
        else if (nrToGuess < this.value) {
            this.tries++;
            return "PREA MIC " + (this.maxTries - this.tries).toString();
        }
        else {
            this.tries = 0;
            return "YOU WIN " +  this.tries.toString(); 
    }
        
    }
};

