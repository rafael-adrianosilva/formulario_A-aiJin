let P = 0;
let M = 0;
let G = 0;


function fazerPedido() {
    let pedido = prompt("Qual tamanho você deseja? (P, M, G)").toUpperCase();
    switch (pedido) {
        case "P":
            alert("Você pediu uma Açaí Pequeno (250ml) por R$10,00");
            P = 10;
            break;
        case "M":
            alert("Você pediu uma Açaí Médio (450ml) por R$15,00");
            M = 15;
            break;
        case "G":
            alert("Você pediu uma Açaí Grande (750ml) por R$20,00");
            G = 20;
            break;
        default:
            alert("Tamanho inválido!");
    }

    function formaPagamento() {

        document.write("<p>PEDIDO:</p>");
        if (pedido == "P") {
            document.write("Açaí: Pequeno (P), R$" + P + "<br>");
        } else if (pedido == "M") {
            document.write("Açaí: Médio (M), R$" + M + "<br>");
        } else {
            document.write("Açaí: Grande (G), R$" + G + "<br>");
        }

        let forma = prompt("Qual a forma de pagamento? (Dinheiro, Cartão (acréscimo de 5%)").toLowerCase();
        switch (forma) {
            case "dinheiro":
                alert("Você escolheu pagar em Dinheiro.");
                break;
            case "cartão":
                alert("Você escolheu pagar com Cartão (acréscimo de 5%).");
                if (pedido == "P") {
                    let valorC = P * 1.05;
                    document.write("TOTAL COM ACRÉSCIMO: R$" + valorC + "<br>");
                } else if (pedido == "M") {
                    let valorC = M * 1.05;
                    document.write("TOTAL COM ACRÉSCIMO: R$" + valorC + "<br>");
                } else {
                    let valorC = G * 1.05;
                    document.write("TOTAL COM ACRÉSCIMO: R$" + valorC + "<br>");
                }
                break;
            default:
                alert("Forma de pagamento inválida!");
        }
    }
    document.getElementById('formaPagamento').addEventListener('click', function () {
        formaPagamento();
    })
}
document.getElementById("fazerpedido").addEventListener("click", function () {
    fazerPedido();
});