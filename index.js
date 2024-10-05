let nomeHeroi = "Superman"
let numVitorias = 50;
let numDerrotas = 20;
let nivel = "";

function subVitDer(numVitorias, numDerrotas) {
    return numVitorias - numDerrotas;
}

let minhasVitorias = subVitDer(numVitorias, numDerrotas);

if (minhasVitorias <= 10) {
    nivel = "Ferro";
} else if (minhasVitorias >= 11 && minhasVitorias <= 20) {
    nivel = "Bronze";
} else if (minhasVitorias >= 21 && minhasVitorias <= 30) {
    nivel = "Prata";
} else if (minhasVitorias >= 31 && minhasVitorias <= 40) {
    nivel = "Ouro";
} else if (minhasVitorias >= 41 && minhasVitorias <= 50) {
    nivel = "Platina";
} else if (minhasVitorias >= 51 && minhasVitorias <= 60) {
    nivel = "Diamante";
} else if (minhasVitorias >= 61 && minhasVitorias <= 70) {
    nivel = "Ascendente";
} else if (minhasVitorias >= 71 && minhasVitorias <= 99) {
    nivel = "Imortal";
} else if (minhasVitorias >= 100) {
    nivel = "Radiante";
}

console.log(`O ${nomeHeroi} tem ${minhasVitorias} vitórias e está no nível ${nivel}`);