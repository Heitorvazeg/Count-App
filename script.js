const aumentarbt = document.getElementById("increaseBtn");
const diminuirbt = document.getElementById("decreaseBtn");
const resetarbt = document.getElementById("resetBtn");
const tela = document.getElementById("mylabel")
let contagem = 0;

aumentarbt.onclick = function() {
    contagem = contagem + 1;
    tela.textContent = contagem;
}

diminuirbt.onclick = function() {
    contagem = contagem - 1;
    tela.textContent = contagem;
}

resetarbt.onclick = function() {
    contagem = 0;
    tela.textContent = contagem;
}