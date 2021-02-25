let nota = 150;
let resultado;

if (nota >= 80 && nota <= 100) {
    resultado = 'Aprovada'
}
else if (nota >= 60 && nota < 80) {
    resultado = 'Lista'
}
else if (nota < 60) {
    resultado = 'Reprovado'
}

switch (resultado) {
    case 'Aprovada':
        console.log('Parabéns, você foi aprovado(a)!');
        break;

    case 'Lista':
        console.log('Você está na lista de espera');
        break;

    case 'Reprovado':
        console.log('Você foi reprovado(a)');
        break;

    default:
        console.log('Nota não localizada')
}
