let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Insira seu palpite (1-20):"));
    
    if (palpite < numeroSecreto) {
        alert("O valor alocado na memória é superior. Eleve sua estimativa.");
    } else if (palpite > numeroSecreto) {
        alert("O valor alocado na memória é inferior. Reduza sua estimativa.");
    } else {
        alert("ACERTOU!!");
    }
}