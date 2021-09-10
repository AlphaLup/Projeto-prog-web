document.addEventListener("DOMContentLoaded", botoes);


function botoes() {
    div = document.createElement("div");
    div.innerHTML = `
        <button onclick="plusSize()">+</button>
        <button onclick="normalSize()">normal</button>
        <button onclick="lessSize()">-</button>
        `
    document.body.prepend(div);
}

let tamanho = 2;

function refresh() {
    const primeiroh1 = document.querySelector("h1");
    primeiroh1.style.fontSize = `${tamanho}em`;
}

function plusSize() {
    tamanho += 0.25;
    refresh();
}

function lessSize() {
    if (tamanho > 0)
        tamanho -= 0.25;
        refresh();
}

function normalSize() {
    document.getElementById("titulo").style.fontSize = "2em";
}