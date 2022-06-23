
var numeroAtualSpan = document.getElementById("numeroAtual");
var numeroAtual = 0;

function incrementa() {
    numeroAtual += 1;
    numeroAtualSpan.innerHTML = numeroAtual;
}

function decrementa() {
    numeroAtual -= 1;
    numeroAtualSpan.innerHTML = numeroAtual;
}
