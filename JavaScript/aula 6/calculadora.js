function calculadora() {
    const operacao = Number(prompt('Escolha um operação: \n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)'));
}

if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!');
    calculadora
} else {
    let n1 = Number(prompt('Isira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
        alert('Erro - parãmetros inálidos!')
    } else {
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperaco();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperaco();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperaco();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperaco();

        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a  ${resultado}`)
            novaOperaco();
        }

        function novaOperaco() {
            let opcao = prompt(`Deseja fazer outra operação?\n 1 = sim\n 2 = não`);
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais"')
            } else {
                alert('Digite uma opção válida!')
                novaOperacao();
            }
        }
    }

    // if (operacao = 1) {
    //     soma();
    // } else if (operacao = 2) {
    //     subtracao();
    // } else if (operacao = 3) {
    //     multiplicacao();
    // } else if (operacao = 4) {
    //     divisaoReal();
    // } else if (operacao = 5) {
    //     divisaoInteira();
    // } else if (operacao = 6) {
    //     potenciacao();
    // }
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira;
            break;
        case 6:
            potenciacao();
            break;
    }

}

calculadora();

