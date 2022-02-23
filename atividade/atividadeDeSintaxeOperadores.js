function compararNumeros(n1, n2) {
    if(!n1 || !n1) return "Defina dois números";

    const frase1 = criarFrase1(n1, n2);
    const frase2 = criarFrase2(n1, n2);

    return `${frase1} ${frase2}`;
}

function criarFrase1(n1, n2) {
    let saoIguais = '';

    if (n1 !== nun2) {
        saoIguais = 'não';

    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criarFrase2(n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(compararNumeros(30, 40))