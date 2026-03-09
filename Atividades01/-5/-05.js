let nTermos = parseInt(prompt("Quantifique os termos (n) da série polinomial:"));
let somatorioTotal = 0;
let termoCorrente = 0;
let stringSerie = "";

for (let k = 1; k <= nTermos; k++) {
    termoCorrente = (termoCorrente * 10) + 1;
    somatorioTotal += termoCorrente;

    if (k === 1) {
        stringSerie += termoCorrente;
    } else {
        stringSerie += " + " + termoCorrente;
    }
}

let resultado = `${stringSerie}\n\nA soma é: ${somatorioTotal}`;
alert(resultado);