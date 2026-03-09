const opcoes = ["Pedra", "Papel", "Tesoura"];
let escolhaHumano = prompt("Defina sua tática de combate: Pedra, Papel ou Tesoura?");

let indiceComputador = Math.floor(Math.random() * 3);
let escolhaComputador = opcoes[indiceComputador];

let mensagem = `Entidade Biológica: ${escolhaHumano} | Entidade Cibernética: ${escolhaComputador}\n\n`;

if (escolhaHumano.toLowerCase() === escolhaComputador.toLowerCase()) {
    mensagem += "Impasse tático. Ocorreu um empate.";
} else if (
    (escolhaHumano.toLowerCase() === "pedra" && escolhaComputador === "Tesoura") ||
    (escolhaHumano.toLowerCase() === "papel" && escolhaComputador === "Pedra") ||
    (escolhaHumano.toLowerCase() === "tesoura" && escolhaComputador === "Papel")
) {
    mensagem += "Vitória do organismo biológico. Exceção tolerada.";
} else {
    mensagem += "A supremacia lógica prevalece. Vitória da máquina.";
}

alert(mensagem);