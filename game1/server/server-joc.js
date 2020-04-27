const createServer = require('./create-server');
createServer(3000, proceseazaRequest);

function proceseazaRequest(method, mesaj) {
    var choices = ['Foarfece', 'Piatra', 'Hartie'];

    var random = rand(choices);


    if (mesaj === 'Piatra') {
        return result(mesaj, random);
    }

    if (mesaj === 'Hartie') {
        return result(mesaj, random);
    }

    if (mesaj === 'Foarfece') {
        return result(mesaj, random);
    }


    function result(mesaj, random) {
        if ((mesaj === 'Piatra' && random === 'Hartie') || (mesaj === 'Hartie' && random === 'Foarfece') ||
            (mesaj === 'Foarfece' && random === 'Piatra')) {
            return "YOU LOSE";
        } else if (mesaj === random) {
            return "DRAW";
        } else {
            return "YOU WIN";
    }
}

    function rand(choices) {
        return choices[Math.floor(Math.random() * choices.length)];
    }
}
