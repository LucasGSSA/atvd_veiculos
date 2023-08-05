const readline = require('readline-sync');
const perguntaTerrestre = readline.question('Seu veiculo é terrestre? ');

if(perguntaTerrestre == "sim"){
    const pergunta1Pessoa = readline.question('Seu veiculo cabe apenas uma pessoa? ');
    if(pergunta1Pessoa == "sim"){
        const perguntaPesado = readline.question('Seu veiculo é pesado? ');
        if(perguntaPesado == "sim"){
            console.log("Seu veiculo é um Trator!");
        } else if(perguntaPesado == "nao"){
            const perguntaPedal = readline.question('Seu veiculo tem pedal? ');
            if(perguntaPedal == "sim"){
                console.log("seu veiculo é uma Bicicleta!")
            } else if(perguntaPedal == "nao"){
                console.log("nao temos o seu veiculo aqui :(");
            }   else {
                console.log("Desculpe, nao conseguimos identificar sua resposta, responda apenas com sim ou nao.");
            };
        }   else{
            console.log("Desculpe, nao conseguimos identificar sua resposta, responda apenas com sim ou nao.");
        };
    }   else if(pergunta1Pessoa == "nao"){
        const perguntaCapacete = readline.question('Em seu veiculo é obrigatorio o uso de capacete? ');
        if(perguntaCapacete == "sim"){
            console.log("Seu veiculo é uma moto!");
        }   else if(perguntaCapacete == "nao"){
                console.log("nao temos seu veiculo!");
        }   else{
            console.log("Desculpe, nao conseguimos identificar sua resposta, responda apenas com sim ou nao.");
        }
    }   else {
        console.log("Desculpe, nao conseguimos identificar sua resposta, responda apenas com sim ou nao.");
    };
} else if(perguntaTerrestre == "nao"){
    console.log("nao temos o seu veiculo aqui :(");
} else{
    console.log("Desculpe, nao conseguimos identificar sua resposta, responda apenas com sim ou nao.");
};




