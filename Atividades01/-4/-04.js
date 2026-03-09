let magnitudeVertical = parseInt(prompt("Defina a amplitude vertical (número de linhas):"));
let bufferVisual = "";
let resultado = "";

for (let i = 1; i <= magnitudeVertical; i++) {
    bufferVisual = bufferVisual + "*";
    resultado += bufferVisual + "\n";
}

alert(resultado);