const recintos = [
    { numero: 1, bioma: "savana", tamanhoTotal: 10, animaisExistentes: 3 },
    { numero: 2, bioma: "floresta", tamanhoTotal: 5, animaisExistentes: 0 },
    { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animaisExistentes: 1 },
    { numero: 4, bioma: "rio", tamanhoTotal: 8, animaisExistentes: 0 },
    { numero: 5, bioma: "savana", tamanhoTotal: 9, animaisExistentes: 1 }
];

const animais = {
    "LEAO": { tamanho: 3, bioma: "savana", carnívoro: true },
    "LEOPARDO": { tamanho: 2, bioma: "savana", carnívoro: true },
    "CROCODILO": { tamanho: 3, bioma: "rio", carnívoro: true },
    "MACACO": { tamanho: 1, bioma: "savana ou floresta", carnívoro: false },
    "GAZELA": { tamanho: 2, bioma: "savana", carnívoro: false },
    "HIPOPOTAMO": { tamanho: 4, bioma: "savana ou rio", carnívoro: false }
};

document.getElementById('verificarBtn').addEventListener('click', () => {
    const tipoAnimal = document.getElementById('tipoAnimal').value.toUpperCase();
    const quantidade = parseInt(document.getElementById('quantidadeAnimal').value, 10);
    const resultado = verificarRecintos(tipoAnimal, quantidade);
    document.getElementById('resultado').innerText = resultado;
});

function verificarRecintos(tipoAnimal, quantidade) {
    const resultado = [];

    // Validação do animal
    const animalInfo = animais[tipoAnimal];
    if (!animalInfo) {
        return "Animal inválido";
    }

    // Validação da quantidade
    if (quantidade <= 0) {
        return "Quantidade inválida";
    }

    // Verificar recintos viáveis
    recintos.forEach(recinto => {
        const { numero, bioma, tamanhoTotal, animaisExistentes } = recinto;
        const tamanhoUsado = animaisExistentes * (animalInfo.carnívoro ? 1 : 1);
        let espaçoNecessário = quantidade + tamanhoUsado;

        if (animalInfo.carnívoro) {
            if (animaisExistentes > 0) return;
        } else {
            if (tipoAnimal === "MACACO" && animaisExistentes === 0) {
                return;
            }
            if (tipoAnimal === "HIPOPOTAMO" && !bioma.includes("savana e rio")) {
                return;
            }
            espaçoNecessário += (animaisExistentes > 0) ? 1 : 0;
        }

        const espaçoLivre = tamanhoTotal - espaçoNecessário;
        if (espaçoLivre >= 0) {
            resultado.push(`Recinto ${numero} (espaço livre: ${espaçoLivre} total: ${tamanhoTotal})`);
        }
    });

    return resultado.length > 0 ? resultado.join(', ') : "Não há recinto viável";
}
