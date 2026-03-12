//buscar elemento html
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent); //puxando conteudo da tag

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

//console.log(paragrafo1.textContent);
for(let i = 0; i < paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar um elemento via java script
let destino = document.getElementById("elemento");
let p = document.createElement("p"); //cria o novo elemento
p.textContent = "paragrafo criado via JS";
destino.append(p); //adicinona ao DOM

let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["item1", "item2"];
for (let i = 0; i < itens.length; i++) {
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul);

//função somar
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}


