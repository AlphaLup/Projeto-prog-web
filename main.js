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

function plusSize() {
    document.getElementById('titulo').style.fontSize = "500%";
}

function lessSize() {
    document.getElementById("titulo").style.fontSize = "100%";
}

function normalSize() {
    document.getElementById("titulo").style.fontSize = "2em";
}