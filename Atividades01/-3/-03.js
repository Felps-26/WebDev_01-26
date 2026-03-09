let fator = parseInt(prompt("Insira o multiplicando base para a matriz:"));
let resultado = `Renderizando a tabuada para o coeficiente ${fator}:\n\n`;

for (let i = 1; i <= 10; i++) {
    let produto = fator * i;
    resultado += `${fator} x ${i} = ${produto}\n`;
}

alert(resultado);