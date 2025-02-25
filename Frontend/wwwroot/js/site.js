// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function myFunction() {
    let operacao = document.getElementById("operacao").value;
    let valorA = Number(document.getElementById("numeroA").value)
    let valorB = Number(document.getElementById("numeroB").value)

    document.getElementById("resultado").value = calculo(valorA, valorB, operacao);

}
function calculo(numA, numB, operacao) {
    if (operacao == "SOMA") {
        return numA + numB;
    }
    if (operacao == "SUBTRACAO") {
        return numA - numB;
    }
    if (operacao == "MULTIPLICACAO") {
        return numA * numB;
    }
    if (operacao == "DIVISAO") {
        return numA / numB;
    }
}